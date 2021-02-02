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
  roundWinner: RoundWinnerEnum = null;
  winner: RoundWinnerEnum;



  onSelectedGameValue(playerChoice: GameValueEnum) {
    playerChoice = GameValueEnum.ROCK;
    // const computerChoice: GameValueEnum = this.getComputerGameValueChoice();
    const computerChoice: GameValueEnum = GameValueEnum.PAPER;
    const round: IGameRound = {
      player: playerChoice,
      computer: computerChoice
    } as IGameRound;

    this.roundWinner = this.getRoundWinner(round);
  }


  /**
   * Simulating random choice of player - computer.
   */
  getComputerGameValueChoice(): GameValueEnum {
    const min = 0;
    const max = 2;
    const cpuChoice: number = Math.floor(Math.random() * (max - min + 1) + min);

    return cpuChoice;
  }


  getRoundWinner(gameRound: IGameRound): RoundWinnerEnum {
    console.log(`player: ${this.getChoice(gameRound.player)}`);
    console.log(`computer: ${this.getChoice(gameRound.computer)}`);

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
      return RoundWinnerEnum.NOBODY;
    }


    return RoundWinnerEnum.COMPUTER;

  }

  getChoice(choice: GameValueEnum) {
    return GameValueEnum[choice];
  }


  resetPreviousRoundData() {
    this.roundWinner = null;
  }


  setWinner(winner: RoundWinnerEnum) {
    this.winner = winner;
  }

}
