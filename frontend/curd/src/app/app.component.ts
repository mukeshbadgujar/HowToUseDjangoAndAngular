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

  movies = [{title: 'test'}];

  constructor(private quickstart:QuickstartService){
    this.getMovies();
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
}
