"use strict";(self.webpackChunklogin=self.webpackChunklogin||[]).push([[51],{9051:(j,h,s)=>{s.r(h),s.d(h,{UsersModule:()=>H});var g=s(9808),C=s(8555),i=s(6346),f=s(4847),d=s(2349),t=s(5e3),U=s(357),Z=s(1737),T=s(520);let v=(()=>{class e{constructor(o){this.http=o}handlerError(o){let n="Error unknown";return o&&(n=`Error ${o.message}`),window.alert(n),(0,Z._)(n)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(T.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var _=s(7423),x=s(5245),u=s(7322),w=s(7531),y=s(508),F=s(4107),m=s(3075);function M(e,r){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.userForm.errorMessage," ")}}function A(e,r){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.hij(" ",o.userForm.errorMessage," ")}}function b(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"mat-form-field",3),t._UZ(1,"input",13),t.TgZ(2,"button",14),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.hide=!a.hide)}),t.TgZ(3,"mat-icon"),t._uU(4),t.qZA()(),t.YNc(5,A,2,1,"mat-error",5),t.qZA()}if(2&e){const o=t.oxw();t.xp6(1),t.Q6J("type",o.hide?"password":"text"),t.xp6(3),t.Oqu(o.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",o.checkField("password"))}}function N(e,r){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.userForm.errorMessage," ")}}var c=(()=>{return(e=c||(c={})).EDIT="edit",e.NEW="new",c;var e})();let O=(()=>{class e{constructor(o,n,a){this.data=o,this.userForm=n,this.userSvc=a,this.actionTODO=c.NEW,this.showPasswordField=!0,this.hide=!0}ngOnInit(){var o;null!==(o=this.data)&&void 0!==o&&o.user.hasOwnProperty("id")&&(this.actionTODO=c.EDIT,this.showPasswordField=!1,this.userForm.baseForm.get("password").setValidators(null),this.userForm.baseForm.updateValueAndValidity(),this.data.title="Edit user",this.pathFormData())}onSave(){var o;this.actionTODO!==c.NEW&&(o=this.data)}checkField(o){return this.userForm.isValidField(o)}pathFormData(){var o,n,a,l;this.userForm.baseForm.patchValue({username:null===(n=null===(o=this.data)||void 0===o?void 0:o.user)||void 0===n?void 0:n.username,role:null===(l=null===(a=this.data)||void 0===a?void 0:a.user)||void 0===l?void 0:l.role})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.WI),t.Y36(U.h),t.Y36(v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-modal"]],decls:23,vars:7,consts:[["mat-dialog-title",""],[1,"modal-form"],[3,"formGroup"],[1,"full-width-input"],["formControlName","username","matInput","","placeholder","Username","required",""],[4,"ngIf"],["class","full-width-input",4,"ngIf"],["formControlName","role"],["value","suscriptor"],["value","admin"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","ckdFocusInitial","",3,"mat-dialog-close","disabled","click"],["formControlName","password","matInput","","placeholder","Password","required","",3,"type"],["mat-icon-button","","matSuffix","",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"div",1)(4,"form",2)(5,"mat-form-field",3),t._UZ(6,"input",4),t.YNc(7,M,2,1,"mat-error",5),t.qZA(),t.YNc(8,b,6,3,"mat-form-field",6),t.TgZ(9,"mat-form-field",3)(10,"mat-label"),t._uU(11,"Select "),t.qZA(),t.TgZ(12,"mat-select",7)(13,"mat-option",8),t._uU(14,"Suscriptor"),t.qZA(),t.TgZ(15,"mat-option",9),t._uU(16,"Admin"),t.qZA()(),t.YNc(17,N,2,1,"mat-error",5),t.qZA()()()(),t.TgZ(18,"mat-dialog-actions",10)(19,"button",11),t._uU(20,"Cancel"),t.qZA(),t.TgZ(21,"button",12),t.NdJ("click",function(){return n.onSave()}),t._uU(22," Save "),t.qZA()()),2&o&&(t.xp6(1),t.Oqu(null==n.data?null:n.data.title),t.xp6(3),t.Q6J("formGroup",n.userForm.baseForm),t.xp6(3),t.Q6J("ngIf",n.checkField("username")),t.xp6(1),t.Q6J("ngIf",n.showPasswordField),t.xp6(9),t.Q6J("ngIf",n.checkField("role")),t.xp6(4),t.Q6J("mat-dialog-close",!0)("disabled",!n.userForm.baseForm.valid))},dependencies:[g.O5,_.lW,x.Hw,u.TO,u.KE,u.hX,u.R9,w.Nt,d.ZT,d.uh,d.xY,d.H8,y.ey,F.gD,m._Y,m.Fj,m.JJ,m.JL,m.Q7,m.sg,m.u],styles:[".modal-form[_ngcontent-%COMP%]{padding:1rem 0}.modal-form[_ngcontent-%COMP%]   .full-width-input[_ngcontent-%COMP%]{width:100%}"]}),e})();var D=s(5529);function Y(e,r){1&e&&(t.TgZ(0,"th",11),t._uU(1,"No."),t.qZA())}function J(e,r){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.Oqu(o.id)}}function S(e,r){1&e&&(t.TgZ(0,"th",11),t._uU(1,"Role"),t.qZA())}function Q(e,r){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.Oqu(o.role)}}function I(e,r){1&e&&(t.TgZ(0,"th",11),t._uU(1,"Username"),t.qZA())}function E(e,r){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.Oqu(o.username)}}function k(e,r){1&e&&(t.TgZ(0,"th",11),t._uU(1,"Actions"),t.qZA())}function q(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"td",12)(1,"div",0)(2,"button",13),t.NdJ("click",function(){const l=t.CHM(o).$implicit,p=t.oxw();return t.KtG(p.onOpenModal(l))}),t._uU(3," Edit "),t.qZA(),t.TgZ(4,"button",14),t.NdJ("click",function(){const l=t.CHM(o).$implicit,p=t.oxw();return t.KtG(p.onDelete(l.id))}),t._uU(5," Delete "),t.qZA()()()}}function P(e,r){1&e&&t._UZ(0,"tr",15)}function R(e,r){1&e&&t._UZ(0,"tr",16)}const B=[{path:"",component:(()=>{class e{constructor(o,n){this.userSvc=o,this.dialog=n,this.displayedColumns=["id","role","username","actions"],this.dataSource=new i.by,this.destroy$=new D.xQ}ngOnInit(){}ngAfterViewInit(){this.dataSource.sort=this.sort}onDelete(o){window.confirm("Do you really want remove this user")}onOpenModal(o={}){console.log("User->",o),this.dialog.open(O,{height:"400px",width:"600px",hasBackdrop:!1,data:{title:"New user",user:o}}).afterClosed().subscribe(a=>{console.log(`Dialog result: ${a}`,typeof a)})}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(v),t.Y36(d.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-users"]],viewQuery:function(o,n){if(1&o&&t.Gf(f.YE,5),2&o){let a;t.iGM(a=t.CRH())&&(n.sort=a.first)}},decls:18,vars:3,consts:[[1,"table-button-row"],["mat-flat-button","","color","primary",1,"btn-new",3,"click"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","role"],["matColumnDef","username"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-flat-button","","color","accent",3,"click"],["mat-flat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return n.onOpenModal()}),t._uU(2," Add new "),t.qZA()(),t.TgZ(3,"table",2),t.ynx(4,3),t.YNc(5,Y,2,0,"th",4),t.YNc(6,J,2,1,"td",5),t.BQk(),t.ynx(7,6),t.YNc(8,S,2,0,"th",4),t.YNc(9,Q,2,1,"td",5),t.BQk(),t.ynx(10,7),t.YNc(11,I,2,0,"th",4),t.YNc(12,E,2,1,"td",5),t.BQk(),t.ynx(13,8),t.YNc(14,k,2,0,"th",4),t.YNc(15,q,6,0,"td",5),t.BQk(),t.YNc(16,P,1,0,"tr",9),t.YNc(17,R,1,0,"tr",10),t.qZA()),2&o&&(t.xp6(3),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[_.lW,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,f.YE,f.nU],styles:["table[_ngcontent-%COMP%]{width:98%;margin:0 auto;margin-top:1rem}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.table-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:12px}.btn-new[_ngcontent-%COMP%]{width:20%}"]}),e})()}];let $=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[C.Bz.forChild(B),C.Bz]}),e})();var G=s(4169);let H=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,$,G.q]}),e})()}}]);