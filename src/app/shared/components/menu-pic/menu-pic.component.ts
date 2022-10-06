import { UtilsService } from './../../services/utils.service';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-pic',
  templateUrl: './menu-pic.component.html',
  styleUrls: ['./menu-pic.component.scss']
})
export class MenuPicComponent implements OnInit {

  constructor(private authSvc: MainServiceService, private utilsSvc: UtilsService) { }

  ngOnInit(): void {
  }

}
