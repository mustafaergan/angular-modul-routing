import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import {ModuleRouting} from './person.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModuleRouting,
    SharedModule
  ],
  declarations: [SalaryComponent]
})
export class PersonModule { }
