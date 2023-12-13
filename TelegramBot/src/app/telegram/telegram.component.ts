import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,
   ReactiveFormsModule, Validators } from '@angular/forms';
import { TelegramService } from './telegram.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-bot',
  standalone: true,
  imports: [CommonModule, HttpClientModule , ReactiveFormsModule],
  templateUrl: './telegram.component.html',
  styleUrl: './telegram.component.scss'
})
export class TelegramComponent {
  constructor(private telegramService: TelegramService,
    private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
     
      this.addItems()
    }

    chat_id: number[] = [5470140862];
   

    errorMessage:string|null = null;

    form:FormGroup=this.formBuilder.group({
      text:["",Validators.required],
      photo:["",Validators.required],
      caption:["",Validators.required],
      button:[],
      items:this.formBuilder.array([])
    })

    get items():FormArray{
      return this.form.get('items') as FormArray;
    }

    addItems(){
      this.items.push(this.formBuilder.group({
        name:[""],
      }))
    }

    removeAt(index:number){
      this.items.removeAt(index)
    }

    convertlistToTelegramFormat(list:any[]){
      var arrayOfTelegramFormat:any=[]

      let numberOfButton = this.form.value.button;
       

    }
    
    submit(){
      this.errorMessage=null
      if (this.form.valid) {
        this.telegramService.sendMessage(
        this.chat_id[0],
        this.form.get('text')?.value,
        this.convertlistToTelegramFormat(this.items.value)
        ).subscribe(data=>{
        })
        this.telegramService.sendPhoto(
          this.chat_id[0],
          this.form.get('photo')?.value,
          this.form.get('caption')?.value
        ).subscribe(data=>{
        })
      }else{this.errorMessage="text is empty"}
    }
}