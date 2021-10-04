import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  title: string = ""

  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.onListMovies()
  }

  onListMovies() {
    this.dbService.listAllMovies().subscribe((data: any) => {
      this.moviesDB = data;
      console.log(this.moviesDB)
    });
  }

  // a new section to delete a movie by aTitle
  onDeleteMovieTitle() {
    this.dbService.deleteMovieTitle(this.title).subscribe(result => {
      this.onListMovies()
      this.router.navigate(["/listmovies"]);
    });
  }

}
