import { Component } from '@angular/core';
import { IgxTextAlign, IgxLinearProgressBarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-linear-progressbar-sample-2',
    styleUrls: ['./linear-progressbar-sample-2.component.scss'],
    templateUrl: './linear-progressbar-sample-2.component.html',
    imports: [IgxLinearProgressBarComponent]
})
export class LinearProgressbarSample2Component {

  public positionCenter: IgxTextAlign = IgxTextAlign.CENTER;
  public positionEnd: IgxTextAlign = IgxTextAlign.END;
}
