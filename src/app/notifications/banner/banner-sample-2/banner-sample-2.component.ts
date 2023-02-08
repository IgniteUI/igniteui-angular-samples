import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBannerComponent } from 'igniteui-angular';

@Component({
    selector: 'app-banner-sample-2',
    styleUrls: ['../banner-samples.scss'],
    templateUrl: 'banner-sample-2.component.html'
})

export class BannerSample2Component implements OnInit {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    public contentWidth = '384px';
    public imageUrls = ['assets/images/card/media/the_red_ice_forest.jpg',
        'assets/images/card/media/yosemite.jpg'];

    public ngOnInit() {
        this.banner.open();
    }
}
