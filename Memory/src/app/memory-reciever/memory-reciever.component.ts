import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-memory-reciever',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './memory-reciever.component.html',
  styleUrl: './memory-reciever.component.scss'
})
export class MemoryRecieverComponent {

  @Output() addMemory = new EventEmitter<{text:string }>();

  text = '';

  submitMemory() {
    if (this.text) {
      this.addMemory.emit({text: this.text});
      this.text = '';
    }
  }

  
}
