import { UserResponse } from './../../models/user.interface';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { takeUntil } from 'rxjs/operators';
import { Roles } from '@app/shared/models/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAdmin = null;
  isLogged = true;

  private destroy$ = new Subject<any>();

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authSvc: MainServiceService) {}

  ngOnInit(): void {
    this.authSvc.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserResponse) => {
        debugger
        this.isAdmin = user?.role;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  onLogout(): void {
    this.authSvc.logout();
  }
}
