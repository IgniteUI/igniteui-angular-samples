
import { Component, HostListener, OnInit, DOCUMENT, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
    private document = inject<Document>(DOCUMENT);
    private themeService = inject(ThemeService);

    public title = 'Samples';

    public ngOnInit() {
        this.document.body.classList.add('custom-body');
        this.themeService.init();
    }

    /**
     * Samples are embedded in the documentation as iframes and the theming
     * widget shown next to each of them posts the visitor's theme selection
     * down into the sample. Anything that is not such a message is left alone.
     */
    @HostListener('window:message', ['$event'])
    protected onMessage(e: MessageEvent) {
        this.themeService.handleMessage(e);
    }
}
