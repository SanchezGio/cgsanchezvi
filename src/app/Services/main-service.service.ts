import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { LoginActivate } from 'src/app/shared/guards/login-active.guard';
import { ServiceActiveGuard } from 'src/app/shared/guards/service-active.guard';
import { UserResponse, User, Roles } from '@shared/models/user.interface';
import { GenericResponse } from '@shared/models/GenericResponse';
import { catchError, map } from 'rxjs/operators';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  private httpOptions: { headers: any; };
  private user = new BehaviorSubject<UserResponse>(null);
  confirm: boolean = false;
  spaceId: string;

  constructor(private http: HttpClient, private router: Router,
    public dialog: MatDialog,public snackBar: MatSnackBar,protected authService: LoginActivate,protected loadService: ServiceActiveGuard) {
  }
  get user$(): Observable<UserResponse> {
    return this.user.asObservable();
  }

  get userValue(): UserResponse {
    return this.user.getValue();
  }
  executeMethod(name="",method="",data= null,jwt=true): Observable<UserResponse> {
    //clearTimeout( this.authService.timeout);
    //this.authService.timeout=setTimeout(() => {this.authService.logout()}, 60000*60);
    let args=arguments;
    jwt?this.setHeaders(): new HttpHeaders({'Content-Type': 'application/json'});
    this.loadService.loading(true);
    return this.http.post<UserResponse>(
      environment.Url(name) + method,
      data,
      this.httpOptions)
      .pipe(
        map((userin: UserResponse) => {
          this.user.next(userin);
          return userin;
        }),
        catchError(async (error, caught) => {
          if(error.status==401){
            alert("Acceso no Autorizado, saldra de la sesión.");
            this.logout();
            window.location.reload();
          }else
          this.openSnackBar(error.status,error.message);
          //this.openDialog(error.status,error.message);
          return "";
        }
        )) as Observable<UserResponse>;
  }


  logout(): void {
    localStorage.removeItem('user');
    this.user.next(null);
    this.router.navigate(['/login']);
  }

  openSnackBar(answer: string, message: string) {
    this.snackBar.open(message || "Contacte el administrador.", Number(answer) ? (Number(answer) == 0 ? "Exito" : "Error"):answer, {
      duration: 2000,
    });
  }

  openDialog(error: any, message: string, confirm:boolean=false,values=null): Promise<number> {
    let crash=message?true:false,ups="Upss!!",some="Algo sucede con tu conexión, dale atras.";
    error=message?error:null;
    let title=typeof error=="number"?(error?"Error":"Exito!!"):(crash?error:ups);
    message=message||some;
    if(values)
    this.snackBar.openFromComponent(statusContainer, {
      duration: 1000,
    });
    const dialogRef=this.dialog.open(dialogContainer,{
      data:{title:title,error:error,message:message,confirm:confirm?true:false,crash:crash,values:values}
    });
    return dialogRef.afterClosed()
      .toPromise()
      .then(result => {
        this.confirm = result;
        return Promise.resolve(result);
      });
  }

  openDialogAutenticacion(mensaje, values = null): void {
    this.dialog.open(ErrorAuthentication,
      {
        data: mensaje
      });
    if (values) {
      this.dialog.open(ModalStatus,
        {
          data: mensaje
        });
    }
  }

  setHeaders() {
    debugger
    return this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
        'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
  }
}

export class dialogContainer {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}

export class statusContainer {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  }

  export class ErrorAuthentication {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  }
  export class ModalStatus {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  }
  
