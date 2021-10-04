import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListactorsComponent} from "./listactors/listactors.component";
import {AddactorComponent} from "./addactor/addactor.component";
import {UpdateactorComponent} from "./updateactor/updateactor.component";
import {DeleteactorComponent} from "./deleteactor/deleteactor.component";
import {ListMoviesComponent} from "./list-movies/list-movies.component";
import {DeleteMovieComponent} from "./delete-movie/delete-movie.component";
import {AddactortomovieComponent} from "./addactortomovie/addactortomovie.component";
import {AddMovieComponent} from "./add-movie/add-movie.component";
import {ViewnotfoundComponent} from "./viewnotfound/viewnotfound.component";

const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "addmovie", component: AddMovieComponent },
  { path: "addactortomovie", component: AddactortomovieComponent },
  { path: "deletemovie", component: DeleteMovieComponent },
  { path: "listmovies", component: ListMoviesComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: '**', component: ViewnotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
