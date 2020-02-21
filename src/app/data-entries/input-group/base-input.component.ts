import { AfterViewInit, Directive, QueryList, ViewChildren } from "@angular/core";
import { IgxInputGroupComponent } from "igniteui-angular";
import { GlobalInputTypeService } from "../../services/global-input-type.service";

@Directive({
    selector: "input-group-sample-base"
})
export class BaseInputGroupSampleComponent implements AfterViewInit {

    public type = null;
    @ViewChildren(IgxInputGroupComponent) public inputGroups: QueryList<IgxInputGroupComponent>;

    constructor(private inputType: GlobalInputTypeService) {
        inputType.typeName.subscribe((newValue) => {
            if (newValue) {
                this.type = newValue;
                this.setInputType(this.type);
            }
        });
    }
    public ngAfterViewInit() {
        if (this.type) {
            this.setInputType(this.type);
        }
    }

    private setInputType(type: string) {
        if (this.inputGroups && this.inputGroups.length > 0) {
            this.inputGroups.forEach(x => {
                    if (!(x.isBox || x.isBorder || x.isSearch)) {
                        x.type = type;
                    }
                });
        }
    }
}
