import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movieID: string = "";
  title: string = ""
  year: number = 0
  actors: any[] = [];

  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
  }

  // a new section to add a movie
  onSaveMovie() {
    let obj = { title: this.title, year: this.year};
    this.dbService.addMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    });
  }

}
