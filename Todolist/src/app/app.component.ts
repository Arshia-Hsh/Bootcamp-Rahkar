import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Todolist';
  todoItems: string[] = [];
  // newItem:string[]=[];

  addItem(newItem: string) {
    this.todoItems.push(newItem);
  }

  removeItem(index: number) {
    this.todoItems.splice(index, 1);
  }
}