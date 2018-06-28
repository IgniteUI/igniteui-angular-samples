import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule , Validators } from "@angular/forms";
import { IgxComboComponent } from "igniteui-angular";

@Component({
    selector: "app-combo",
    styleUrls: ["./reactive-forms.component.scss"],
    templateUrl: "./reactive-forms.component.html"
})
export class ReactiveFormsSampleComponent {
    public dsGenres = ["Action", "Adventure", "Comedy", "Crime",
        "Drama", "Historical", "Horror", "Mistery",
        "Musical", "Romance", "Sci-Fi", "Thriller", "Western"];

    public user: FormGroup;
    constructor(fb: FormBuilder) {
        this.user = fb.group({
            date: [""],
            dateTime: [""],
            email: ["", Validators.required],
            fullName: new FormControl("", Validators.required),
            genres: ["", Validators.required],
            phone: [""]
        });
    }

    public onSubmit() {
        console.log(this.user);
    }
}
