import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule , FormGroup ,ReactiveFormsModule ,FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , FormsModule , ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Firstname = new FormControl();
  Lastname = new FormControl();
  Password = new FormControl();
  Email = new FormControl();


  form = new FormGroup({
    Firstname: new FormControl(),
    Lastname : new FormControl(),
    Password: new FormControl(),
    Email : new FormControl()
  });

  onClickHandle(){
    return(
      this.form.value
    ),
    console.log(this.form.value);
  
   
  }
  
}
