import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { AboutMeComponent } from '../about-me/about-me.component';
import { EducationComponent } from '../education/education.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,CommonModule,AboutMeComponent
  ,EducationComponent,ContactMeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router:Router){

  }
  onClick1(){
  // this.router.navigateByUrl("about")
  }
  onClick2(){
    // this.router.navigateByUrl("products")
  }
  onClick3(){
      // this.router.navigateByUrl("products")
  }
}
