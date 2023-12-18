import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

  user1Points = 0;
  user2Points = 0;
  
  winner = null;

   rollDice() {
    const diceResult = Math.floor(Math.random() * (6 -1 +1)) +1;

    if (diceResult <=3) {
      this.user1Points++;
      if(this.user1Points ===5){
      }
    } else {
      this.user2Points++;
      if(this.user2Points ===5){
        // return this.winner;

      }
    }
   }
}
