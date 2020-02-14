import { Directive, QueryList, ViewChildren } from "@angular/core";
import { IgxInputGroupComponent } from "igniteui-angular";
import { GlobalInputTypeService } from "../../services/global-input-type.service";

@Directive({
    selector: "input-group-sample-base"
})
export class BaseInputGroupSampleComponent {

    public type = "";
    @ViewChildren(IgxInputGroupComponent) public inputGroups: QueryList<IgxInputGroupComponent>;

    constructor(private inputType: GlobalInputTypeService) {
        inputType.typeName.subscribe((newValue) => {
            if (newValue) {
                this.type = newValue;
                this.setInputType(this.type);
            }
        });
    }
    private setInputType(type: string) {
        this.inputGroups.forEach(x => x.type = type);
    }
}
