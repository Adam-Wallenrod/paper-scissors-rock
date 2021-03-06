import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {GameValueEnum} from './components/game-buttons/enums/game-value.enum';
import {IGameRound} from './interfaces/game-round';
import {RoundWinnerEnum} from './enums/round-winner.enum';
import {ScoreComponent} from './components/score/score.component';
import {GameUtils} from './game.utils';

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
  isRoundInfoVisible: boolean;
  roundWinnerEnum: typeof RoundWinnerEnum = RoundWinnerEnum;
  round: IGameRound;



  constructor() {
  }


  onSelectedGameValue(playerChoice: GameValueEnum) {
    const computerChoice: GameValueEnum = this.getComputerGameValueChoice();

    this.isRoundInfoVisible = true;

    setTimeout(() => {
      this.round = {
        player: playerChoice,
        computer: computerChoice
      } as IGameRound;
    });


    this.roundWinner = GameUtils.getRoundWinnerEnumValue(this.round);
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







  resetPreviousRoundData() {
    this.roundWinner = null;
  }


  setWinner(winner: RoundWinnerEnum) {
    this.winner = winner;
  }


  resetGameData() {
    this.winner = null;
    this.isGameInfoVisible = false;
    this.scoreComponent.resetScore();
  }

}
