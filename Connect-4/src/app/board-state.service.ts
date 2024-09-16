import { Injectable } from '@angular/core';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class BoardStateService {
  rows = 6;
  columns = 7;
  gameBoard: number[][] = [];

  constructor() {
    for (let column: number = 0; column < this.columns; column++) {
      this.gameBoard[column] = [];
      for (let row = 0; row < this.rows; row++) {
        this.gameBoard[column][row] = 0;
      }
    }
  }

  flipGameBoard(): number[][] {
    let gameBoardCopy: number[][] = this.gameBoard;
    let displayBoard: number[][] = [];
    for (let column = 0; column < this.columns; column++) {
      displayBoard[column] = gameBoardCopy[column].reverse();
    }

    return displayBoard;
  }

  placePiece(column: number, player: number) {
    const row: number = this.gameBoard[column].indexOf(0);

    if (row == -1) {
      throw new Error('Exceeded game board height');
    }

    this.gameBoard[column][row] = player;

  }
}
