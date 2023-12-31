import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ItemsComponent } from '../items/items.component';
import { TaskService } from '../task.service';
import { ITaskRequest } from '../typing/task-request.model';
import { ITask } from '../typing/task.model';
import { subscribeOn } from 'rxjs';
import { TaskSubmitType } from '../enum/task-submit-type';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,ItemsComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TaskFormComponent {
  constructor(){
    this.getTasks() ;
  }

  taskList: ITask[] = [
    {
      id: 1,
      title: "Sib zamini bekhar zooood!",
      isDone: false
    }
  ];

  fb = inject(FormBuilder);
  taskService = inject(TaskService);

  taskForm = this.fb.group({
    title: ['', Validators.required]
  });

  submitType = TaskSubmitType.submit ;

  getTasks(){
    this.taskService.getTasks().subscribe({
      next:(data) =>{
        this.taskList = data.result ;
      } ,
      error:(error) =>{

      } ,
      complete:()=>{

      }
    })
  }
  selectedtaskid!:number  ;


  onSubmitTask() {
    console.log(this.taskForm.get("title")?.value);
    if(this.submitType == TaskSubmitType.submit){
this.taskService.createTask(this.taskForm.value as ITaskRequest)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getTasks()
        
      } ,
      error:(error) =>{

      },
      complete:() =>{

      }
    });
    }
    if(this.submitType == TaskSubmitType.update){
this.taskService.editTitle(this.taskForm.value as ITaskRequest ,this.selectedtaskid)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getTasks()
        
      } ,
      error:(error) =>{

      },
      complete:() =>{
        this.submitType = TaskSubmitType.submit ;
      }
    });
    }
    
    
    
    this.taskForm.reset()
  }

  onDeleteTask(taskId: number) {
    this.taskService.deleteTask(taskId)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getTasks()
        
      } ,
      error:(error) =>{

      },
      complete:() =>{

      }
    });  }

  onEditTask(taskId: number) {
    this.taskService.getTask(taskId).subscribe({
      next:(data) =>{
        this.taskForm.get("title")?.setValue(data.result[0].title) ;
        this.submitType = TaskSubmitType.update
        this.selectedtaskid = taskId ;
      } ,
      error:(error) =>{

      } ,
      complete:()=>{

      }
    })  }

  onDoneTask(taskId: number) {
    this.taskService.changeStatus(taskId)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getTasks()
        
      } ,
      error:(error) =>{

      },
      complete:() =>{

      }
    });
  }
}
