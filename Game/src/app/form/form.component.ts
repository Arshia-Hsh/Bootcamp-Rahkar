import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule,ReactiveFormsModule ,FormGroup , FormBuilder} from '@angular/forms';
import { RouterOutlet,Router,RouterModule } from '@angular/router';
import { authService } from './auth.service';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  username: any;
  
  // @Output() loginSuccess = new EventEmitter<boolean>();

  // login() {
   
  //   this.loginSuccess.emit(true);
  // }

  First!:boolean;
  Second!:boolean
  @Output() enterSubmit = new EventEmitter<FormGroup>();
  
  form !:FormGroup;
  user: any[] = [];
  
  isLoginIn : boolean = false;

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      Username: [''],
      Password: ['']
    });

    this.authService.isLogin.subscribe((data: boolean) => {
      if (data) {
        this.router.navigateByUrl('');
      }
    })
  }
  
  constructor(private formBuilder: FormBuilder, private authService: authService ,private router: Router){}

  onClick(){
    this.enterSubmit.emit(this.form.value);
    let u = {
      username: this.form.value.Username,
    }
    
    
    this.authService.add(u);
  }
  Click1(){
    this.First=true;
    console.log(this.First);
    
    
    
  }
  Click2(){
  this.Second= true;
  console.log(this.Second);
  
  }
  
}

