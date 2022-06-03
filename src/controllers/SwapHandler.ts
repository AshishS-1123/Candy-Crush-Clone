import { Vector } from 'setup';
import { EventBus } from '~/EventBus';
import { Board } from '~/models/Board';
import { CanvasView } from '~/views/CanvasView';

// Based on events, swap candies, check if they match and destroy them.
export class SwapHandler {
    private canvasView: CanvasView;
    private board: Board;
    private firstSelectedCell: Vector | null;
    private secondSelectedCell: Vector | null;

    constructor(canvasView: CanvasView, board: Board) {
        this.canvasView = canvasView;
        this.board = board;

        this.firstSelectedCell = null;
        this.secondSelectedCell = null;

        EventBus.cellClickEvent.add (this.handleCellClicked.bind (this));
    }

    handleCellClicked (pos: Vector): void {
        const { x: pos_x, y: pos_y } = pos;

        console.log("Cell clicked ", {pos_x, pos_y, first: this.firstSelectedCell, second: this.secondSelectedCell});
        
        if (!this.firstSelectedCell) {
            this.firstSelectedCell = {x: pos_x, y: pos_y};
            console.log("Set first cell");
        } else if (!this.secondSelectedCell) {
            console.log("Set second cell");
            
            this.secondSelectedCell = {x: pos_x, y: pos_y};

            // Swap the firstSelectedCell and secondSelectedCell.
            const temp = this.board.cells[this.firstSelectedCell.x][this.firstSelectedCell.y];
            this.board.cells[this.firstSelectedCell.x][this.firstSelectedCell.y] = this.board.cells[this.secondSelectedCell.x][this.secondSelectedCell.y];
            this.board.cells[this.secondSelectedCell.x][this.secondSelectedCell.y] = temp;

            // Render this on canvas.
            EventBus.renderSwapAnimation.emit ({
                first: {
                    pos: this.firstSelectedCell || {x: -1, y: -1},
                    img: this.board.getImageAtCell (this.firstSelectedCell)
                },
                second: {
                    pos: this.secondSelectedCell || {x: -1, y: -1},
                    img: this.board.getImageAtCell (this.secondSelectedCell)
                },
            });
            // this.canvasView.drawBoard(this.board);

            // Reset selection after swapping.
            this.firstSelectedCell = null;
            this.secondSelectedCell = null;
        }

    }
}