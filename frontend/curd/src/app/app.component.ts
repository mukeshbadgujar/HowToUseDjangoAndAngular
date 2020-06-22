import { Component } from '@angular/core';
import { QuickstartService } from './quickstart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuickstartService]
})
export class AppComponent {
  title = 'curd';
  selectedMovie;
  movies = [{title: 'test'}];

  constructor(private quickstart:QuickstartService){
    this.getMovies();
    this.selectedMovie = {id: -1, title: '' , desc: '', year: 0 };
  }
  getMovies = () => {
    this.quickstart.getAllMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => {
        console.log(error);
      },

    )
  }
  movieClicked = (movie) => {
    this.quickstart.getOneMovie(movie.id).subscribe(
      data => {
        this.selectedMovie = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateMovie = () => {
    this.quickstart.updateMovie(this.selectedMovie).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }
  createMovie = () => {
    this.quickstart.createMovie(this.selectedMovie).subscribe(
      data => {
        this.movies.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteMovie = () => {
    this.quickstart.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }
}
