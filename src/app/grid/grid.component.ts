import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  IgxGridComponent,
  IgxGridColumnInitEvent,
  IgxProgressBarModule,
  DataContainer,
  IDataState,
  IPagingState,
  PagingError,
  SortingDirection,
  StableSortingStrategy,
  IgxAvatar,
  IgxBadge,
  IgxGridSortEvent
} from 'igniteui-js-blocks/main';
import { IgxColumnComponent } from 'igniteui-js-blocks/grid/column.component';
import { athletesData } from './data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {

  public localData: any[];
  public timerSubscription: any;
  public timer: any;
  public live: boolean;
  public disabled: boolean;
  public sortedByTrackProgress: boolean;

  @ViewChild('grid1') public grid1: IgxGridComponent;
  constructor() { }

  ngOnInit() {
    this.localData = athletesData;
    this.timer = new Observable().pipe(() => timer(4000, 1000));
    this.timerSubscription = this.timer.subscribe(t => this.tickerFunc(t));
    this.live = true;
    this.disabled = false;
    this.sortedByTrackProgress = true;
    this.SortByTrackProgress();
  }
  private SortByTrackProgress() {
    this.grid1.state = {
      sorting: {
        expressions: [
          {
            fieldName: 'TrackProgress',
            dir: SortingDirection.Desc
          }
        ],
        strategy: new StableSortingStrategy()
      }
    };
  }

  private tickerFunc(tick) {
    if (tick % 3 === 0) {
      const size = this.grid1.dataContainer.transformedData.length - 1;
      const min = Math.min(5, size);
      const idx = this.getRandomNumber(min, 0);
      const newValue = this.grid1.getCell(idx, 'TrackProgress').dataItem + 15;

      if (newValue >= 100) {
        this.timerSubscription.unsubscribe();
        this.live = false;
        this.disabled = true;
      } else {
        this.resetPositions();
      }

      this.grid1.updateCell(idx, 'TrackProgress', newValue);
      this.updatePosition(idx);
    }
  }

  private updatePosition(index: any) {
    if (index > 0 || index < 5) {
      const currentIndex = index;
      this.grid1.updateCell(index, 'Position', 'up');

      while (index > 0) {
        index--;

        if (this.grid1.getCell(index, 'TrackProgress').dataItem <= this.grid1.getCell(currentIndex, 'TrackProgress').dataItem) {
          this.grid1.updateCell(index, 'Position', 'down');
        } else {
          this.grid1.updateCell(index, 'Position', 'current');
        }
      }
    }
  }
  private resetPositions() {
    let index = 0;
    const size = this.grid1.dataContainer.transformedData.length - 1;
    const min = Math.min(size, 6);

    while (index < min) {
        this.grid1.updateCell(index, 'Position', 'current');
        index++;
    }
  }
  private getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public showRank(columnName) {
    const rv = this.grid1.state.sorting.expressions.filter((col) => col.fieldName === columnName);
    return rv.length > 0;
  }

  public doGlobalFiltering(event) {
    const search = event.target.value;

    this.grid1.columns.forEach((col) => {
      if (col.field === 'CountryName') {
        this.grid1.filterData(search, col);
      }
    });
  }

  public doSwitch(evt) {
    if (evt.target.checked) {
      this.timerSubscription = this.timer.subscribe(t => this.tickerFunc(t));
      this.live = true;
    } else {
      this.timerSubscription.unsubscribe();
      this.live = false;
    }
  }

  public applyAlternateStyling() {
    setTimeout(() => {
      const rowElements: HTMLElement[] = Array.from(document.querySelectorAll('#igx-grid-1 tr')) as HTMLElement[];

      rowElements.forEach(function(tr) {
        tr.style.backgroundColor = '';
        if (arguments[1] % 2 === 0) {
          tr.style.backgroundColor = '#F5F5F5';
        }
      });

      if (this.grid1.paginator.isFirst && this.sortedByTrackProgress) {
        const size = this.grid1.dataContainer.transformedData.length - 1;
        const min = Math.min(3, size);
        for (let i = 0; i < min; i++) {
          if (this.grid1.getRow(i).record.Id < 4) {
            this.grid1.getRow(i).element.style.backgroundColor = '#E7F5FE';
          }
        }
      }
    }, 1);

    if (this.sortedByTrackProgress) {
      this.localData.forEach((value, index) => {
        value.Id = index + 1;
      });
    }
  }


  public initColumns(event: IgxGridColumnInitEvent) {
    const column: IgxColumnComponent = event.column;
  }

  public sort(event: IgxGridSortEvent) {
    const direction = event.direction;

    this.sortedByTrackProgress = false;
    if (event.column.field === 'Id' && direction === 0) {
      const column = this.grid1.getColumnByField('TrackProgress');
      this.grid1.sortColumn(column, SortingDirection.Desc);
      this.sortedByTrackProgress = true;
    }
  }
}
