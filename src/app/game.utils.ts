import {GameValueEnum} from './components/game-buttons/enums/game-value.enum';
import {IGameRound} from './interfaces/game-round';
import {RoundWinnerEnum} from './enums/round-winner.enum';

export class GameUtils {


  /**
   * Gives human readable result
   * @param choice
   */
  static getChoice(choice: GameValueEnum) {
    return GameValueEnum[choice];
  }



  static getRoundWinnerEnumValue(gameRound: IGameRound): RoundWinnerEnum {
    console.log(`player: ${GameUtils.getChoice(gameRound.player)}`);
    console.log(`computer: ${GameUtils.getChoice(gameRound.computer)}`);

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

}
