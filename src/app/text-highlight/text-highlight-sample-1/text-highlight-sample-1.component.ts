import { Component, ViewChild } from "@angular/core";
import { IgxTextHighlightDirective } from "igniteui-angular";

@Component({
    selector: "text-highlight-1",
    styleUrls: ["./text-highlight-sample-1.component.scss"],
    templateUrl: "./text-highlight-sample-1.component.html"
})
export class TextHighlightSample1Component {
    // tslint:disable max-line-length
    public html = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus mi sit amet lectus vestibulum, at bibendum lacus pretium. Vivamus at purus cursus, sollicitudin ipsum in, eleifend massa. Mauris molestie non felis sit amet efficitur. Sed sem nibh, condimentum sit amet tempus quis, varius id nisi. Fusce imperdiet pulvinar tortor, sed scelerisque quam suscipit ac. Curabitur fringilla ornare enim, sodales hendrerit felis vulputate ut. Nullam non elit vitae felis luctus malesuada sagittis non odio. Nulla ac dignissim urna, id iaculis urna. Pellentesque tristique urna eget elit pellentesque, id dapibus sem pretium. Sed orci dui, dapibus vel massa at, sollicitudin aliquet massa.

Morbi lectus arcu, tristique at sem ac, porta scelerisque nisl. Curabitur vitae maximus ligula, id tincidunt magna. Phasellus nisi arcu, faucibus sit amet ullamcorper scelerisque, euismod id nisl. Sed posuere libero quam, quis molestie arcu malesuada eget. Sed sollicitudin urna sed lacinia semper. Donec iaculis est rutrum, malesuada dui et, consectetur erat. Mauris ut neque metus.

Integer et metus in felis vehicula laoreet. Suspendisse id enim interdum, imperdiet justo at, maximus elit. Sed dapibus, sem quis tristique bibendum, dui tellus pharetra nisi, luctus congue massa sapien at nisi. Donec in hendrerit diam. Phasellus id massa lectus. Nam lobortis lectus tortor, a euismod nulla fermentum pellentesque. Proin eget ipsum egestas, interdum leo ut, rhoncus metus. Praesent in augue non sapien bibendum sodales eget in ex. Pellentesque semper eu ex quis commodo. Sed porta feugiat eleifend. Aenean sed justo quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin porta risus lorem, eu ultricies leo suscipit tempus. Integer eu orci eu odio sagittis ultrices quis gravida magna. Mauris hendrerit, nulla faucibus semper posuere, libero mauris porttitor metus, eget sollicitudin massa mi eget orci.

Cras tristique efficitur tellus nec vehicula. Quisque convallis imperdiet ex, at sollicitudin nisl elementum scelerisque. Nam elementum scelerisque elit ut tincidunt. Morbi fringilla leo tincidunt, interdum lectus vel, mollis metus. Phasellus suscipit nisi ut libero dictum egestas. Proin at hendrerit nunc. Ut rutrum maximus velit, in hendrerit mauris sodales sed. Nulla dictum nisi ac auctor placerat. Maecenas blandit massa ac nulla lacinia molestie.

Sed eget consectetur orci, et aliquet sapien. Fusce finibus sed augue at dignissim. In in pharetra neque, eu viverra elit. Donec dignissim purus non urna cursus faucibus. Proin vulputate laoreet erat, quis venenatis enim. Vestibulum eu ullamcorper turpis, vitae auctor tellus. Nunc et ligula scelerisque, pellentesque quam id, sagittis mi. Quisque massa neque, vulputate eu ligula at, molestie bibendum velit. Nunc vitae luctus metus. Donec imperdiet lorem sed eros tempus rhoncus. Duis sit amet ante vitae nisi semper volutpat.
    `;
    // tslint:enable max-line-length

    @ViewChild(IgxTextHighlightDirective, {read: IgxTextHighlightDirective})
    public highlight: IgxTextHighlightDirective;

    public searchText: string = "";
    public matchCount: number = 0;
    public caseSensitive: boolean = false;
    public index: number = 0;

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
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
        this.searchText = "";
        this.find(0);
    }

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }

    private findNext() {
        this.find(1);
    }

    private findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            this.matchCount = this.highlight.highlight(this.searchText, this.caseSensitive);
            this.index += increment;

            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                IgxTextHighlightDirective.setActiveHighlight("group1", {
                    columnIndex: 0,
                    index: this.index,
                    page: 0,
                    rowIndex: 0
                });
            }
        } else {
            this.highlight.clearHighlight();
        }
    }
}
