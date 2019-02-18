import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
@Component({
    selector: "movie-availability",
    styleUrls: ["./movie.component.scss"],
    templateUrl: "./movie.component.html"
})
export class MovieComponent {
    public user;
    public message = ["Yes", "No"][Math.round(Math.random())];

    public towns = [
        { name: "Sofia", cinemas: ["Lumiere Arena", "Grande Odeon", "Euro Cinema City", "Vlaikova 4DMax" ]},
        { name: "Plovdiv", cinemas: ["Open Air Cinema Orpheus", "Lucky Cinema", "Cosmos Arena"]},
        { name: "Jambol", cinemas: ["Elite Grand Cinema", "Vaptsarov Cinema", "Lucky Cinema", "Open Air Cinema Luskov"]}
    ];

    public genres = [
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

    constructor(fb: FormBuilder) {
        this.user = fb.group({
            cinema: ["", Validators.required],
            date: new FormControl("", Validators.required),
            movie: ["", Validators.required],
            time: new FormControl("", Validators.required)
        });
    }

    public onTimeSelection(event) {
        const date = this.user.value.date;
        if (date) {
            date.setTime((event.newValue as Date).getTime());
        }
    }
}
