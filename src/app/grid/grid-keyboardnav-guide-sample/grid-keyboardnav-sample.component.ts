import { animate, state, style, transition, trigger, group } from "@angular/animations";
import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxColumnComponent,
    IgxColumnGroupComponent,
    IgxGridCellComponent,
    IgxGridComponent,
    IgxListComponent,
    SortingDirection
} from "igniteui-angular";
import { IgxGridExpandableCellComponent } from "igniteui-angular/lib/grids/grid/expandable-cell.component";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DATA } from "../../data/customers";

enum GridSection {
    THEAD = "igx-grid__thead-wrapper",
    TBODY = "igx-grid__tbody-content",
    FOOTER = "igx-grid__tfoot"
}

enum ItemAction {
    Filterable,
    Sortable,
    Selectable,
    Groupable,
    Collapsible,
    Expandable,
    Editable,
    Always
}

class Item {
    public title: string;
    public subTitle: string;
    public action: ItemAction;
    public active = false;

    private _completed: boolean;

    public constructor(title: string, subTitle: string, completed: boolean, itemAction?: ItemAction) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
        this.action = itemAction;

        if (itemAction === ItemAction.Always) {
            this.active = true;
        }
    }

    public set completed(value: boolean) {
        if (this.active) {
            this._completed = value;
        }
    }

    public get completed() {
        return this._completed;
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

    public enableActionItems(action: ItemAction[]) {
        this.resetCollection();
        action.forEach(element => {
            this._collection
            .filter(e => e.action === element)
            .map(e => e.active = true);
        });
    }

    public resetCollection() {
        this._collection.forEach(e => {
            if (e.action !== ItemAction.Always) {
                e.active = false;
            }
        });
    }

    public selectItem(idx: number) {
        this._collection[idx].completed = true;
    }

    public deselectItem(idx: number) {
        this._collection[idx].completed = false;
    }
}

const theadKeyCombinations = [
    new Item("space", "select column", false, ItemAction.Selectable),
    new Item("ctrl + arrow up/down", "sorts the column asc/desc", false, ItemAction.Sortable),
    new Item("shift + alt + arrow left/right", "group/ungroup the active column", false, ItemAction.Groupable),
    new Item("alt + arrow left/right/up/down", "expand/collapse active multi column header",
        false, ItemAction.Collapsible),
    new Item("ctrl + shift + l", "opens the excel style filtering", false, ItemAction.Filterable),
    new Item("alt + l", "opens the advanced filtering", false, ItemAction.Filterable)
];

const tbodyKeyCombinations: Item[] = [
    new Item("enter", "enter in edit mode", false, ItemAction.Editable),
    new Item("alt + arrow left/up", "collapse master details row", false, ItemAction.Always),
    new Item("alt + arrow right/down", "expand master details row", false, ItemAction.Always),
    new Item("alt + arrow right/left", "expand/collapse the group row", false, ItemAction.Expandable),
    new Item("ctrl + Home/End", "navigates to the upper-left/bottom-right cell", false, ItemAction.Always)
];

const summaryCombinations: Item[] = [
    new Item("ArrowLeft", "navigates one summary cell right", false),
    new Item("ArrowRight", "navigates one summary cell left", false),
    new Item("Home", "navigates to the first summary cell", false),
    new Item("End", "navigates to the last summary cell", false)
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
                animate(".3s", style({ opacity: .4 }))
            ])
        ])
    ]
})
export class GridKeyboardnavGuide implements OnInit, OnDestroy {

    @ViewChild(IgxGridComponent, { static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxListComponent, { static: true })
    public listref: IgxListComponent;

    public get keyboardCollection() {
        return this._keyboardHandler.collection;
    }

    private _destroyer = new Subject();
    private _keyboardHandler = new KeyboardHandler([], GridSection.THEAD);

    public constructor(private cdr: ChangeDetectorRef) { }

    @HostListener("keyup.tab", ["$event"])
    @HostListener("keyup.shift.tab", ["$event"])
    public onTab(evt) {
        if (this.grid.crudService.cell) {
            return;
        }

        const gridSection = evt.srcElement.className;
        this.changeKeyboardCollection(gridSection);
    }

    @HostListener("click", ["$event"])
    public onClick() {
        if (this.grid.crudService.cell) {
            return;
        }

        const gridSection = document.activeElement.className;
        this.changeKeyboardCollection(gridSection);
        this.switchHeaderCombinations();
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

        this.grid.groupingExpansionStateChange.pipe(takeUntil(this._destroyer))
            .subscribe(() => {
                if (this._keyboardHandler.gridSection === GridSection.TBODY) {
                    this._keyboardHandler.selectItem(3);
                }
            });

        this.grid.onColumnSelectionChange.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                const evt = args.event;
                if (evt.type === "keydown") {
                    this._keyboardHandler.selectItem(0);
                }
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

        this.grid.onSelection.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                this.handleDOMSelection(args.event);
                this.switchBodyCombinations(args.cell);
            });

