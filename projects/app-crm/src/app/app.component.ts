import { Component, OnInit, DOCUMENT, inject } from '@angular/core';
import { SEOService } from '../../../app-lob/src/app/seo.service';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
    private seoService = inject(SEOService);
    private document = inject<Document>(DOCUMENT);

    private title = 'Business propeller - Angular Data Grid Example';
    // eslint-disable-next-line max-len
    private metaDesc = 'In this angular grid example, you can see how users can customize their data view by leveraging the various features built into the grid.';

    public ngOnInit() {
        this.seoService.updateHeadProperties(this.title, this.metaDesc, this.document.defaultView.location.href);
    }
}

