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
  IgxBadge
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

  @ViewChild('grid1') public grid1: IgxGridComponent;
  constructor() { }

  ngOnInit() {
    this.localData = athletesData;
    this.timer = new Observable().pipe(() => timer(4000, 1000));
    this.timerSubscription = this.timer.subscribe(t => this.tickerFunc(t));
    this.live = true;
    this.disabled = false;

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
      const idx = this.getRandomNumber(5, 0);
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

    while (index < 6) {
        this.grid1.updateCell(index, 'Position', 'current');
        index++;
    }
  }
  private getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public doGlobalFiltering(event) {
    const search = event.target.value;

    this.grid1.columns.forEach((col) => {
      if (col.field === 'AthleteNumber') {
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
        if (arguments[1] % 2 === 1) {
          tr.style.backgroundColor = '#F5F5F5';
        }
      });

      if (this.grid1.paginator.isFirst) {
        rowElements.slice(1, 4).forEach((tr: HTMLElement) => tr.style.backgroundColor = '#E7F5FE' );
      }
    }, 1);
  }


  public initColumns(event: IgxGridColumnInitEvent) {
    const column: IgxColumnComponent = event.column;
  }

}
