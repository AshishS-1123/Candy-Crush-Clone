import { Board } from "~/models/Board";
import { BOARD_HEIGHT, BOARD_WIDTH, CELL_HEIGHT, CELL_PADDING, CELL_WIDTH, COLUMNS, ROWS } from "~/setup";

export class CanvasView {
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;

    constructor(canvasName: string) {
        this.canvas = document.getElementById(canvasName) as HTMLCanvasElement;
        this.canvas.width = BOARD_WIDTH;
        this.canvas.height = BOARD_HEIGHT;
        this.context = this.canvas.getContext('2d');
    }

    clearCanvas() {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    async drawBoard(board: Board) {
        this.clearCanvas();
        this.context?.translate(CELL_PADDING, CELL_PADDING);

        // Draw all the cells.
        for(let i = 0; i < COLUMNS; ++i) {
            for (let j = 0; j < ROWS; ++j) {
                
                const x = (CELL_PADDING + CELL_WIDTH) * i;
                const y = (CELL_PADDING + CELL_HEIGHT) * j;

                this.context?.drawImage(
                    board.cells[0][0].cellItem.image, 
                    x, 
                    y, 
                    CELL_WIDTH + 2 * CELL_PADDING, 
                    CELL_HEIGHT + 2 * CELL_PADDING
                );                
            }
        }
    }
}