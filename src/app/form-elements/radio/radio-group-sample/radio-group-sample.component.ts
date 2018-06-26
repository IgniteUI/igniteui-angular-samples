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
    public prevData: FruitData;

    constructor(private _formBuilder: FormBuilder) {
        // Simulate getting data from external service
        this.prevData = {
            favFruit: this.fruits[0],
            fullName: "John Doe"
        };

        this.createForm();
        this.setFormValues();
    }

    public onSubmit() {
        if (this.fruitsForm.valid) {
            this.data = {
                favFruit: this.fruitsForm.value.favoriteFruit,
                fullName: this.fruitsForm.value.fullName
            };
        } else {
            this.data = null;
        }
    }

    public onReset() {
        this.fruitsForm.patchValue({
            favoriteFruit: this.prevData.favFruit,
            fullName: this.prevData.fullName
        });
    }

    private createForm() {
        this.fruitsForm = this._formBuilder.group({
            favoriteFruit: ["", Validators.required],
            fullName: ""
        });
    }

    private setFormValues() {
        this.fruitsForm.setValue({
            favoriteFruit: this.prevData.favFruit,
            fullName: this.prevData.fullName
        });
    }
}

export class FruitData {
    public fullName: string;
    public favFruit: string;
}
