import { Board } from 'models/Board';
import { CellItem } from '~/models/CellItems/CellItem';
import { COLUMNS, ROWS } from '~/setup';


// After some candies are destroyed, this class will cause candies to move down.
export class GravityHandler {
    private board: Board;

    constructor(board: Board) {
        this.board = board;
    }

    moveCandiesDownward () {
        
    }
}