import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from '../module/favorite';
import { Movie } from '../module/movie';
import { Users } from '../module/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  getMovie() {
    return this.http.get<Movie[]>(`${this.apiURL}movies-popular`);
  }
}
