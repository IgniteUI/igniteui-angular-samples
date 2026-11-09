import { Component, inject } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-icon-service-sample',
    styleUrls: ['./icon-service-sample.component.scss'],
    templateUrl: './icon-service-sample.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxAvatarComponent, IgxIconComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardActionsComponent, IgxButtonDirective, IgxSuffixDirective]
})
export class IconServiceSampleComponent {
    private iconService = inject(IgxIconService);

    private weather = [{
        icon: 'partly_cloudy',
        description: '18° Partly Cloudy'
    },
    {
        icon: 'sunny',
        description: '23° Sunny'
    },
    {
        icon: 'thunderstorms',
        description: '15° Thunderstorms'
    }];

    protected get status() {
        return this.weather.at(0).description
    };

    constructor() {
        // Add the SVG assets to the icon service collection
        this.iconService.addSvgIcon('partly_cloudy', 'assets/images/icons/partly_cloudy.svg', 'weather');
        this.iconService.addSvgIcon('sunny', 'assets/images/icons/sunny.svg', 'weather');
        this.iconService.addSvgIcon('thunderstorms', 'assets/images/icons/thunderstorms.svg', 'weather');

        this.iconService.addIconRef('weather_status', 'default', {
            name: 'partly_cloudy',
            family: 'weather'
        });
    }

    protected updateWeather() {
        this.weather.unshift(this.weather.pop());

        this.iconService.setIconRef('weather_status', 'default', {
            name: this.weather.at(0).icon,
            family: 'weather'
        });
    }
}
