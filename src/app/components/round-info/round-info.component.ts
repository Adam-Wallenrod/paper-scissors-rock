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

    if (this._round) {
      this.setAnimationClasses(this._round);
    }

  }


  // https://stackoverflow.com/questions/39366981/viewchild-in-ngif

  @ViewChild('cpuChoiceRef') set cpuChoiceRef(cpuChoiceRef: ElementRef) {
    if (cpuChoiceRef) {
      this._cpuChoiceRef = cpuChoiceRef;
    }
  }

  @ViewChild('playerChoiceRef') set playerChoiceRef(playerChoiceRef: ElementRef) {
    if (playerChoiceRef) {
      this._playerChoiceRef = playerChoiceRef;
    }
  }

  _cpuChoiceRef: ElementRef;
  _playerChoiceRef: ElementRef;
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
    console.log('ref player: ', this._playerChoiceRef);
    console.log('ref cpu: ', this._cpuChoiceRef);

    const winner: RoundWinnerEnum = GameUtils.getRoundWinnerEnumValue(round);


    switch (winner) {
      case RoundWinnerEnum.PLAYER1:
        this.addClass(this._playerChoiceRef, 'winner');
        this.addClass(this._cpuChoiceRef, 'loser');
        break;


      case RoundWinnerEnum.COMPUTER:
        this.addClass(this._playerChoiceRef, 'loser');
        this.addClass(this._cpuChoiceRef, 'winner');
        break;


      default:
        this.addClass(this._playerChoiceRef, 'nobody_wins');
        this.addClass(this._cpuChoiceRef, 'nobody_wins');
        break;
    }

  }

  addClass(elmRef: ElementRef, className: string): void {
    this.renderer.addClass(elmRef.nativeElement, className);
  }


}
