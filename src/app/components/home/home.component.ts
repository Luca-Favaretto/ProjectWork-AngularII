import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/module/movie';
import { MovieService } from 'src/app/service/movie.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies!: Movie[] | undefined;
  constructor(private movieSrv: MovieService, private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.restore();

    this.movieSrv.getMovie().subscribe((movie: Movie[]) => {
      this.movies = movie;
      console.log(this.movies);
    });
  }
}
