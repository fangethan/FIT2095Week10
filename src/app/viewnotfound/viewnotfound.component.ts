import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-viewnotfound',
  templateUrl: './viewnotfound.component.html',
  styleUrls: ['./viewnotfound.component.css']
})
export class ViewnotfoundComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit(): void {

  }

}
