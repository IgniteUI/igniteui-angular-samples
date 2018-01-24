import { AfterViewInit, Component, HostListener, NgZone, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular/grid/column.component";
import {
  DataContainer,
  IDataState,
  IgxAvatar,
  IgxBadge,
  IgxGridColumnInitEvent,
  IgxGridComponent,
  IgxGridSortEvent,
  IgxProgressBarModule,
  IPagingState,
  PagingError,
  SortingDirection,
  StableSortingStrategy
} from "igniteui-angular/main";
import { timer } from "rxjs/observable/timer";
import { Subject } from "rxjs/Subject";
import { athletesData } from "./services/data";
import { DataService } from "./services/data.service";

@Component({
  encapsulation: ViewEncapsulation.None,
  providers: [DataService],
  selector: "app-grid",
  styleUrls: ["./grid.component.css"],
  templateUrl: "./grid.component.html"
})
export class GridComponent implements OnInit, AfterViewInit {

  public localData: any[];
  public timerSubscription: any;
  public timer: any;
  public live: boolean;
  public disabled: boolean;
  public windowWidth: any;

  @ViewChild("grid1") public grid1: IgxGridComponent;
  @ViewChild("showBadges") public showBadges: boolean;

  constructor(private zone: NgZone, private dataService: DataService) {
  }

  public ngOnInit() {
    this.localData = athletesData;

    this.timer = new Subject().pipe(() => timer(0, 3000));
    this.timerSubscription = this.timer.subscribe((tick) => {
      if (this.live) {
        if (tick === 1) {
          this.showBadges = true;
        }
        this.ticker();
      }
    });
    this.live = true;
    this.showBadges = false;
    this.disabled = false;
    this.SortByTrackProgress();
  }

  public ngAfterViewInit() {
    this.applyAlternateStyling();
    this.windowWidth = (window.innerWidth);
  }

  @HostListener("window:resize", ["$event"])
  public onResize(event) {
    this.windowWidth = (event.target.innerWidth);
  }

  public doGlobalFiltering(event) {
    const search = event.target.value;

    this.grid1.columns.forEach((col) => {
      if (col.field === "CountryName") {
        this.grid1.filterData(search, col);
      }
    });
    this.applyAlternateStyling();
  }

  public doSwitch(evt) {
    this.live = evt.target.checked ? true : false;
  }

  public applyAlternateStyling() {
    requestAnimationFrame(() => {
      const rowElements: HTMLElement[] = Array.from(document.querySelectorAll("#igx-grid-1 tbody tr")) as HTMLElement[];

      rowElements.forEach((tr, rowIndex) => {
        tr.style.backgroundColor = "";
        if (rowIndex % 2 === 0) {
          tr.style.backgroundColor = "#F5F5F5";
        }
        if (parseInt(tr.querySelector(".rowIndex").textContent, 10) < 4) {
          tr.style.backgroundColor = "#FCF1FB";
        }
      });
    });
  }

  public sortRank(event) {
    if (event.column.field === "Id" && event.direction === 0) {
      this.grid1.sortColumn(event.column, SortingDirection.Asc);
    }
  }

  private ticker() {
    this.zone.runOutsideAngular(() => {
      this.updateData();
      this.zone.run(() => {});
    });
  }

  private SortByTrackProgress() {
    this.grid1.state = {
      sorting: {
        expressions: [],
        strategy: new StableSortingStrategy()
      }
    };
  }

  private getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private updateData() {
    const incr = (rec) => {
      let newValue = this.getRandomNumber(-2, 2);
      switch (newValue) {
        case -1:
          rec.Position = "down";
          newValue = 0;
          break;
        case 0:
          rec.Position = "current";
          newValue = 1;
          break;
        case 1:
          rec.Position = "up";
          newValue = 5;
          break;
      }
      rec.TrackProgress += newValue;
      return rec;
    };

    this.localData = this.localData
      .map((rec) => incr(rec))
      .sort((a, b) => a.TrackProgress - b.TrackProgress);

    this.localData.reverse().forEach((rec, idx) => rec.Id = idx + 1);

    if (this.localData[0].TrackProgress >= 100) {
      this.timerSubscription.unsubscribe();
      this.live = false;
      this.disabled = true;
    }
  }
}
