import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-updateactor',
  templateUrl: './updateactor.component.html',
  styleUrls: ['./updateactor.component.css']
})
export class UpdateactorComponent implements OnInit {
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";

  actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) {}

  //Get all Actors
  onGetActors() {
    console.log("From on GetActors");
    return this.dbService.getAllActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }
  // Update an Actor
  onSelectUpdate(item: any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }

  onUpdateActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.updateActor(this.actorId, obj).subscribe(result => {
      this.onGetActors();
      this.router.navigate(["/listactors"]);
    });
  }

  ngOnInit() {
    this.onGetActors();
  }

}
