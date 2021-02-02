import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoundWinnerEnum} from '../../enums/round-winner.enum';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.sass']
})
export class ScoreComponent implements OnInit {

  @Input() set roundWinner(roundWinner: RoundWinnerEnum) {
    console.log('roundWinnerrrroooo: ', roundWinner);


    switch (roundWinner) {
      case RoundWinnerEnum.COMPUTER:
        this.computersScore++;
        if (this.computersScore === 5) {
          this.finalWinner.emit(RoundWinnerEnum.COMPUTER);
        }
        break;

      case RoundWinnerEnum.PLAYER1:
        this.playersScore++;
        if (this.playersScore === 5) {
          this.finalWinner.emit(RoundWinnerEnum.PLAYER1);
        }
        break;

      default:
        break;

    }

    setTimeout(() => {
      this.resetRoundWinner.emit();
    });


  }

  @Output() resetRoundWinner: EventEmitter<any> = new EventEmitter();
  @Output() finalWinner: EventEmitter<RoundWinnerEnum> = new EventEmitter();


  playersScore = 0;
  computersScore = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