        this.listref.onItemClicked.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                args.event.stopPropagation();
            });

    }

    public ngOnDestroy() {
        this._destroyer.next();
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
            this.switchHeaderCombinations();
            if (key === "l" && evt.altKey) {
                this._keyboardHandler.selectItem(5);
                return;
            }

            const activeCol = this.grid.navigation.activeNode;
            const col = this.grid.visibleColumns.find
                (c => c.visibleIndex === activeCol.column && c.level === activeCol.level);
            if (key === "l" && evt.ctrlKey && evt.shiftKey  && col && !col.columnGroup && col.filterable) {
                    this._keyboardHandler.selectItem(4);
            }

            if ((key === "arrowleft" || key === "arrowright") && evt.altKey && evt.shiftKey &&
            col && !col.columnGroup && col.groupable) {
                this._keyboardHandler.selectItem(2);
            }

            if ((key === "arrowup" || key === "arrowdown") && evt.ctrlKey) {
                if (col && !col.columnGroup && col.sortable) {
                    this._keyboardHandler.selectItem(1);
                }
            }
        }

        if (this._keyboardHandler.gridSection === GridSection.TBODY) {
            if (key === "enter") {
                const activeCell = this.grid.navigation.activeNode;
                const cell = this.grid.getCellByColumnVisibleIndex(activeCell.row, activeCell.column);
                if (cell && cell.column.editable && cell.editMode) {
                    this._keyboardHandler.selectItem(0);
                }
            }
        }
    }

    public switchHeaderCombinations() {
        if (this._keyboardHandler.gridSection !== GridSection.THEAD) {
            return;
        }

        const activeNode = this.grid.navigation.activeNode;
        const currColumn = this.grid.columnList
            .find(c => c.visibleIndex === activeNode.column && c.level === activeNode.level);

        const actions = this.extractColumnActions(currColumn);
        this._keyboardHandler.enableActionItems(actions);
    }

    public switchBodyCombinations(cell: IgxGridCellComponent | IgxGridExpandableCellComponent) {
        if (this._keyboardHandler.gridSection !== GridSection.TBODY) {
            return;
        }
        // let groupableRow;
        // if (cell === null) {
        //     groupableRow =
        // }
        const actions = this.extractCellActions(cell);
        this._keyboardHandler.enableActionItems(actions);
    }

    public expandChange() {
        if (!this._keyboardHandler.collection.length) {
            return;
        }

        this._keyboardHandler.selectItem(3);
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

    public handleDOMSelection(evt) {
        const target = evt.target.className;
        if (target === GridSection.TBODY && (evt.code === "End" || evt.code === "Home") && evt.ctrlKey) {
            this._keyboardHandler.selectItem(4);
            this.cdr.detectChanges();
        }
    }

    public extractColumnActions(col: IgxColumnComponent | IgxColumnGroupComponent) {
        const res = [];
        if (col.sortable) {
            res.push(ItemAction.Sortable);
        }

        if (col.filterable && col.elementRef.nativeElement.tagName !== "IGX-COLUMN-GROUP") {
            res.push(ItemAction.Filterable);
        }

        if (col.collapsible) {
            res.push(ItemAction.Collapsible);
        }

        if (col.groupable) {
            res.push(ItemAction.Groupable);
        }

        if (col.selectable) {
            res.push(ItemAction.Selectable);
        }

        return res;
    }

    public extractCellActions(cell: IgxGridCellComponent | IgxGridExpandableCellComponent) {
        const res = [];
        if (cell.editable) {
            res.push(ItemAction.Editable);
        }

        return res;
    }
}
