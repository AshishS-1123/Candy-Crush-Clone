import { EventBus } from "~/EventBus";
import { ANIMATION_DURATION, COLUMNS, delay, ROWS, Vector } from "~/setup";
import { Board } from "~/models/Board";
import { SimpleCell } from "~/models/Cells/SimpleCell";

export class CandyDestroyer {
    constructor() {
        EventBus.destroyCandies.add (this.handleDestroyCandies.bind(this));
    }

    async handleDestroyCandies(params: {board: Board, candies: Vector[]}) {
        let board = params.board;
        const candies = params.candies;
        
        candies.forEach(candy => {
            // board.cells[candy.x][candy.y] = new SimpleCell('EMPTY');
            board = this.destroyCandyUsingType(board, candy);
        });

        // Update the global board object.
        EventBus.updateBoard.emit (board);
        // Redraw the canvas.
        EventBus.renderBoard.emit (board);
        await delay(ANIMATION_DURATION / 2);

        // Apply gravity to board.
        EventBus.applyGravity.emit ();
    }

    // Destroy candy using type of candy and return new board.
    destroyCandyUsingType(board: Board, pos: Vector): Board {
        switch (board.getTypeAtCell(pos)) {
            case 'SIMPLE': 
                // For simple, just replace the given candy with empty candy.
                board.cells[pos.x][pos.y] = new SimpleCell('EMPTY');
                break;
            case 'HARD':
                // For hard candy, destroy all in 3x3 area.
                board.cells[pos.x][pos.y] = new SimpleCell('EMPTY');
                for (let i = -1; i < 2; ++i) {
                    for (let j = -1; j < 2; ++j) {
                        // board.cells[pos.x + i][pos.y + j] = new SimpleCell('EMPTY');
                        if (i === 0 && j === 0) continue;
                        board = this.destroyCandyUsingType(board, {x: pos.x + i, y: pos.y + i});
                    }
                }
                break;
            case 'STRIPED_H':
                // for horizontal striped, destroy a horizontal strip.
                for (let i = 0; i < COLUMNS; ++i) {
                    board.cells[pos.x][i] = new SimpleCell('EMPTY');
                }
                break;
            case 'STRIPED_V':
                // for vertical striped, destroy a vertical strip.
                for (let i = 0; i < ROWS; ++i) {
                    board.cells[i][pos.y] = new SimpleCell('EMPTY');
                }
                break;
            // We dont have condition for multicolored as we dont handle it with three in line.
            default: break;
        }

        return board;
    }
}