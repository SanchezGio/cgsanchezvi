import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { BaseFormUser } from '@shared/utils/base-form-user';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { Subscription } from 'rxjs';
import { AuthenticationRequest } from 'src/app/shared/models/AuthenticationRequest';
import { LoginActivate } from 'src/app/shared/guards/login-active.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  private subscription: Subscription = new Subscription();

  constructor(
    private mainSvc: MainServiceService,
    private router: Router,
    public loginForm: BaseFormUser,
    private auth: LoginActivate
  ) {}

  ngOnInit(): void {
    this.loginForm.baseForm.get('role').setValidators(null);
    this.loginForm.baseForm.get('role').updateValueAndValidity();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogin(): void {
    if (this.loginForm.baseForm.invalid) {
      return;
    }

    let data: AuthenticationRequest = {
      username: String(this.loginForm.baseForm.get('username').value),
      password: String(this.loginForm.baseForm.get('password').value),
    }
    //const formValue = this.loginForm.baseForm.value;
    debugger
    this.subscription.add(
      
      this.mainSvc.executeMethod('Auth', 'Login',data,false).subscribe((rta) => {
        debugger
      if (rta.error===0) {
        this.auth.login(rta.values.token);
        this.router.navigate(["/home"]);
      }else {
        this.mainSvc.openSnackBar("Error",rta.message);
      } 
      })
    );
  }

  checkField(field: string): boolean {
    return this.loginForm.isValidField(field);
  }
}

