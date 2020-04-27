import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IForOfState, IGridCellEventArgs, IgxGridComponent, IgxOverlayService } from "igniteui-angular";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DATA } from "../../data/nwindData";
import { IgxAverageDirectionalIndexIndicatorComponent } from 'igniteui-angular-charts';
import { IgxGridExcelStyleFilteringComponent } from 'igniteui-angular/lib/grids/filtering/excel-style/grid.excel-style-filtering.component';

@Component({
    selector: "grid-keyboardnav",
    templateUrl: "./grid-keyboardnav-sample.component.html",
    styleUrls: ["grid-keyboardnav-sample.component.scss"],
    animations: [
      trigger("completed", [
        state("completed", style({
          // opacity: .7,
          backgroundColor: "#7FFF00"
        })),
        transition("* => completed", [
          animate(".5s")
        ])
      ])
    ]
})
export class GridKeyboardnavGuide implements OnInit, OnDestroy {

    private _destroyer = new Subject();

    @ViewChild(IgxGridComponent, { static: true})
    public grid: IgxGridComponent;

    public constructor(private cdr: ChangeDetectorRef, private _overlay: IgxOverlayService) {}

    public keyCombinations = [
        {title: "ctrl + Arrow Key Up", subTitle:"move to top cell in column", completed: false},
        {title: "ctrl + Arrow Key Down", subTitle:"move to bottom cell in column", completed: false},
        {title: "ctrl + Right Arrow Key", subTitle:"move to rightmost cell in row", completed: false},
        {title: "ctrl + Left Arrow Key", subTitle:"move to leftmost cell in row", completed: false},
        {title: "ctrl + home", subTitle:"move to top left cell in the grid", completed: false},
        {title: "ctrl + end", subTitle:"move to bottom right cell in the grid", completed: false},
        {title: "PageUP", subTitle:"move to bottom right cell in the grid", completed: false},
        {title: "PageDown", subTitle:"move to bottom right cell in the grid", completed: false},
        {title: "ctrl + shift + l", subTitle:"opens the excel style filtering", completed: false},
    ];

    @HostListener("keydown.PageUp", ["$event"])
    public onPageUp(evt) {
        this.trackListCombinations(evt);
    }

    @HostListener("keydown.PageDown", ["$event"])
    public onPageDown(evt) {
        this.trackListCombinations(evt);
    }

    public ngOnInit() {
        this.grid.data = DATA;
        this.grid.onSelection.pipe(takeUntil(this._destroyer))
          .subscribe((evt: IGridCellEventArgs) => {
            this.trackListCombinations(evt.event);
          });
        this._overlay.onOpening.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
            if (args.componentRef.componentType.name === "IgxGridExcelStyleFilteringComponent") {
              this.keyCombinations[8].completed = true;
              this.cdr.detectChanges();
            }
          });
    }

    public trackListCombinations(evt) {
        const keyboardEvt = evt as KeyboardEvent;
        switch(keyboardEvt.key) {
            case "ArrowUp":
                if (keyboardEvt.ctrlKey) { this.keyCombinations[0].completed = true; }
                break;
            case "ArrowDown":
                if (keyboardEvt.ctrlKey) { this.keyCombinations[1].completed = true; }
                break;
            case "ArrowRight":
                if (keyboardEvt.ctrlKey) { this.keyCombinations[2].completed = true; }
                break;
            case "ArrowLeft":
                if (keyboardEvt.ctrlKey) { this.keyCombinations[3].completed = true; }
                break;
            case "Home":
                if (keyboardEvt.ctrlKey) { this.keyCombinations[4].completed = true; }
                break;
            case "End":
                if (keyboardEvt.ctrlKey) { this.keyCombinations[5].completed = true; }
                break;
            case "PageUp":
                if (keyboardEvt.target === this.grid.tbody.nativeElement) { this.keyCombinations[6].completed = true; }
                break;
            case "PageDown":
                if (keyboardEvt.target === this.grid.tbody.nativeElement) { this.keyCombinations[7].completed = true; }
                break;
            default:
                return;
        }

        this.cdr.detectChanges();
    }

    public ngOnDestroy() {
        this._destroyer.next();
    }

}
