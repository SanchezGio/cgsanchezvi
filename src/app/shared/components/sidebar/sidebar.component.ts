import { UtilsService } from './../../services/utils.service';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private authSvc: MainServiceService, private utilsSvc: UtilsService) {}

  ngOnInit(): void {}

  onExit(): void {
    this.authSvc.logout();
    this.utilsSvc.openSidebar(false);
  }
}
