import {
    Component,
    HostListener,
    OnDestroy,
    OnInit,
    ViewChild,
    Inject,
    ElementRef,
    AfterViewInit
} from '@angular/core';
import {
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxStringFilteringOperand,
    IgxSummaryResult,
    CellType,
    OverlaySettings,
    IgxOverlayService,
    AbsolutePosition,
    OverlayClosingEventArgs
} from 'igniteui-angular';
import { athletesData } from '../../data/athletesData';

@Component({
    selector: 'app-grid',
    styleUrls: ['./grid.component.scss'],
    templateUrl: './grid.component.html'
})
export class GridComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    @ViewChild('winnerAlert', { static: true })
    public winnerAlert: ElementRef;

    @ViewChild('finishedAlert', { static: true })
    public finishedAlert: ElementRef;

    public topSpeedSummary = CustomTopSpeedSummary;
    public bnpSummary = CustomBPMSummary;
    public speedSummary = CustomSpeedSummary;
    public localData: any[];
    public isFinished = false;
    public hasWinner = false;
    public athleteColumnWidth = '30%';
    public showOverlay = false;
    public overlaySettings: OverlaySettings;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public winner = { Avatar: null, Name: null };
    public top3 = [];
    private _live = true;
    private _timer;
    private windowWidth: any;
    private _overlayId: string;

    get live() {
        return this._live;
    }

    set live(val) {
        this._live = val;
        if (this._live) {
            this._timer = setInterval(() => this.ticker(), 1500);
        } else {
            clearInterval(this._timer);
        }
    }

    get showWinnerOverlay() {
        return this.showOverlay && this.hasWinner && !this.isFinished;
    }

    get showFinishedOverlay() {
        return this.showOverlay && this.isFinished;
    }

    get hideAthleteNumber() {
        return this.windowWidth && this.windowWidth < 960;
    }
    get hideBeatsPerMinute() {
        return (this.windowWidth && this.windowWidth < 860) || !this.live;
    }

    constructor(@Inject(IgxOverlayService) public overlayService: IgxOverlayService) {}
    public ngOnInit() {
        this.localData = athletesData.slice(0, 30).sort((a, b) => b.TrackProgress - a.TrackProgress);
        this.localData.forEach(rec => this.getSpeed(rec));
        this.windowWidth = window.innerWidth;
        this._timer = setInterval(() => this.ticker(), 1500);
        this.overlayService.closing.subscribe((event: OverlayClosingEventArgs) => {
            this.showOverlay = false;
        });
    }

    public ngAfterViewInit() {
        this.overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(
            AbsolutePosition.Center,
            this.grid1
        );
        this.overlaySettings.modal = true;
    }

    public getValue(cell: CellType): number {
        const val = cell.value;
        return val;
    }
    public ngOnDestroy() {
        clearInterval(this._timer);
    }

    public isTop3(cell): boolean {
        const top = this.grid1.paginator.page === 0 && cell.row.index < 4;
        return top;
    }

    public getTrophyUrl(index: number) {
        if (index === 0) {
            return 'assets/images/grid/trophy_gold.svg';
        }
        if (index === 1) {
            return 'assets/images/grid/trophy_silver.svg';
        }
        if (index === 2) {
            return 'assets/images/grid/trophy_bronze.svg';
        }
    }

    public cellSelection(evt) {
        const cell = evt.cell;
        this.grid1.selectRows([cell.row.key], true);
    }

    public getIconType(cell) {
        switch (cell.row.data.Position) {
            case 'up':
                return 'arrow_upward';
            case 'current':
                return 'arrow_forward';
            case 'down':
                return 'arrow_downward';
        }
    }

    public getBadgeType(cell) {
        switch (cell.row.data.Position) {
            case 'up':
                return 'success';
            case 'current':
                return 'warning';
            case 'down':
                return 'error';
        }
    }

    public getSpeed(athlete: any): any {
        athlete['Speed'] = this.addSpeedeData(athlete, 40);
    }

    public getSpeedeData(minutes?: number): any[] {
        if (minutes === undefined) {
            minutes = 20;
        }
        const speed: any[] = [];
        for (let m = 0; m < minutes; m += 3) {
            const value = this.getRandomNumber(17, 20);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            speed.push({Speed: value, Minute: m});
        }
        return speed;
    }

    public addSpeedeData(athlete, minutes?: number): any[] {
        if (minutes === undefined) {
            minutes = 20;
        }
        const speedCollection = athlete.Speed ? athlete.Speed : [];
        for (let m = 3; m <= minutes; m += 3) {
            const value = this.getRandomNumber(16, 20);
            const speed = speedCollection[speedCollection.length - 1];
            const min = speed && speed.Minute ? speed.Minute + m : m;
            // eslint-disable-next-line @typescript-eslint/naming-convention
            speedCollection.push({Speed: value, Minute: min});
            if (speedCollection.length === 40) {
                speedCollection.shift();
            }
        }
        return speedCollection;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    @HostListener('window:resize', ['$event'])
    public onResize(event) {
        this.windowWidth = event.target.innerWidth;
    }

    public filter(term) {
        this.grid1.filter('CountryName', term, IgxStringFilteringOperand.instance().condition('contains'), true);
        this.grid1.markForCheck();
    }

    public showAlert(element: ElementRef) {
        this.showOverlay = true;
        this._overlayId = this.overlayService.attach(element, this.overlaySettings);
        this.overlayService.show(this._overlayId);
    }

    public hideAlert() {
        this.showOverlay = false;
        this.overlayService.hide(this._overlayId);
    }

    private generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private ticker() {
        if (this.showWinnerOverlay) {
            this.hideAlert();
        }
        if (this.isFinished) {
            this.live = false;
            this.grid1.paginator.page = 0;
            return;
        }
        this.updateData();
        this.manageRace();
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    private manageRace() {
        // show winner alert
        if (!this.hasWinner && this.localData[0].TrackProgress >= 100) {
            this.winner = this.localData[0];
            this.hasWinner = true;
            this.showAlert(this.winnerAlert);
        }

        // move grid to next page to monitor players who still run
        const firstOnPage = this.grid1.getCellByColumn(0, 'TrackProgress');
        if (firstOnPage && firstOnPage.value === 100) {
            this.grid1.paginator.page = this.grid1.paginator.page + 1;
        }

        // show Top 3 players after race has finished
        if (this.localData[this.localData.length - 1].TrackProgress === 100) {
            this.top3 = this.localData.slice(0, 3);
            this.isFinished = true;
            this.showAlert(this.finishedAlert);
        }
    }

    private updateData() {
        const newData = [];
        this.localData.forEach((rec, index) => {
            rec.LastPosition = index;
            if (rec.TrackProgress < 100) {
                rec.Speed = this.addSpeedeData(rec, 3);
                rec.BeatsPerMinute += this.generateRandomNumber(-5, 5);
                if (rec.Id < this.grid1.perPage + 1) {
                    rec.TrackProgress = Math.min(rec.TrackProgress + this.generateRandomNumber(15, 20), 100);
                } else {
                    rec.TrackProgress = Math.min(rec.TrackProgress + this.generateRandomNumber(7, 12), 100);
                }

            }
            newData.push({...rec});
        });

        this.localData = newData.sort((a, b) => b.TrackProgress - a.TrackProgress);
        this.localData.forEach((elem, ind) => {
            const position = elem.LastPosition - ind;
            if (position < 0) {
                elem.Position = 'down';
            } else if (position === 0) {
                elem.Position = 'current';
            } else {
                elem.Position = 'up';
            }
        });
    }
}

class CustomTopSpeedSummary {


    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'max',
            label: 'max',
            summaryResult: data.length ? IgxNumberSummaryOperand.max(data).toFixed(0) : null
        });

        return result;
    }
}

export class CustomBPMSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
            {
                key: 'average',
                label: 'average',
                summaryResult: data.length ? IgxNumberSummaryOperand.average(data).toFixed(2) : null
            });

        return result;
    }
}

export class CustomSpeedSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        data = data.reduce((acc, val) => acc.concat(val), []).map(rec => rec.Speed);
        const result = [];
        result.push(
            {
                key: 'average',
                label: 'average',
                summaryResult: data.length ? IgxNumberSummaryOperand.average(data).toFixed(2) : null
            });

        return result;
    }
}
