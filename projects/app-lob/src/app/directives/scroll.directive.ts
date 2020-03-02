import { Directive, Host, Input, NgModule, OnInit, Optional } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";

@Directive({
    selector: "[igxPreventDocumentScroll]"
})
export class IgxPreventDocumentScrollDirective implements OnInit {
    private _preventScroll = true;
    private gridBody: HTMLElement;

    /**
     *  A boolean determining if scroll should be prevented or no. Defaults to true.
     * ```html
     * <igx-grid igxPreventDocumentScroll></igx-grid>
     * <igx-grid [igxPreventDocumentScroll]="'false'"></igx-grid>
     * ```
     */
    @Input("igxPreventDocumentScroll")
    public get preventScroll(): boolean {
       return this._preventScroll;
    }

    public set preventScroll(val: boolean) {
        this._preventScroll = val;
    }

    /**
     * @hidden
     */
    constructor(@Host() @Optional() private grid: IgxGridComponent) {
        this.gridBody = this.getGridBody();
    }

    public ngOnInit() {
        console.log(this._preventScroll);
        console.log(this.grid.id);
        if (this.preventScroll) {
            console.log("prevent scroll for" + this.grid.id);
            this.gridBody.addEventListener("wheel", this.preventDocumentScroll, { passive: false });
        }
    }

    public ngOnDestroy() {
        this.gridBody.removeEventListener("wheel", this.preventDocumentScroll);
    }

    /**
     * Prevents scrolling the page, when mouse wheel over the grid body.
     */
    private preventDocumentScroll(event) {
        event.preventDefault();
    }

    private getGridBody() {
        return this.grid.nativeElement;
    }
}

/**
 * @hidden
 */
@NgModule({
    declarations: [IgxPreventDocumentScrollDirective],
    exports: [IgxPreventDocumentScrollDirective]
})

export class IgxPreventDocumentScrollModule { }
