import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { formatCurrency } from '@angular/common';
import { StartComponent } from './start/start.component';

export const routes: Routes = [{
    path:"form",
    component:FormComponent
    
},
{
    path:"start",
    component:StartComponent
}];
