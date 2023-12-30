import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [{
    path:"about",
    component:AboutMeComponent
},
{
    path:"education",
    component:EducationComponent
},
{
    path:"contact",
    component:ContactMeComponent
}];
