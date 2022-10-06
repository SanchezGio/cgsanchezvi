import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public authSvc: MainServiceService, private router: Router) {}

  ngOnInit(): void {
    console.log("islogged ",localStorage.getItem('islogged'))
    if(localStorage.getItem('islogged')=='NO'){
      this.router.navigate(["/login"]);
    }
  }
}
