import { EventBus } from "~/EventBus";
import { Board } from "~/models/Board";
import { MultiColoredCell } from "~/models/Cells/MultiColoredCell";
import { COLUMNS, delay, ROWS, Vector } from "~/setup";
import { checkSpecialCandy } from "~/utils/specialCandyHandler";

enum MatchType {
    HORIZONTAL_LEFT,
    HORIZONTAL_MIDDLE,
    HORIZONTAL_RIGHT,

    VERTICAL_TOP,
    VERTICAL_MIDDLE,
    VERTICAL_BOTTOM,

    NONE,
}

// Called by SwapHandler to match and destroy candies
export class CandyMatchHandler {
    constructor() {
        EventBus.swapCellRequest.add (this.handleSwapRequest.bind(this));
    }

    handleSwapRequest (params: {first: Vector, second: Vector, board: Board}) {

        // Check if first or second candy matched.
        const matchTypeFirst = this.checkIfCandiesMatch(params.board, params.first);
        const matchTypeSecond = this.checkIfCandiesMatch(params.board, params.second);

        if (matchTypeFirst != MatchType.NONE) {
            this.handleCandyMatch (params.board, params.first, matchTypeFirst);
            return;
        }

        if (matchTypeSecond != MatchType.NONE) {
            this.handleCandyMatch (params.board, params.second, matchTypeSecond);
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
    checkIfCandiesMatch (board: Board, cellPos: Vector): MatchType {
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
            return MatchType.HORIZONTAL_LEFT;
        }

        // Check if horizontal match with this cell in middle.
        if (board.doCandiesMatch (cellPos, left1) && board.doCandiesMatch(cellPos, right1)) {
            return MatchType.HORIZONTAL_MIDDLE;
        }

        // Check if horizontal match with this cell in right.
        if (board.doCandiesMatch (cellPos, left1) && board.doCandiesMatch(cellPos, left2)) {
            return MatchType.HORIZONTAL_RIGHT;
        }
        
        // Check if vertical match with this cell in top.
        if (board.doCandiesMatch (cellPos, bottom1) && board.doCandiesMatch(cellPos, bottom2)) {
            return MatchType.VERTICAL_TOP;
        }

        // Check if vertical match with this cell in middle.
        if (board.doCandiesMatch (cellPos, top1) && board.doCandiesMatch(cellPos, bottom1)) {
            return MatchType.VERTICAL_MIDDLE;
        }
        
        // Check if vertical match with this cell in bottom.
        if (board.doCandiesMatch (cellPos, top1) && board.doCandiesMatch(cellPos, top2)) {
            return MatchType.VERTICAL_BOTTOM;
        }
        
        return MatchType.NONE;
    }

    handleCandyMatch (board: Board, position: Vector, type: MatchType) {
        const matchData = checkSpecialCandy (board, position);
        console.log(matchData);

        // Replace the current candy with the new candy.
        switch(matchData.newCandyType) {
            case 'SIMPLE': break;
            case 'STRIPED_H': break;
            case 'STRIPED_V': break;
            case 'HARD': break;
            case 'MULTICOLORED': 
                board.cells[position.x][position.y] = new MultiColoredCell();
                console.log("Set to multicolored");
                
                break;
        }

        // Update the board and re-render.
        EventBus.updateBoard.emit (board);

        // Delete the other candies.
        EventBus.destroyCandies.emit ({
            board,
            candies: matchData.destroyCandies
        });
        
    }
}