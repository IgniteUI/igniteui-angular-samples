import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule , Validators } from "@angular/forms";
import { IgxComboComponent } from "igniteui-angular";

@Component({
    selector: "app-combo",
    styleUrls: ["./reactive-forms.component.scss"],
    templateUrl: "./reactive-forms.component.html"
})
export class ReactiveFormsSampleComponent {
    public reactiveForm: FormGroup;

    @ViewChild("combo1", { read: IgxComboComponent })
    private combo1: IgxComboComponent;

    constructor(fb: FormBuilder) {

        this.reactiveForm = fb.group({
            date: [""],
            dateTime: [""],
            email: ["", Validators.required],
            fullName: new FormControl("", Validators.required),
            phone: [""]
        });

    }

    public onSubmit() {
        console.log(this.reactiveForm);
    }
}
