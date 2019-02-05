import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AutocompleteGenrePipeContains } from "../../pipes/pipes";

@Component({
    providers: [AutocompleteGenrePipeContains],
    selector: "app-reactive-form",
    styleUrls: ["./reactive-forms.component.scss"],
    templateUrl: "./reactive-forms.component.html"
})
export class ReactiveFormsSampleComponent {
    public genres = [];
    public user: FormGroup;
    public noMovie: boolean;
    constructor(fb: FormBuilder, private pipe: AutocompleteGenrePipeContains) {
        this.user = fb.group({
            date: [""],
            dateTime: [""],
            email: ["", Validators.required],
            fullName: new FormControl("", Validators.required),
            genres: ["", Validators.required],
            movie: ["", Validators.required],
            phone: [""]
        });

        this.genres = [
            { type: "Action" , movies: ["The Matrix", "Kill Bill: Vol.1", "The Dark Knight Rises"]},
            { type: "Adventure" , movies: ["Interstellar", "Inglourious Basterds", "Inception"]},
            // tslint:disable-next-line:object-literal-sort-keys
            { type: "Comedy" , movies: ["Wild Tales", "In Bruges", "Three Billboards Outside Ebbing, Missouri",
                "Untouchable", "3 idiots"]},
            { type: "Crime" , movies: ["Training Day", "Heat", "American Gangster"]},
            { type: "Drama" , movies: ["Fight Club", "A Beautiful Mind", "Good Will Hunting", "City of God"]},
            { type: "Biography" , movies: ["Amadeus", "Bohemian Rhapsody"]},
            { type: "Mystery" , movies: ["The Prestige", "Memento", "Cloud Atlas"]},
            { type: "Musical" , movies: ["All That Jazz"]},
            { type: "Romance" , movies: ["Love Actually", "In The Mood for Love"]},
            { type: "Sci-Fi" , movies: ["The Fifth Element"]},
            { type: "Thriller" , movies: ["The Usual Suspects"]},
            { type: "Western" , movies: ["Django Unchained"]}];

    }

    public onMovieInputChange() {
        this.noMovie = this.pipe.transform(this.genres, this.user.value.movie).length === 0;
    }

    public onSubmit() {
        console.log(this.user);
    }
}
