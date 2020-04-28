import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxGridComponent, IgxOverlayService, SortingDirection } from "igniteui-angular";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DATA } from "../../data/customers";

enum GridSections {
    THEAD = "igx-grid__thead-wrapper",
    TBODY ="igx-grid__tbody-content"
}

class Item {
    public title: string;
    public subTitle: string;
    public completed: boolean;

    public constructor(title: string, subTitle: string, completed: boolean) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
    }
}

class KeyboardHandler {
    private _collection: Item[];

    public constructor(colleciton: Item[]) {
        this._collection = colleciton;
    }

    public set collection(collection: Item[]) {
        this._collection = collection;
    }

    public get collection() {
        return this._collection;
    }

    public completeItem(idx: number) {
        this._collection[idx].completed = true;
    }
}

const tbodyKeyCombinations: Item[] = [
    new Item("ctrl + Arrow Key Up", "move to top cell in column", false),
    new Item("ctrl + alt + arrow right/left", "group/ungroup the active column", false),
    new Item("ctrl + Arrow Key Down", "move to bottom cell in column", false),
    new Item("ctrl + Right Arrow Key", "move to rightmost cell in row", false)
];

const theadKeyCombinations = [
    new Item("ctrl + shift + l", "opens the excel style filtering", false),
    new Item("shift + alt + arrow left/right", "group/ungroup the active column", false),
    new Item("alt + arrow left/right/up/down", "expand/collapse active multi column header", false),
];
@Component({
    selector: "grid-keyboardnav",
    templateUrl: "./grid-keyboardnav-sample.component.html",
    styleUrls: ["grid-keyboardnav-sample.component.scss"],
    animations: [
      trigger("completed", [
        state("completed", style({
          backgroundColor: "#7FFF00"
        })),
        transition("* => completed", [
          animate(".3s")
        ])
      ]),
      trigger("load", [
        transition(":enter", [
            style({ opacity: 0 }),
            animate(".3s", style({ opacity: 1 }))
          ])
      ])
    ]
})
export class GridKeyboardnavGuide implements OnInit, OnDestroy {

    @ViewChild(IgxGridComponent, { static: true})
    public grid: IgxGridComponent;

    public get keyboardCollection() {
        return this._keyboardHandler.collection;
    }

    private _destroyer = new Subject();
    private _keyboardHandler = new KeyboardHandler(theadKeyCombinations);

    public constructor(private cdr: ChangeDetectorRef, private _overlay: IgxOverlayService) {}

    @HostListener("keyup.tab", ["$event"])
    @HostListener("keyup.shift.tab", ["$event"])
    public onTab(evt) {
        const gridSection = evt.srcElement.className;
        this.changeKeyboardCollection(gridSection);
    }

    @HostListener("click", ["$event"])
    public onClick (evt) {
        const gridSection = document.activeElement.className;
        this.changeKeyboardCollection(gridSection);
    }

    public ngOnInit() {
        this.grid.data = DATA;

        this._overlay.onOpening.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
            if (args.componentRef.componentType.name === "IgxGridExcelStyleFilteringComponent") {
              this._keyboardHandler.completeItem(0);
              this.cdr.detectChanges();
            }
          });

        this.grid.groupingExpansionStateChange.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
              this._keyboardHandler.completeItem(1);
          });

        this.grid.onGroupingDone.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
              this._keyboardHandler.completeItem(1);
          });

        this.grid.groupingExpressions = [
            { fieldName: "ProductName", dir: SortingDirection.Asc }
        ];
    }

    public ngOnDestroy() {
        this._destroyer.next();
    }

    public expandChange(evt) {
        if (evt) {
            this._keyboardHandler.completeItem(2);
        }
    }

    public changeKeyboardCollection(gridSection) {
        switch (gridSection) {
            case GridSections.THEAD:
                this._keyboardHandler.collection = theadKeyCombinations;
                break;
            case GridSections.TBODY:
                this._keyboardHandler.collection = tbodyKeyCombinations;
                break;
            default:
                return;
        }
    }

}
