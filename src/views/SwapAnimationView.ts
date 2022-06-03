import { EventBus } from "~/EventBus";
import { CellPos } from "~/setup";
import { CELL_WIDTH, CELL_PADDING, CELL_HEIGHT } from "~/setup";

function drawCellAtPos (context: CanvasRenderingContext2D | null, x: number, y: number, img: HTMLImageElement): void {
    const width = CELL_WIDTH + 2 * CELL_PADDING;
    const height = CELL_HEIGHT + 2 * CELL_PADDING;

    context?.clearRect(x, y, width - 5, height - 5);
    context?.drawImage(
        img, 
        x, 
        y, 
        width,
        height
    );
}

export class SwapAnimationView {
    private context: CanvasRenderingContext2D | null;

    constructor (context: CanvasRenderingContext2D | null) {
        this.context = context;

        EventBus.renderSwapAnimation.add (this.drawSwapAnimation.bind (this));
    }

    drawSwapAnimation (params: {first: CellPos, second: CellPos}): void {
        const {first, second} = params;

        this.context?.resetTransform();
        this.context?.translate(CELL_PADDING, CELL_PADDING);
        
        // Draw first cell.
        drawCellAtPos(
            this.context,
            (CELL_PADDING + CELL_HEIGHT) * first.pos.y,
            (CELL_PADDING + CELL_WIDTH) * first.pos.x,
            first.img
        );

        // Draw second cell.
        drawCellAtPos(
            this.context,
            (CELL_PADDING + CELL_HEIGHT) * second.pos.y,
            (CELL_PADDING + CELL_WIDTH) * second.pos.x,
            second.img
        );
    }
}