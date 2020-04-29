import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxGridComponent, IgxOverlayService, SortingDirection } from "igniteui-angular";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DATA } from "../../data/customers";

enum GridSections {
    THEAD = "igx-grid__thead-wrapper",
    TBODY = "igx-grid__tbody-content"
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
    private _section: GridSections;

    public constructor(colleciton: Item[], section: GridSections) {
        this._collection = colleciton;
        this._section = section;
    }

    public set collection(collection: Item[]) {
        this._collection = collection;
    }

    public get collection() {
        return this._collection;
    }

    public set gridSection(section: GridSections) {
      this._section = section;
    }

    public get gridSection() {
      return this._section;
    }

    public selectItem(idx: number) {
        this._collection[idx].completed = true;
    }

    public deselectItem(idx: number) {
      this._collection[idx].completed = false;
    }
}

const tbodyKeyCombinations: Item[] = [
    // new Item("ctrl + Arrow Key Up", "move to top cell in column", false),
    new Item("enter", "enter in edit mode", false),
    new Item("alt + arrow left/up", "collapse master datils row", false),
    new Item("alt + arrow right/down", "expand master datils row", false),
    new Item("ctrl + alt + arrow right/left", "group/ungroup the active column", false)
    // new Item("ctrl + Arrow Key Down", "move to bottom cell in column", false),
    // new Item("ctrl + Right Arrow Key", "move to rightmost cell in row", false)
];

const theadKeyCombinations = [
    new Item("space", "select column", false),
    new Item("alt + l", "opens the advanced filtering", false),
    new Item("ctrl + shift + l", "opens the excel style filtering", false),
    new Item("ctrl + arrow up/down", "sorts the column asc/desc", false),
    new Item("shift + alt + arrow left/right", "group/ungroup the active column", false),
    new Item("alt + arrow left/right/up/down", "expand/collapse active multi column header", false)
];
@Component({
    selector: "grid-keyboardnav",
    templateUrl: "./grid-keyboardnav-sample.component.html",
    styleUrls: ["grid-keyboardnav-sample.component.scss"],
    animations: [
      trigger("toggle", [
        state("selected", style({
          color: "#4eb862"
        })),
        state("deselected", style({
          color: "black"
        })),
        transition("deselected => selected", [
          animate(".3s")
        ]),
        transition("selected => deselected", [
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
    private _keyboardHandler = new KeyboardHandler(theadKeyCombinations, GridSections.THEAD);

    public constructor(private cdr: ChangeDetectorRef, private _overlay: IgxOverlayService) {}

    @HostListener("keyup.tab", ["$event"])
    @HostListener("keyup.shift.tab", ["$event"])
    public onTab(evt) {
        const gridSection = evt.srcElement.className;
        this.changeKeyboardCollection(gridSection);
    }

    @HostListener("click", ["$event"])
    public onClick () {
        const gridSection = document.activeElement.className;
        this.changeKeyboardCollection(gridSection);
    }

    public ngOnInit() {
        this.grid.data = DATA;
        for (const item of this.grid.data) {
          const names = item.CompanyName.split(" ");
          item.FirstName = names[0];
          item.LastName = names[names.length - 1];
          item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
          item.PersonelDetails = `${item.ContactTitle}: ${item.ContactName}`;
          item.CompanysAnnualProfit = (100000 + (Math.random() * Math.floor(1000000))).toFixed(0);
        }

        this._overlay.onOpening.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
              const componentType = args.componentRef.componentType.name;
              switch (componentType) {
                case "IgxGridExcelStyleFilteringComponent":
                    this._keyboardHandler.selectItem(2);
                    this.cdr.detectChanges();
                    break;
                case "IgxAdvancedFilteringDialogComponent":
                    this._keyboardHandler.selectItem(1);
                    break;
                default:
                    return;

              }
          });

        this.grid.groupingExpansionStateChange.pipe(takeUntil(this._destroyer))
          .subscribe(() => {
              if (this._keyboardHandler.gridSection === GridSections.TBODY) {
                this._keyboardHandler.selectItem(3);
              }
          });

        this.grid.onGroupingDone.pipe(takeUntil(this._destroyer))
          .subscribe(() => {
              this._keyboardHandler.selectItem(4);
          });

        this.grid.onColumnSelectionChange.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
              const evt = args.event;
              if (evt.type === "keydown") {
                this._keyboardHandler.selectItem(0);
              }
          });

        this.grid.onSortingDone.pipe(takeUntil(this._destroyer))
          .subscribe(() => {
              this._keyboardHandler.selectItem(3);
          });

        this.grid.onCellEditEnter.pipe(takeUntil(this._destroyer))
          .subscribe(() => {
            this._keyboardHandler.selectItem(0);
          });

        this.grid.onRowToggle.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
            const evt = args.event as KeyboardEvent;
            if (evt.type !== "keydown") {
              return;
            }

            return evt.code === "ArrowLeft" || evt.code === "ArrowUp" ? this._keyboardHandler.selectItem(1) :
              this._keyboardHandler.selectItem(2);
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
            this._keyboardHandler.selectItem(5);
        }
    }

    public changeKeyboardCollection(gridSection) {
        switch (gridSection) {
            case GridSections.THEAD:
                this._keyboardHandler.collection = theadKeyCombinations;
                this._keyboardHandler.gridSection = GridSections.THEAD;
                break;
                case GridSections.TBODY:
                this._keyboardHandler.collection = tbodyKeyCombinations;
                this._keyboardHandler.gridSection = GridSections.TBODY;
                break;
            default:
                return;

        }
    }

    public onCheckChange(evt, idx) {
      evt.checked ? this._keyboardHandler.selectItem(idx) : this._keyboardHandler.deselectItem(idx);
    }

}
