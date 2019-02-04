import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "movieContains" })
export class AutocompletePipeContains implements PipeTransform {

    public transform = (movies: string[], term = "") => this.filterMovies(movies, term);

    protected filterMovies = (movies: string[], term: string) =>
        movies.filter((movie: string) =>
            movie.toString().toLowerCase().indexOf(term.toString().toLowerCase()) > -1)
}

@Pipe({ name: "genreContains" })
export class AutocompleteGenrePipeContains extends AutocompletePipeContains {

    public transform = (genres: any[], term = "") => this.filterGenres(genres, term);

    private filterGenres = (genres: any[], term = "") =>
        genres.filter((genre) => this.filterMovies(genre.movies, term).length > 0)
}
