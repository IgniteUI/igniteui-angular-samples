import { Component } from "@angular/core";

@Component({
  selector: "app-tabbar-sample-2",
  styleUrls: ["./tabbar-sample-2.component.scss"],
  templateUrl: "./tabbar-sample-2.component.html"
})
export class TabbarSample2Component {

  public songsList: object[] = [
    { title: "Havana", artist: "Camila Cabello" },
    { title: "Meant To Be", artist: "Bebe Rexha & Florida Georgia Line" },
    { title: "New Rules", artist: "Dua Lipa" },
    { title: "Wolves", artist: "Selena Gomez & Marshmello" }
  ];

  public moviesList: object[] = [
    { title: "Logan", genre: "Action, Drama, Sci-Fi" },
    { title: "Wonder Woman", genre: "Action, Adventure, Fantasy" },
    { title: "Guardians of the Galaxy Vol. 2", genre: "Action, Adventure, Sci-Fi" },
    { title: "Star Wars: The Last Jedi", genre: "Action, Adventure, Fantasy" }
  ];

  public booksList: object[] = [
    { title: "Wonder", author: "R. J. Palacio" },
    { title: "Milk and Honey", author: "Rupi Kaur" },
    { title: "Giraffes Can't Dance", author: "Jeff Kinne" },
    { title: "The Getaway", author: "Selena Gomez & Marshmello" }
  ];

  constructor() { }

}
