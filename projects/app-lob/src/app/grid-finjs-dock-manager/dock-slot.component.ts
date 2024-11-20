// eslint-disable-next-line max-len
import { AfterViewInit, Component, Directive, EventEmitter, HostBinding, Input, OnInit, OnDestroy, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[gridHost]'
})
export class GridHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
    selector: 'app-dock-slot',
    template: `
    <div style='width: 100%; height: 100%; overflow-x: hidden;'>
        <ng-template gridHost></ng-template>
    </div>`,
    imports: [GridHostDirective]
})
export class DockSlotComponent implements OnInit, AfterViewInit, OnDestroy {
    @Output()
    public viewInit = new EventEmitter();

    @ViewChild(GridHostDirective)
    public gridHost: GridHostDirective;

    @Input()
    public id;

    @HostBinding('slot')
    public slot;

    public destroy$ = new Subject<any>();

    constructor() { }

    public ngOnInit(): void {
        this.slot = this.id;
    }

    public ngAfterViewInit() {
        this.viewInit.emit();
    }
    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
