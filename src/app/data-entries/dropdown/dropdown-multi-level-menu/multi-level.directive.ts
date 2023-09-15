import { AfterViewInit, Directive, HostListener, Input, OnDestroy } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { MultiLevelService } from './multi-level.service';
import {
  IgxDropDownComponent,
  OverlaySettings,
  ConnectedPositioningStrategy,
  IgxDropDownItemComponent,
  HorizontalAlignment,
  VerticalAlignment
} from 'igniteui-angular';

@Directive({
  selector: '[multiLevel]'
})
export class MultiLevelDirective implements AfterViewInit, OnDestroy {
  @Input()
  public innerDropdown!: IgxDropDownComponent;

  private _destroy$ = new Subject<void>();

  private _overlaySettings: OverlaySettings = {
    closeOnOutsideClick: false,
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalStartPoint: HorizontalAlignment.Right,
      horizontalDirection: HorizontalAlignment.Right,
      verticalStartPoint: VerticalAlignment.Top,
      openAnimation: undefined,
      closeAnimation: undefined
    })
  };

  constructor(
    private _host: IgxDropDownItemComponent,
    private _multiLevelService: MultiLevelService
  ) {}

  public ngAfterViewInit(): void {
    this._multiLevelService.add(this.innerDropdown);

    this.innerDropdown.opening
      .pipe(
        take(1),
        map((args) => args.owner.toggleDirective.element)
      )
      .subscribe((element) => {
        fromEvent(element, 'mouseleave')
          .pipe(takeUntil(this._destroy$))
          .subscribe((event: any) => {
            this._multiLevelService.handleHover(event, this._host, this.innerDropdown);
          });
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  @HostListener('mouseenter')
  public mouseenter() {
    if (this.innerDropdown.collapsed) {
      this.innerDropdown.open({
        ...this._overlaySettings,
        target: this._host.element.nativeElement
      });
    }
  }

  @HostListener('mouseleave', ['$event'])
  public mouseleave(event: MouseEvent) {
    const target = event.relatedTarget as any;
    const innerDropdownItem = this.innerDropdown.items.some(
      (item) => item.id === target.id
    );

    if (!this.innerDropdown.collapsed && !innerDropdownItem) {
      this.innerDropdown.close();
    }
  }
}
