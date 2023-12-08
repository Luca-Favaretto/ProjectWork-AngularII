import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private movieSrv: MovieService) {}

  user!: Auth | null;

  ngOnInit(): void {
    this.user = this.movieSrv.getUserInfo();
    console.log(this.user?.user.password);
  }
}
