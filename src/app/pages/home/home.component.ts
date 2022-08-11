import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public authSvc: MainServiceService) {}

  ngOnInit(): void {}
}
