import { Board } from 'models/Board';
import { EventBus } from '~/EventBus';
import { SimpleCell } from '~/models/Cells/SimpleCell';
import { COLUMNS, delay, ROWS, Vector } from '~/setup';

// After some candies are destroyed, this class will cause candies to move down.
export class GravityHandler {
    private board: Board;

    constructor(board: Board) {
        this.board = board;

        EventBus.applyGravity.add (this.applyGravityToBoard.bind (this));
        EventBus.updateBoard.add (this.handleAddBoard.bind (this));
    }

    handleAddBoard (board: Board) {
        this.board = board;
    }

    async applyGravityToBoard () {

        while(true) {
            let cellsModified = false;

            // Fill all empty cells.
            for (let i = 0; i < ROWS - 1; ++i) {
                for (let j = 0; j < COLUMNS; ++j) {
                    if (this.board.getColorAtCell({x: i + 1, y: j}) == 'EMPTY') {
                        this.board.cells[i+1][j] = this.board.cells[i][j];
                        this.board.cells[i][j] = new SimpleCell('EMPTY');

                        cellsModified = true;
                    }
                }
            }
            
            // Fill first row using source cells.
            for (let i = 0; i < COLUMNS; ++i) {
                if (this.board.getColorAtCell({x: 0, y: i}) == 'EMPTY') {
                    this.board.cells[0][i] = this.board.sourceCells[i].generateRandomCandy();
                }
            }

            if (cellsModified === false) {
                if (checkBoardPostGravity(this.board)) {
                    EventBus.destroyCandyMatches.emit(this.board);
                } else {
                    break;
                }
            }

            EventBus.renderBoard.emit (this.board);
            await delay(150);
        }

        // Check board for matching candies.
        EventBus.destroyCandyMatches.emit(this.board);

        // Update the board and re-render.
        EventBus.updateBoard.emit (this.board);

        // Render the board.
        EventBus.renderBoard.emit (this.board);

    }

}

function checkBoardPostGravity(board: Board) {
    // Loops through all cells to check if they match.
    for (let i = 0; i < ROWS; ++i) {
        for (let j = 0; j < COLUMNS; ++j) {
            if (checkIfCandiesMatch(board, {x: i, y: j})) {
                return true;
            }
        }
    }

    return false;
}

function checkIfCandiesMatch (board: Board, cellPos: Vector): boolean {
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

// Temporarily commenting this class. Will be implementing this later when developing animations.
// For now, use the simple version above.
/*
export class GravityHandler {
    private board: Board;

    constructor(board: Board) {
        this.board = board;

        EventBus.applyGravity.add (this.applyGravityToBoard.bind (this));
        EventBus.updateBoard.add (this.handleAddBoard.bind (this));
    }

    handleAddBoard (board: Board) {
        this.board = board;
    }

    async applyGravityToBoard () {
        console.log("Moving candies down");
        await delay(1000);
        const col = 8;

        for (let i = 0; i < COLUMNS; ++i) {
            if (i == col) console.log("Scanning col", i);
            
            // Pointers to store start and end point of empty cells.
            let emptyStart = 0;
            let emptyEnd = 0;
            let rowNo = 0;

            // Find start point of empty cells.
            while (this.board.getColorAtCell({x: rowNo, y: i}) !== 'EMPTY') {
                if (i == col) console.log("  Not empty at", rowNo);
                ++rowNo;

                if (rowNo >= ROWS) break;
            }

            emptyStart = rowNo;
            if (i == col) console.log("Set empty start", emptyStart);
            

            // Find end point of empty cells.
            while (this.board.getColorAtCell({x: rowNo, y: i}) === 'EMPTY') {
                if (i == col) console.log("  Still empty at", rowNo);
                ++rowNo;

                if (rowNo >= ROWS) break;
            }

            emptyEnd = rowNo - 1;
            if (i == col) console.log("Set empty end ", emptyEnd);

            // If there are no empty cells.
            if (emptyStart == ROWS && emptyEnd == ROWS) continue;

            // Based on the start and end positions, create array of new candies to slide down.
            const slideCandies: HTMLImageElement[] = [];
            
            // Now generate as many random candies as there are empty cells and add to list.
            for (let j = emptyStart; j < emptyEnd + 1; ++j) {
                if (i == col) console.log("Empty cell :: Random");
                slideCandies.push (this.board.sourceCells[i].generateRandomCandy().image);
            }

            // First add candies before empty block to this list.
            for (let j = 0; j < emptyStart; ++j) {
                const pos = {x: j, y: i};
                if (i == col) console.log("Empty cell", pos, this.board.getImageAtCell(pos));
                slideCandies.push(this.board.getImageAtCell(pos));
            }

            console.log("Candies", slideCandies);
            console.log();

            // Emit signal to apply gravity.
            EventBus.renderGravityAnimation.emit({
                images: slideCandies.reverse(),
                startPoint: {x: emptyStart, y: i}
            });

            // Wait for animaition to complete.
            await delay(600);
        }
    }
}
*/
