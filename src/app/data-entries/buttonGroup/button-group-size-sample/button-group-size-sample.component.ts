import { Component, HostBinding, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';

type Button = {
    label: string,
    selected: boolean,
    togglable: boolean
}

@Component({
    selector: 'app-button-group-size-sample',
    styleUrls: ['./button-group-size-sample.component.scss'],
    templateUrl: './button-group-size-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonGroupComponent]
})
export class ButtonGroupSizeSampleComponent implements OnInit {
    public rippleColor = 'grey';
    public size = 'large';
    public sizes: Button[];

    public ngOnInit() {
        this.sizes = [
            { label: 'small', selected: this.size === 'small', togglable: true },
            { label: 'medium', selected: this.size === 'medium', togglable: true },
            { label: 'large', selected: this.size === 'large', togglable: true }
        ];
    }

    public selectSize(event: any) {
        this.size = this.sizes[event.index].label;
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }
}
