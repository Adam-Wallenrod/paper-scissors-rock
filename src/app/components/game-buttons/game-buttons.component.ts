import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameValueEnum} from './enums/game-value.enum';


@Component({
  selector: 'app-game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['./game-buttons.component.scss']
})
export class GameButtonsComponent implements OnInit {

  @Output() selectedGameValue: EventEmitter<GameValueEnum> = new EventEmitter();

  disableAllButtons: boolean;
  gameButtonValue: typeof GameValueEnum = GameValueEnum;


  constructor() {
  }

  ngOnInit() {
  }


  onButtonClick(buttonValue: GameValueEnum) {
    this.selectedGameValue.emit(buttonValue);
    this.blockGameButtons();
  }


  blockGameButtons() {
    this.disableAllButtons = true;

    setTimeout(() => {
      this.disableAllButtons = false;

    }, 1000);
  }

}
