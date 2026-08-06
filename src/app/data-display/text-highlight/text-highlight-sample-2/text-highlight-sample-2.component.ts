/* eslint-disable max-len */
import { Component, OnDestroy, ViewChildren, inject } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective, IgxTextHighlightService } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-text-highlight-2',
    styleUrls: ['./text-highlight-sample-2.component.scss'],
    templateUrl: './text-highlight-sample-2.component.html',
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective]
})
export class TextHighlightSample2Component implements OnDestroy {
    private highlightService = inject(IgxTextHighlightService);

    @ViewChildren(IgxTextHighlightDirective)
    public highlights;
    // tslint:disable max-line-length
    public firstParagraph = `
    Use the search box to search for a certain string in this text.
    All the results will be highlighted in the same color with the exception of the
    the first occurrence of the string, which will have a different color in order to tell it apart.
    You can use the button in the searchbox to specify if the search will be case sensitive.
    You can move the active highlight by either pressing the buttons on the searchbox or by using the Enter or the arrow keys on your keyboard.
    `;

    public secondParagraph = `
    On top of the functionality from the previous sample, this sample demonstrates how to implement the text highlight directive
    with several different elements. In this case, we have two div elements, each containing some text. You can see that
    they share the same active highlight and the returned match count includes both elements. The find method in this
    sample can be reused regardless of the number of elements you have in your application.
    `;


    public searchText = '';
    public matchCount = 0;
    public caseSensitive = false;
    public index = 0;

    public ngOnDestroy() {
        this.highlightService.destroyGroup('group1');
    }

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = '';
        this.find(0);
    }

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }

    public findNext() {
        this.find(1);
    }

    public findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            let count = 0;
            const matchesArray = [];
            this.highlights.forEach((h) => {
                count += h.highlight(this.searchText, this.caseSensitive);
                matchesArray.push(count);
            });

            this.matchCount = count;

            this.index += increment;
            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                let row;

                for (let i = 0; i < matchesArray.length; i++) {
                    if (this.index < matchesArray[i]) {
                        row = i;
                        break;
                    }
                }

                const actualIndex = row === 0 ? this.index : this.index - matchesArray[row - 1];

                this.highlightService.setActiveHighlight('group1', { index: actualIndex, row });
            }
        } else {
            this.highlights.forEach((h) => {
                h.clearHighlight();
            });
            this.matchCount = 0;
        }
    }
}
