import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {RoundWinnerEnum} from '../../enums/round-winner.enum';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent implements OnInit {

  @Input() set roundWinner(roundWinner: RoundWinnerEnum) {
    console.log('roundWinnerrrroooo: ', this.convertEnumToString(roundWinner));

    switch (roundWinner) {
      case RoundWinnerEnum.COMPUTER:
        this.computersScore++;
        if (this.computersScore === 1) {
          this.finalWinner.emit(RoundWinnerEnum.COMPUTER);
        }
        break;

      case RoundWinnerEnum.PLAYER1:
        this.playersScore++;
        if (this.playersScore === 1) {
          this.finalWinner.emit(RoundWinnerEnum.PLAYER1);
        }
        break;

      default:
        break;

    }

    setTimeout(() => {
      // this.resetRoundWinner.emit();
    });

  }


  @Output() resetRoundWinner: EventEmitter<any> = new EventEmitter();
  @Output() finalWinner: EventEmitter<RoundWinnerEnum> = new EventEmitter();


  playersScore = 0;
  computersScore = 0;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
  }


  convertEnumToString(enumValue: RoundWinnerEnum): string {
    return RoundWinnerEnum[enumValue];
  }


  public resetScore() {
    this.playersScore = 0;
    this.computersScore = 0;
    this.changeDetector.detectChanges();
  }
}
