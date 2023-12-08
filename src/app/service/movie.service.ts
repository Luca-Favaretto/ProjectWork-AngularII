import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from '../module/favorite';
import { Movie } from '../module/movie';
import { Users } from '../module/users';
import { environment } from 'src/environments/environment';
import { Auth } from '../auth/auth';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  getMovie() {
    return this.http.get<Movie[]>(`${this.apiURL}movies-popular`);
  }
  getFavorite() {
    return this.http.get<Favorite[]>(`${this.apiURL}favorites`);
  }

  addFavorite(movieId: number, userId: number) {
    const favorite: Favorite = {
      movieId: movieId,
      userId: userId,
    };

    return this.http.post<Favorite>(`${this.apiURL}favorites`, favorite);
  }

  getUserId(): number {
    const user = localStorage.getItem('user');
    if (user) {
      const userData: Auth = JSON.parse(user);
      return userData.user.id;
    }
    return 0;
  }
  removeFavorite(id: number) {
    return this.http.delete<Favorite>(`${this.apiURL}favorites/${id}`);
  }
}
