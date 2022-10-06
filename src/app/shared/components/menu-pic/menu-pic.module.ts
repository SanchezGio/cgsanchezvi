import { UtilsService } from './../../services/utils.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPicComponent } from './menu-pic.component';

import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [MenuPicComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [MenuPicComponent],
  providers: [UtilsService],
})
export class MenuPicModule { }
