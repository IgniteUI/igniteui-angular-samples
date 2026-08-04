import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-tailwind-sample',
    styleUrls: ['./tailwind-sample.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './tailwind-sample.component.html'
})

export class TailwindSampleComponent {}
