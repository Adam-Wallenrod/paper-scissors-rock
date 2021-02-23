import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {IGameRound} from '../../interfaces/game-round';
import {GameValueEnum} from '../game-buttons/enums/game-value.enum';
import {GameUtils} from '../../game.utils';
import {RoundWinnerEnum} from '../../enums/round-winner.enum';

@Component({
  selector: 'app-round-info',
  templateUrl: './round-info.component.html',
  styleUrls: ['./round-info.component.scss']
})
export class RoundInfoComponent implements OnInit {

  @Input() isRoundInfoVisible;

  @Input() set round(round: IGameRound) {

    this._round = round;
    console.log('_round ====> ', this._round);

    if (this._round) {
      this.setAnimationClasses(this._round);
    }

  }


  @ViewChild('cpuChoiceRef') cpuChoiceRef: ElementRef;
  @ViewChild('playerChoiceRef') playerChoiceRef: ElementRef;


  _round: IGameRound;


  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }


  getIconForChoice(choice: GameValueEnum): string {

    if (choice === undefined) {
      return '';
    }

    switch (choice) {
      case GameValueEnum.ROCK:
        return 'hand-rock-o';

      case GameValueEnum.PAPER:
        return 'hand-paper-o';

      case GameValueEnum.SCISSORS:
        return 'hand-scissors-o';

      default:
        return '';
    }


  }


  setAnimationClasses(round: IGameRound) {
    console.log('ref player: ', this.playerChoiceRef);
    console.log('ref cpu: ', this.cpuChoiceRef);

    const winner: RoundWinnerEnum = GameUtils.getRoundWinnerEnumValue(round);


    switch (winner) {
      case RoundWinnerEnum.PLAYER1:
        this.addClass(this.playerChoiceRef, 'winner');
        this.addClass(this.cpuChoiceRef, 'loser');
        break;


      case RoundWinnerEnum.COMPUTER:
        this.addClass(this.playerChoiceRef, 'loser');
        this.addClass(this.cpuChoiceRef, 'winner');
        break;


      default:
        this.addClass(this.playerChoiceRef, 'nobody_wins');
        this.addClass(this.cpuChoiceRef, 'nobody_wins');
        break;
    }

  }

  addClass(el: any, className: string): void {
    this.renderer.addClass(el, className);
  }


}
