import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {ModuleRouting} from './admin.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModuleRouting,
    SharedModule
  ],
  declarations: [UserComponent]
})
export class AdminModule { }
