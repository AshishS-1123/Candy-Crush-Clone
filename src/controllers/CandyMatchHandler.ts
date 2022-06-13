import { EventBus } from "~/EventBus";
import { Board } from "~/models/Board";
import { MultiColoredCell } from "~/models/Cells/MultiColoredCell";
import { HardCell } from  '~/models/Cells/HardCell';
import { Vector, delay, ANIMATION_DURATION, ANIMATION_THROTTLE, ROWS, COLUMNS } from "~/setup";
import { checkSpecialCandy } from "~/utils/specialCandyHandler";
import { StripedCell } from "~/models/Cells/StripedCell";

// Called by SwapHandler to match and destroy candies
export class CandyMatchHandler {
    constructor() {
        EventBus.swapCellRequest.add (this.handleSwapRequest.bind(this));
        EventBus.destroyCandyMatches.add (this.handleDestroyCandyMatches.bind(this));
    }

    handleSwapRequest (params: {first: Vector, second: Vector, board: Board}) {

        // Check if first or second candy matched.
        if (this.checkIfCandiesMatch(params.board, params.first) || this.checkIfCandiesMatch(params.board, params.second)) {
            this.handleCandyMatch(params.board, params.first);
            this.handleCandyMatch(params.board, params.second);
            return;
        }

        delay(ANIMATION_THROTTLE).then (() => {
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
        })

        delay(ANIMATION_DURATION).then (() => {
            // Update the board with this data.
            const temp = params.board.cells[params.first.x][params.first.y];
            params.board.cells[params.first.x][params.first.y] = params.board.cells[params.second.x][params.second.y];
            params.board.cells[params.second.x][params.second.y] = temp;
    
            // Update global board class.
            EventBus.updateBoard.emit (params.board);
        })

        
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

    handleCandyMatch (board: Board, position: Vector) {
        const matchData = checkSpecialCandy (board, position);

        // Replace the current candy with the new candy.
        switch(matchData.newCandyType) {
            case 'SIMPLE': break;
            case 'STRIPED_H':
                board.cells[position.x][position.y] = new StripedCell(matchData.newCandyColor, false);
                break;
            case 'STRIPED_V':
                board.cells[position.x][position.y] = new StripedCell(matchData.newCandyColor, true);
                break;
            case 'HARD':
                board.cells[position.x][position.y] = new HardCell(matchData.newCandyColor);
                break;
            case 'MULTICOLORED': 
                board.cells[position.x][position.y] = new MultiColoredCell();
                console.log(board.cells[position.x][position.y]);
                
                break;
        }
        
        // Update the board and re-render.
        EventBus.updateBoard.emit (board);

        EventBus.renderBoard.emit (board);

        // Delete the other candies.
        EventBus.destroyCandies.emit ({
            board,
            candies: matchData.destroyCandies
        });
    }

    handleDestroyCandyMatches(board: Board) {
        for (let i = 0; i < ROWS; ++i) {
            for (let j = 0; j < COLUMNS; ++j) {
                const pos = {x: i, y: j};
                if (this.checkIfCandiesMatch(board, pos)) {
                    this.handleCandyMatch(board, pos);
                }
            }
        }
    }
}