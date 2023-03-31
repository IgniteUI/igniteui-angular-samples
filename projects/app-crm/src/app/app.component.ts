import { Component, OnInit } from '@angular/core';
import { SEOService } from '../../../app-lob/src/app/seo.service';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private title = 'Business propeller - Angular Data Grid Example';
    // eslint-disable-next-line max-len
    private metaDesc = 'In this angular grid example, you can see how users can customize their data view by leveraging the various features built into the grid.';

    constructor(private seoService: SEOService) { }

    public ngOnInit() {
        this.seoService.updateHeadProperties(this.title, this.metaDesc, window.location.href);
    }
}
