import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxHierarchicalGridComponent,
    IgxListComponent,
    IgxOverlayService
} from "igniteui-angular";
import { fromEvent, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CUSTOMERS } from "../data";

enum GridSection {
    THEAD = "igx-grid__thead-wrapper",
    TBODY = "igx-grid__tbody-content",
    FOOTER = "igx-grid__tfoot"
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
    private _section: GridSection;

    public constructor(colleciton: Item[], section: GridSection) {
        this._collection = colleciton;
        this._section = section;
    }

    public set collection(collection: Item[]) {
        this._collection = collection;
    }

    public get collection() {
        return this._collection;
    }

    public set gridSection(section: GridSection) {
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

const theadKeyCombinations = [
    new Item("space", "select column", false),
    new Item("ctrl + arrow up/down", "sorts the column asc/desc", false),
    new Item("alt + arrow left/right/up/down", "expand/collapse active multi column header", false),
    new Item("alt + l", "opens the advanced filtering", false),
    new Item("ctrl + shift + l", "opens the excel style filtering", false)
];

const tbodyKeyCombinations: Item[] = [
    new Item("enter", "enter in edit mode", false),
    new Item("alt + arrow left/up", "collapse row island row", false),
    new Item("alt + arrow right/down", "expand row island row", false),
    new Item("ctrl + Home/End", "navigates to the upper-left/bottom-right cell", false)
];

const summaryCombinations: Item[] = [
    new Item("ArrowLeft", "navigates one summary cell right", false),
    new Item("ArrowRight", "navigates one summary cell left", false),
    new Item("Home", "navigates to the first summary cell", false),
    new Item("End", "navigates to the last summary cell", false)
];

@Component({
    selector: "grid-keyboardnav",
    templateUrl: "./hgrid-keyboard-guide.component.html",
    styleUrls: ["hgrid-keyboard-guide.component.scss"],
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
export class HGridKeyboardnavGuide implements OnInit, OnDestroy {

    @ViewChild(IgxHierarchicalGridComponent, { static: true })
    public hGrid: IgxHierarchicalGridComponent;

    @ViewChild(IgxListComponent, { static: true })
    public listref: IgxListComponent;

    public get keyboardCollection() {
        return this._keyboardHandler.collection;
    }

    public gridTarget: GridUnderManagement;

    private _destroyer = new Subject<boolean>();
    private _keyboardHandler = new KeyboardHandler([], GridSection.THEAD);

    public constructor(
        private cdr: ChangeDetectorRef,
        private _overlay: IgxOverlayService) { }

    @HostListener("keyup.tab", ["$event"])
    @HostListener("keyup.shift.tab", ["$event"])
    public onTab(evt) {
        if (this.hGrid.crudService.cell) {
            return;
        }

        const gridSection = evt.srcElement.className;
        this.changeKeyboardCollection(gridSection);
    }

    @HostListener("click", ["$event"])
    public onClick() {
        if (this.hGrid.crudService.cell) {
            return;
        }

        const gridSection = document.activeElement.className;
        this.changeKeyboardCollection(gridSection);
    }

    public ngOnInit() {
        this.hGrid.data = CUSTOMERS;
        for (const item of this.hGrid.data) {
            const names = item.CompanyName.split(" ");
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
            item.PersonelDetails = `${item.ContactTitle}: ${item.ContactName}`;
            item.CompanysAnnualProfit = (100000 + (Math.random() * Math.floor(1000000))).toFixed(0);
        }

        this.gridTarget = new GridUnderManagement(this.hGrid, this._keyboardHandler, this._destroyer, this.cdr);
        this.gridTarget.subscribe();

        this.listref.onItemClicked.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                args.event.stopPropagation();
            });
    }

    public ngOnDestroy() {
        this._destroyer.next();
    }

    public expandChange(evt) {
        if (!this._keyboardHandler.collection.length) {
            return;
        }

        this._keyboardHandler.selectItem(2);
    }

    public onCheckChange(evt, idx) {
        evt.checked ? this._keyboardHandler.selectItem(idx) : this._keyboardHandler.deselectItem(idx);
    }

    public changeKeyboardCollection(gridSection) {
        switch (gridSection) {
            case GridSection.THEAD:
                this._keyboardHandler.collection = theadKeyCombinations;
                this._keyboardHandler.gridSection = GridSection.THEAD;
                break;
            case GridSection.TBODY:
                this._keyboardHandler.collection = tbodyKeyCombinations;
                this._keyboardHandler.gridSection = GridSection.TBODY;
                break;
            case GridSection.FOOTER:
                this._keyboardHandler.collection = summaryCombinations;
                this._keyboardHandler.gridSection = GridSection.FOOTER;
                break;
            default:
                this._keyboardHandler.collection = [];
                return;
        }
    }

    public onGridCreated(evt) {
        fromEvent(evt.grid.elementRef.nativeElement, "click").pipe(takeUntil(this._destroyer))
            .subscribe(() => {
                this.gridTarget = new GridUnderManagement(evt.grid, this._keyboardHandler, this._destroyer, this.cdr);
                this.gridTarget.subscribe();
            });

        fromEvent(evt.grid.elementRef.nativeElement, "focus").pipe(takeUntil(this._destroyer))
            .subscribe(() => {
                this.gridTarget = new GridUnderManagement(evt.grid, this._keyboardHandler, this._destroyer, this.cdr);
                this.gridTarget.subscribe();
            });

        fromEvent((evt.grid as IgxHierarchicalGridComponent).tbody.nativeElement, "focus")
            .pipe(takeUntil(this._destroyer)).subscribe(() => {
                this.gridTarget = new GridUnderManagement(evt.grid, this._keyboardHandler, this._destroyer, this.cdr);
                this.gridTarget.subscribe();
            });
    }

    public gridKeydown(evt) {
        const key = evt.key.toLowerCase();
        if (this._keyboardHandler.gridSection === GridSection.FOOTER) {
            switch (key) {
                case "end":
                    this._keyboardHandler.selectItem(3);
                    break;
                case "home":
                    this._keyboardHandler.selectItem(2);
                    break;
                case "arrowleft":
                    this._keyboardHandler.selectItem(0);
                    break;
                case "arrowright":
                    this._keyboardHandler.selectItem(1);
                    break;
                default:
                    break;
            }
            return;
        }

        if (this._keyboardHandler.gridSection === GridSection.THEAD) {
            if (key === "l" && evt.altKey) {
                this._keyboardHandler.selectItem(3);
                return;
            }

            const activeCol = this.gridTarget.hGrid.navigation.activeNode;
            const col = this.gridTarget.hGrid.visibleColumns.find
                (c => c.visibleIndex === activeCol.column && c.level === activeCol.level);
            if (key === "l" && evt.ctrlKey && evt.shiftKey && col && !col.columnGroup && col.filterable) {
                this._keyboardHandler.selectItem(4);
            }

            if ((key === "arrowup" || key === "arrowdown") && evt.ctrlKey && col && !col.columnGroup && col.sortable) {
                this._keyboardHandler.selectItem(1);
            }
        }

        if (this._keyboardHandler.gridSection === GridSection.TBODY) {
            if (key === "enter") {
                const activeCell = this.gridTarget.hGrid.navigation.activeNode;
                const cell = this.gridTarget.hGrid.getCellByColumnVisibleIndex(activeCell.row, activeCell.column);
                if (cell && cell.column.editable && cell.editMode) {
                    this._keyboardHandler.selectItem(0);
                }
            }
        }
    }
}

export class GridUnderManagement {
    public hGrid: IgxHierarchicalGridComponent;
    public destroyer = new Subject();
    public keyboardHandler: KeyboardHandler;
    public cdr: ChangeDetectorRef;

    constructor(hGrid: IgxHierarchicalGridComponent, keyboardHandler: KeyboardHandler,
                destroyer: Subject<boolean>, cdr: ChangeDetectorRef) {
        this.hGrid = hGrid;
        this.keyboardHandler = keyboardHandler;
        this.destroyer = destroyer;
        this.cdr = cdr;
    }

    public subscribe() {
        this.hGrid.onColumnSelectionChange.pipe(takeUntil(this.destroyer))
            .subscribe((args) => {
                const evt = args.event;
                if (evt.type === "keydown") {
                    this.keyboardHandler.selectItem(0);
                }
            });

        this.hGrid.onRowToggle.pipe(takeUntil(this.destroyer))
            .subscribe((args) => {
                const evt = args.event as KeyboardEvent;
                if (!evt || evt.type !== "keydown") {
                    return;
                }

                return evt.code === "ArrowLeft" || evt.code === "ArrowUp" ? this.keyboardHandler.selectItem(1) :
                    this.keyboardHandler.selectItem(2);
            });

        this.hGrid.onSelection.pipe(takeUntil(this.destroyer))
            .subscribe((args) => {
                this.handleDOMSelection(args.event);
            });
    }

    private handleDOMSelection(evt) {
        const target = evt.target.className;
        if (target === GridSection.TBODY && (evt.code === "End" || evt.code === "Home") && evt.ctrlKey) {
            this.keyboardHandler.selectItem(3);
            this.cdr.detectChanges();
        }
    }
}
