import { UserResponse } from './../models/user.interface';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authSvc: MainServiceService) {}

  canActivate(): Observable<boolean> {
    return this.authSvc.user$.pipe(
      take(1),
      map((user: UserResponse) => (!user ? true : false))
    );
  }
}
