import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-radio-group-sample",
    styleUrls: ["./radio-group-sample.component.scss"],
    templateUrl: "./radio-group-sample.component.html"
})
export class RadioGroupSampleComponent {
    public fruitsForm: FormGroup;
    public fruits = ["Apple", "Mango", "Banana", "Orange"];
    public data: FruitData;

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    public onSubmit() {
        if (this.fruitsForm.valid) {
            this.data = {
                favFruit: this.fruitsForm.value.favoriteFruit,
                fullName: this.fruitsForm.value.fullName
            };
        }
    }

    private createForm() {
        this.fruitsForm = this.formBuilder.group({
            favoriteFruit: this.fruits[0],
            fullName: ["John Doe", Validators.required]
        });
    }
}

export class FruitData {
    public fullName: string;
    public favFruit: string;
}
