import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  fullName: string = "";
  actorId: string = "";
  bYear: number = 0;

  actorsDB: any[] = [];

  movieID: string = "";
  title: string = ""
  year: number = 0
  actors: any[] = [];

  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.onGetActors()
    this.onListMovies()
  }

  onSelectActor(item: any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }

  onSelectMovie(item: any) {
    this.title = item.title;
    this.year = item.year;
    this.actors = item.actors;
    this.movieID = item._id;
  }

  onGetActors() {
    this.dbService.getAllActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  onListMovies() {
    this.dbService.listAllMovies().subscribe((data: any) => {
      this.moviesDB = data;
      console.log(this.moviesDB)
    });
  }

  // a new section to add an actor to a movie
  onSaveExistingActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.addExistingActor(this.movieID, this.actorId, obj).subscribe(result => {
      this.onGetActors();
      this.onListMovies();
    });
  }

}
