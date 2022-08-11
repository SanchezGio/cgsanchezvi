import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { MaterialModule } from '@app/material.module';
import { SidebarModule } from '@shared/components/sidebar/sidebar.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AdminInterceptor } from '@shared/interceptors/admin-interceptor';
import { ServiceActiveGuard } from 'src/app/shared/guards/service-active.guard';
import { LoginActivate } from 'src/app/shared/guards/login-active.guard';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    CookieService,
    LoginActivate,
    ServiceActiveGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
