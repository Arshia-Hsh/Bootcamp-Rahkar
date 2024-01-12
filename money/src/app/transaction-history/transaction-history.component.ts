import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionInputComponent } from '../transaction-input/transaction-input.component';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,TransactionInputComponent],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {
  transactions: { title: string; price: number }[] = [];

  addTransaction(transaction: { title: string; price: number }) {
    this.transactions.push(transaction);
  }

}
