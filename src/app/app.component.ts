import {Component} from '@angular/core';
import {GameValueEnum} from './components/game-buttons/enums/game-value.enum';
import {IGameRound} from './interfaces/game-round';
import {RoundWinnerEnum} from './enums/round-winner.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'paper-scissors-rock-app';


  onSelectedGameValue(playerChoice: GameValueEnum) {
    const computerChoice: GameValueEnum = this.getComputerGameValueChoice();
    const round: IGameRound = {
      player: playerChoice,
      computer: computerChoice
    } as IGameRound;
    console.log(`player: ${this.getChoice(round.player)}`);
    console.log(`computer: ${this.getChoice(round.computer)}`);

    const roundWinner = this.getRoundWinner(round);

  }


  /**
   * Simulating random choice of player - computer.
   */
  getComputerGameValueChoice(): GameValueEnum {
    const min = 0;
    const max = 2;
    const cpuChoice: number = Math.floor(Math.random() * (max - min + 1) + min);

    console.log('computer chose: ', cpuChoice);
    return cpuChoice;
  }



  getRoundWinner(gameRound: IGameRound): RoundWinnerEnum {

    if (gameRound.player === GameValueEnum.PAPER && gameRound.computer === GameValueEnum.ROCK) {
      return RoundWinnerEnum.PLAYER1;
    }

    if (gameRound.player === GameValueEnum.ROCK && gameRound.computer === GameValueEnum.SCISSORS) {
      return RoundWinnerEnum.PLAYER1;
    }


    if (gameRound.player === GameValueEnum.SCISSORS && gameRound.computer === GameValueEnum.PAPER) {
      return RoundWinnerEnum.PLAYER1;
    }

    if (gameRound.player === gameRound.computer) {
      return RoundWinnerEnum.DRAW;
    }


    return RoundWinnerEnum.COMPUTER;

  }

  getChoice(choice: GameValueEnum) {
      return GameValueEnum[choice];
  }

}
