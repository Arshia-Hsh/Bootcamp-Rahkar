import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemoryRecieverComponent } from '../memory-reciever/memory-reciever.component';

@Component({
  selector: 'app-memory-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,MemoryRecieverComponent],
  templateUrl: './memory-list.component.html',
  styleUrl: './memory-list.component.scss'
})
export class MemoryListComponent {

  Memory: { text: string}[] = [];

  AddMemory(Memory: {text:string}) {
    this.Memory.push(Memory);
  }
}
