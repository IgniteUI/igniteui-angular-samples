import { Component, HostBinding, OnInit } from '@angular/core';
import { IgxButtonGroupComponent, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-display-density',
    styleUrls: ['./display-density.component.scss'],
    templateUrl: './display-density.component.html',
    imports: [IgxButtonGroupComponent, IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective]
})

export class DisplayDensityComponent implements OnInit {
    public sizes: any[];
    public size = 'large';
    public user: any;

    public ngOnInit() {
        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];

        this.user = {
            firstName: 'John',
            lastName: 'Smith',
            phone: 888123456
        };
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(eventArgs: any) {
        this.size = this.sizes[eventArgs.index].label;
    }
}
