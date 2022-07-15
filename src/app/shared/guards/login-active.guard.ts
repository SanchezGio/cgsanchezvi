import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenServiceService } from 'src/app/Services/token-service.service';

@Injectable()
export class LoginActivate implements CanActivate {
  isLoginSubject = new BehaviorSubject<boolean>(false);
  notifys: object[] = [];
  health: string = "Healthy";
  //timeout: NodeJs.Timer;
  constructor(private token:TokenServiceService, private router: Router) {}

  login(token) : void {
    this.token.setJwt(token);
    this.isLoginSubject.next(true);
  }
  setHealth(res:string){
    this.health=res["message"];
  }
  addNotify(res){
    this.notifys.push(res);
  }
  logout() : void {
    this.token.delJwt();
    this.isLoginSubject.next(false);
    this.router.navigate(['login']);
  }
  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
  isExpired(){
    return new Date()>this.token.getExpirationDate()?true:false;
  }
  getLoggedInValue(): boolean {
    return this.isLoginSubject.getValue();
  }
  getToken(){
    return this.token.getJwt();
  }
  getUserNet() {
    return this.token.getUserNet();
  }
  getUserDoc() {
    return this.token.getUserDoc();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
   
    let token =this.token.getJwt()||null;
    if(token){
      this.login(token);
    }
    if (!this.getLoggedInValue()) {
      this.logout();
    }
    if(this.isExpired()){
      alert('Su sesión ha expirado.');
      this.logout();
    }
    return true;
  }
}
