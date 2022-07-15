import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InfoToken } from 'src/app/shared/models/InfoToken';
import { CookieService } from 'ngx-cookie-service';
import { UserInfo } from 'src/app/shared/models/UsersInfo';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  protected tokenJwt: string = '';
  protected infoToken = new InfoToken();
  protected base : string='';

  constructor(private cookie: CookieService) { 
    let apath=location.pathname.split("/");
    this.base="/"+(apath.length>2?apath[1]:'');
  }
  
  setJwt(token: UserInfo) {
    this.tokenJwt = token.token;
    let info = new InfoToken();
    info.userId = token.Id;
    info.userFullName = token.Names + ' ' + token.Surnames;
    info.userNet = token.user_name;
    //info.expirationDate = new Date(token.expires_in * 1000);
    info.userDoc=token.DocNumber;
    this.infoToken=info;
    this.cookie.set('Token', token.token);
  }
  getJwt() {
    this.tokenJwt=this.tokenJwt||
    this.cookie.get('Token');
    return this.tokenJwt; 
  }
  delJwt(){
    this.tokenJwt='';
    this.cookie.delete('Token',this.base);
  }
  getInfoToken(){
    return this.infoToken;
  }
  setUserName(user: string) {
    this.infoToken.userFullName = user;
  }
  public getUserNet() {
    return this.infoToken.userNet;
  }
  public getUserDoc() {
    return this.infoToken.userDoc;
  }
  setExpirationDate(date: Date) {
    this.infoToken.expirationDate = date;
  }
  getExpirationDate() {
    return this.infoToken.expirationDate;
  }
  setRoles(roles: string[]) {
    this.infoToken.userRoles = roles;
  }
  getRoles() {
    return this.infoToken.userRoles;
  }
}
