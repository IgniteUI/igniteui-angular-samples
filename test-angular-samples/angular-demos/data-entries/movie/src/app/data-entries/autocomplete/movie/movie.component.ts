import { Component, Pipe, PipeTransform, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import {
    DateRangeType,
    IgxDialogComponent,
    InteractionMode
} from "igniteui-angular";
@Component({
    selector: "movie-availability",
    styleUrls: ["./movie.component.scss"],
    templateUrl: "./movie.component.html"
})
export class MovieComponent {
    @ViewChild("alert", { read: IgxDialogComponent, static: true }) public alert: IgxDialogComponent;
    public user;
    public pickerMode = InteractionMode.DropDown;

    public towns = [
        { name: "New York", cinemas: ["Regal Cinemas", "Village East Cinema", "Roxy Cinema", "The Paris Theatre"] },
        // tslint:disable-next-line:object-literal-sort-keys
        {
            cinemas: ["Arc Light", "Pacific Cinerama Dome",
                "New Beverly Cinema", "Downtown Independent"],
            name: "Los Angeles"
        },
        // tslint:disable-next-line:object-literal-sort-keys
        {
            cinemas: ["Central Cinema", "Grand Illusion Cinema",
                "Ark Lodge Cinemas", "Skyway Outdoor Cinema"],
            name: "Seattle"
        }
    ];

    public genres = [
        { type: "Action", movies: ["The Matrix", "Kill Bill: Vol.1", "The Dark Knight Rises"] },
        { type: "Adventure", movies: ["Interstellar", "Inglourious Basterds", "Inception"] },
        // tslint:disable-next-line:object-literal-sort-keys
        {
            movies: ["Wild Tales", "In Bruges", "Three Billboards Outside Ebbing, Missouri",
                "Untouchable", "3 idiots"],
            type: "Comedy"
        },
        { type: "Crime", movies: ["Training Day", "Heat", "American Gangster"] },
        { type: "Drama", movies: ["Fight Club", "A Beautiful Mind", "Good Will Hunting", "City of God"] },
        { type: "Biography", movies: ["Amadeus", "Bohemian Rhapsody"] },
        { type: "Mystery", movies: ["The Prestige", "Memento", "Cloud Atlas"] },
        { type: "Musical", movies: ["All That Jazz"] },
        { type: "Romance", movies: ["Love Actually", "In The Mood for Love"] },
        { type: "Sci-Fi", movies: ["The Fifth Element"] },
        { type: "Thriller", movies: ["The Usual Suspects"] },
        { type: "Western", movies: ["Django Unchained"] }];

    public disabledDates = [{
        dateRange: [new Date()],
        type: DateRangeType.Before
    }, {
        dateRange: [new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000)],
        type: DateRangeType.After
    }];

    constructor(fb: FormBuilder) {
        const today = new Date(new Date(new Date().setHours(20)).setMinutes(0));
        this.user = fb.group({
            cinema: ["", Validators.required],
            date: new FormControl(today, Validators.required),
            movie: ["", Validators.required],
            time: new FormControl(today, Validators.required)
        });
    }

    public onTimeSelection(event) {
        const date = this.user.value.date;
        if (date) {
            date.setTime((event.newValue as Date).getTime());
        }
    }

    public onCheck() {
        this.alert.message = "There " + ["are", "aren't"][Math.round(Math.random())] +
            " available tickets for '" + this.user.value.movie + "'" +
            " in '" + this.user.value.cinema + "'" +
            " on " + this.user.value.date.toLocaleDateString() +
            " at " + this.user.value.date.getHours() + ":00";
        this.alert.open();
    }
}

@Pipe({ name: "contains" })
export class AutocompletePipeContains implements PipeTransform {

    public transform = (movies: string[], term = "") => this.filterMovies(movies, term);

    protected filterMovies = (movies: string[], term: string) =>
        movies.filter((movie: string) =>
            movie.toString().toLowerCase().indexOf(term.toString().toLowerCase()) > -1)
}

@Pipe({ name: "groupContains" })
export class AutocompleteGroupPipeContains extends AutocompletePipeContains {

    public transform = (towns: any[], term = "") => this.filterTowns(towns, term);

    private filterTowns = (towns: any[], term = "") =>
        towns.filter((town) => this.filterMovies(town.cinemas, term).length > 0)
}
