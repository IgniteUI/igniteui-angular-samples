import { Component, HostBinding, OnInit } from '@angular/core';
import { IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-buttons-display-density',
    styleUrls: ['./buttons-display-density.component.scss'],
    templateUrl: './buttons-display-density.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonsDisplayDensityComponent implements OnInit {
    public size = 'large';
    public sizes;

    public ngOnInit(): void {
        this.sizes = [
            { label: 'large', selected: this.size === 'large', togglable: true },
            { label: 'medium', selected: this.size === 'medium', togglable: true },
            { label: 'small', selected: this.size === 'small', togglable: true }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event) {
        this.size = this.sizes[event.index].label;
    }
}
