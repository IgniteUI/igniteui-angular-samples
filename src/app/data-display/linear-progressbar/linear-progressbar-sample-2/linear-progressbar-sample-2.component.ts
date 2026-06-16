import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxLinearProgressBarComponent, IgxTextAlign } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-linear-progressbar-sample-2',
    styleUrls: ['./linear-progressbar-sample-2.component.scss'],
    templateUrl: './linear-progressbar-sample-2.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxLinearProgressBarComponent]
})
export class LinearProgressbarSample2Component {

  public positionCenter: IgxTextAlign = IgxTextAlign.CENTER;
  public positionEnd: IgxTextAlign = IgxTextAlign.END;
}
