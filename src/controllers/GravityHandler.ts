import { Board } from 'models/Board';
import { EventBus } from '~/EventBus';
import { COLUMNS, ROWS } from '~/setup';

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

    applyGravityToBoard () {
        console.log("Moving candies down");
        
        let didBoardChange = false;
        let maxCount = 1;

        do {
            maxCount -= 1;
            // Set the flag to false for each iteration.
            didBoardChange = false;

            // First handle empty cells in board.
            for (let i = 0; i < ROWS; ++i) {
                for (let j = 0; j < COLUMNS; ++j) {
                    // Check if there exists candy below this cell.
                    if (i == ROWS - 1) continue;

                    // Check if cell below this is empty.
                    if (this.board.getColorAtCell({x: i + 1, y: j}) === 'EMPTY') {
                        console.log("Found empty at", i, j);
                        
                        // If cell below is vacant, move this candy down.
                        this.board.cells[i + 1][j] = this.board.cells[i][j].copy();
                        console.log("Mark next as ", this.board.getColorAtCell({x:i+1,y:j}));
                        

                        didBoardChange = true;
                    }
                }
            }

            // If some cells in first row are empty, fill them using source cells.
            for (let i = 0; i < COLUMNS; ++i) {
                // If this cell is empty.
                if (this.board.getColorAtCell({x: 0, y: i}) == 'EMPTY') {
                    console.log("Fill source", 0, i);
                    
                    this.board.cells[0][i] = this.board.sourceCells[i].generateRandomCandy();
                }
            }

            // Update the board object.
            EventBus.updateBoard.emit (this.board);

            // Render on canvas.
            EventBus.renderBoard.emit (this.board);
        } while (didBoardChange && maxCount);
    }
}