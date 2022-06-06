import { EventBus } from "~/EventBus";
import { Board } from "~/models/Board";
import { COLUMNS, delay, ROWS, Vector } from "~/setup";

// Called by SwapHandler to match and destroy candies
export class CandyMatchHandler {
    constructor() {
        EventBus.swapCellRequest.add (this.handleSwapRequest.bind(this));
    }

    handleSwapRequest (params: {first: Vector, second: Vector, board: Board}) {
        // Check if any the first or second cell matched.
        if (this.checkIfCandiesMatch(params.board, params.first) || this.checkIfCandiesMatch(params.board, params.second)) {
            return;
        }
        
        // If candies did not match, emit signal to re swap these cells.
        EventBus.renderSwapAnimation.emit ({
            second: {
                pos: params.first,
                img: params.board.getImageAtCell (params.first)
            },
            first: {
                pos: params.second,
                img: params.board.getImageAtCell (params.second)
            },
        });

        // Update the board with this data.
        const temp = params.board.cells[params.first.x][params.first.y];
        params.board.cells[params.first.x][params.first.y] = params.board.cells[params.second.x][params.second.y];
        params.board.cells[params.second.x][params.second.y] = temp;

        // Update global board class.
        EventBus.updateBoard.emit (params.board);
        
    }
    // Scans board if there are three in line. Return if three in line.
    // Used to check whether to swap candies or destroy them.
    checkIfCandiesMatch (board: Board, cellPos: Vector): boolean {
        /*
                          ( top2 )
                          ( top1 )
          (left2) (left1) (cellPos) (right1) (right2)
                          (bottom1)
                          (bottom2)
         */
        // cellPos = {x: cellPos.y, y: cellPos.x};
        const top1 = {x: cellPos.x - 1, y: cellPos.y};
        const top2 = {x: cellPos.x - 2, y: cellPos.y};
        const bottom1 = {x: cellPos.x + 1, y: cellPos.y};
        const bottom2 = {x: cellPos.x + 2, y: cellPos.y};

        const left1 = {x: cellPos.x, y: cellPos.y - 1};
        const left2 = {x: cellPos.x, y: cellPos.y - 2};
        const right1 = {x: cellPos.x, y: cellPos.y + 1};
        const right2 = {x: cellPos.x, y: cellPos.y + 2};
        
        // Check horizontal match with this cell in left.
        if (board.doCandiesMatch (cellPos, right1) && board.doCandiesMatch(cellPos, right2)) {
            return true;
        }

        // Check if horizontal match with this cell in middle.
        if (board.doCandiesMatch (cellPos, left1) && board.doCandiesMatch(cellPos, right1)) {
            return true;
        }

        // Check if horizontal match with this cell in right.
        if (board.doCandiesMatch (cellPos, left1) && board.doCandiesMatch(cellPos, left2)) {
            return true;
        }
        
        // Check if vertical match with this cell in top.
        if (board.doCandiesMatch (cellPos, bottom1) && board.doCandiesMatch(cellPos, bottom2)) {
            return true;
        }

        // Check if vertical match with this cell in middle.
        if (board.doCandiesMatch (cellPos, top1) && board.doCandiesMatch(cellPos, bottom1)) {
            return true;
        }
        
        // Check if vertical match with this cell in bottom.
        if (board.doCandiesMatch (cellPos, top1) && board.doCandiesMatch(cellPos, top2)) {
            return true;
        }
        
        return false;
    }
}