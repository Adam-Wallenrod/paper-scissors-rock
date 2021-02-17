import {Component, Input, OnInit} from '@angular/core';
import {IGameRound} from '../../interfaces/game-round';
import {GameValueEnum} from '../game-buttons/enums/game-value.enum';

@Component({
  selector: 'app-round-info',
  templateUrl: './round-info.component.html',
  styleUrls: ['./round-info.component.scss']
})
export class RoundInfoComponent implements OnInit {

  @Input() isRoundInfoVisible;
  @Input() round: IGameRound;


  constructor() {
  }

  ngOnInit() {
  }


  getIconForChoice(choice: GameValueEnum): string {

    if(choice === undefined) {
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

}
