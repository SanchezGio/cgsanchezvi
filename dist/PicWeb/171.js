"use strict";(self.webpackChunklogin=self.webpackChunklogin||[]).push([[171],{4171:(T,g,e)=>{e.r(g),e.d(g,{LoginModule:()=>O});var u=e(9808),a=e(8555),c=e(2654),o=e(5e3),p=e(5528),f=e(357),h=e(5376),v=e(7423),F=e(5245),m=e(7322),C=e(7531),d=e(9224),r=e(3075);function L(t,s){if(1&t&&(o.TgZ(0,"mat-error"),o._uU(1),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.hij(" ",n.loginForm.errorMessage," ")}}function b(t,s){if(1&t&&(o.TgZ(0,"mat-error"),o._uU(1),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.hij(" ",n.loginForm.errorMessage," ")}}const M=[{path:"",component:(()=>{class t{constructor(n,i,l,y){this.mainSvc=n,this.router=i,this.loginForm=l,this.auth=y,this.hide=!0,this.subscription=new c.w}ngOnInit(){this.loginForm.baseForm.get("role").setValidators(null),this.loginForm.baseForm.get("role").updateValueAndValidity()}ngOnDestroy(){this.subscription.unsubscribe()}onLogin(){if(this.loginForm.baseForm.invalid)return;let n={username:String(this.loginForm.baseForm.get("username").value),password:String(this.loginForm.baseForm.get("password").value)};this.subscription.add(this.mainSvc.executeMethod("Auth","Login",n,!1).subscribe(i=>{0===i.error?(localStorage.setItem("islogged","SI"),this.auth.login(i.values.token),this.router.navigate(["/home"])):(localStorage.setItem("islogged","NO"),this.mainSvc.openSnackBar("Error",i.message))})),console.log("islogged ",localStorage.getItem("islogged"))}checkField(n){return this.loginForm.isValidField(n)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(p.fr),o.Y36(a.F0),o.Y36(f.h),o.Y36(h.J))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:17,vars:6,consts:[[1,"login-form"],[3,"formGroup","ngSubmit"],[1,"full-width-input"],["text","text","formControlName","username","matInput","","placeholder","Username","required",""],[4,"ngIf"],[1,"full-width-input","separator"],["formControlName","password","matInput","","placeholder","Password","required","",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(n,i){1&n&&(o.TgZ(0,"div",0)(1,"mat-card")(2,"mat-card-content")(3,"h1"),o._uU(4,"LOGIN"),o.qZA(),o.TgZ(5,"form",1),o.NdJ("ngSubmit",function(){return i.onLogin()}),o.TgZ(6,"mat-form-field",2),o._UZ(7,"input",3),o.YNc(8,L,2,1,"mat-error",4),o.qZA(),o.TgZ(9,"mat-form-field",5),o._UZ(10,"input",6),o.TgZ(11,"button",7),o.NdJ("click",function(){return i.hide=!i.hide}),o.TgZ(12,"mat-icon"),o._uU(13),o.qZA()(),o.YNc(14,b,2,1,"mat-error",4),o.qZA(),o.TgZ(15,"button",8),o._uU(16," Login "),o.qZA()()()()()),2&n&&(o.xp6(5),o.Q6J("formGroup",i.loginForm.baseForm),o.xp6(3),o.Q6J("ngIf",i.checkField("username")),o.xp6(2),o.Q6J("type",i.hide?"password":"text"),o.xp6(3),o.Oqu(i.hide?"visibility_off":"visibility"),o.xp6(1),o.Q6J("ngIf",i.checkField("password")),o.xp6(1),o.Q6J("disabled",i.loginForm.baseForm.invalid))},dependencies:[u.O5,v.lW,F.Hw,m.TO,m.KE,m.R9,C.Nt,d.a8,d.dn,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u],styles:[".login-form[_ngcontent-%COMP%]{padding:4rem 1rem}.login-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{max-width:300px;margin:2rem auto;text-align:center;height:350px}.login-form[_ngcontent-%COMP%]   .full-width-input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.login-form[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[a.Bz.forChild(M),a.Bz]}),t})();var S=e(4169);let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.ez,Z,S.q,r.UX]}),t})()}}]);