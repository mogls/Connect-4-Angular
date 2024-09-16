import { Component } from '@angular/core';
import { BoardStateService } from '../board-state.service';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../game-state.service';
import { PieceComponent } from '../piece/piece.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gameboard',
  standalone: true,
  imports: [CommonModule, PieceComponent, RouterModule],
  templateUrl: './gameboard.component.html',
  styleUrl: './gameboard.component.scss',
})
export class GameboardComponent {
  constructor(
    public boardState: BoardStateService,
    public gameState: GameStateService
  ) {}

  placePiece(index: number): void {
    let player = this.gameState.currentPlayer;
    try {
      this.boardState.placePiece(index, player);
    } catch (e) {
      alert("You can't place a piece there. Place it somewhere else!");
      console.log('Error: ', e);
      return;
    }

    if (this.gameState.checkForWin()) {
      this.gameState.onWin();
    }

    this.gameState.changeCurrentPlayer();
  }

  removePiece(index: number): void {}
}
