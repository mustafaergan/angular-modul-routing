import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SalaryComponent} from './salary/salary.component';

const routes: Routes = [
  {
    path: 'salary',
    component: SalaryComponent,
  }
];


export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);

