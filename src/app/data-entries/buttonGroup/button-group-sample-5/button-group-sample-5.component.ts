import { Component, HostBinding, OnInit } from '@angular/core';

type Button = {
    label: string,
    selected: boolean,
    togglable: boolean
}

@Component({
    selector: 'app-button-group-sample-5',
    styleUrls: ['./button-group-sample-5.component.scss'],
    templateUrl: './button-group-sample-5.component.html'
})
export class ButtonGroupSample5Component implements OnInit {
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
