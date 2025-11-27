import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBannerActionsDirective, IgxBannerComponent } from 'igniteui-angular/banner';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxCardComponent } from 'igniteui-angular/card';
import { slideInLeft, slideOutRight } from 'igniteui-angular/animations';

@Component({
    selector: 'app-banner-sample-3',
    styleUrls: ['../banner-samples.scss'],
    templateUrl: 'banner-sample-3.component.html',
    imports: [IgxNavbarComponent, IgxIconComponent, IgxBannerComponent, IgxBannerActionsDirective, IgxButtonDirective, IgxRippleDirective, IgxCardComponent]
})

export class BannerSample3Component implements OnInit {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    public contentWidth = '384px';
    public imageUrls = ['assets/images/card/media/the_red_ice_forest.jpg',
        'assets/images/card/media/yosemite.jpg'];
    public animationSettings = {
        closeAnimation: slideOutRight,
        openAnimation: slideInLeft
    };

    public ngOnInit() {
        this.banner.open();
    }
}
