import { Signal } from 'signal-ts';
import { CellPos, Vector } from 'setup';
import { Board } from './models/Board';
import { SpritePool } from './services/SpritePool';

export namespace EventBus {
    // Emitted by EventHandler to when cells are clicked.
    export const cellClickEvent: Signal<Vector> = new Signal();

    // Sent to CandyMatchHandler to check if swapping is allowed.
    export const swapCellRequest: Signal<{first: Vector, second: Vector, board: Board}> = new Signal();

    // Used for updating board when controllers make changes in board.
    export const updateBoard: Signal<Board> = new Signal();

    // Updates canvas with the swapped cells.
    export const renderSwapAnimation: Signal<{first: CellPos, second: CellPos}> = new Signal();

    // Re-render canvas.
    export const renderBoard: Signal<Board> = new Signal();

    // Destroy candies.
    export const destroyCandies: Signal<{board: Board, candies: Vector[]}> = new Signal();

    // Apply gravity to board.
    export const applyGravity: Signal<void> = new Signal();
}

export namespace Global {
    export const spritePool: SpritePool = new SpritePool();
}