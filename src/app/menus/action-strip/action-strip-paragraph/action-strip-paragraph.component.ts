import { Component, ViewChild } from '@angular/core';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-action-strip-paragraph',
    styleUrls: ['./action-strip-paragraph.component.scss'],
    templateUrl: './action-strip-paragraph.component.html',
    imports: [IgxActionStripComponent, IgxButtonGroupComponent, IgxButtonDirective, IgxIconComponent]
})
export class ActionStripParagraphComponent {
    @ViewChild('myParagraph') public paragraph;
    public result: string;
    public isVisible = false;
    public isBold = false;
    public isItalic = false;
    public isUnderlined = false;

    public makeTextBold() {
        if (!this.isBold) {
            this.paragraph.nativeElement.classList.add('font-bold');
            this.isBold = true;
        } else {
            this.paragraph.nativeElement.classList.remove('font-bold');
            this.isBold = false;
        }
    }

    public makeTextItalic() {
        if (!this.isItalic) {
            this.paragraph.nativeElement.classList.add('font-italic');
            this.isItalic = true;
        } else {
            this.paragraph.nativeElement.classList.remove('font-italic');
            this.isItalic = false;
        }
    }

    public makeTextUnderlined() {
        if (!this.isUnderlined) {
            this.paragraph.nativeElement.classList.add('font-underlined');
            this.isUnderlined = true;
        } else {
            this.paragraph.nativeElement.classList.remove('font-underlined');
            this.isUnderlined = false;
        }
    }
}
