import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {GameValueEnum} from './components/game-buttons/enums/game-value.enum';
import {IGameRound} from './interfaces/game-round';
import {RoundWinnerEnum} from './enums/round-winner.enum';
import {ScoreComponent} from './components/score/score.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  @ViewChild(ScoreComponent) scoreComponent: ScoreComponent;

  title = 'paper-scissors-rock-app';
  roundWinner: RoundWinnerEnum = null;
  winner: RoundWinnerEnum;
  isGameInfoVisible: boolean;
  roundWinnerEnum: typeof RoundWinnerEnum = RoundWinnerEnum;



  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {


  }


  onSelectedGameValue(playerChoice: GameValueEnum) {
    const computerChoice: GameValueEnum = this.getComputerGameValueChoice();
    const round: IGameRound = {
      player: playerChoice,
      computer: computerChoice
    } as IGameRound;

    this.roundWinner = this.getRoundWinnerEnumValue(round);
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


  getRoundWinnerEnumValue(gameRound: IGameRound): RoundWinnerEnum {
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
    this.isGameInfoVisible = true;
  }


  resetGameData() {
    this.winner = null;
    this.isGameInfoVisible = false;
    this.scoreComponent.resetScore();
  }

}
