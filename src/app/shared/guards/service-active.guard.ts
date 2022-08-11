import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceActiveGuard implements CanActivate {
  showLoading = new BehaviorSubject<boolean>(false);
  

  loading(option:boolean) : void {
    this.showLoading.next(option);
  }
  isLoading() : Observable<boolean> {
    return this.showLoading.asObservable();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return true;
  }
  
}
