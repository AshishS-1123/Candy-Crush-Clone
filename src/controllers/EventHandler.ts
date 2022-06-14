import { EventBus } from "~/EventBus";
import { CELL_PADDING, CELL_WIDTH, CELL_HEIGHT, COLUMNS, ROWS } from "~/setup";
import { CanvasView } from "~/views/CanvasView";

const THRESH = CELL_WIDTH;

type CallbackFunction = (pos_x: number, pos_y: number) => void;

export class EventHandler {
    canvasView: CanvasView;
    cellClickCallback: CallbackFunction | null;

    constructor(canvasView: CanvasView) {
        this.canvasView = canvasView;
        this.cellClickCallback = null;
        
        // Add event listeners
        this.canvasView.canvas.addEventListener('click', this.handleButtonClick);
        EventBus.gameOver.add(() => {
            this.canvasView.canvas.removeEventListener('click', this.handleButtonClick);
        })
    }

    handleButtonClick: (event: MouseEvent) => void = (event) => {
        // Convert coordinates to local frame.
        const rect = this.canvasView.canvas.getBoundingClientRect();
        const abs_coord_x = event.x - rect.left - CELL_PADDING;
        const abs_coord_y = event.y - rect.top - CELL_PADDING;

        // Find row and column number for click event.
        const pos_x = Math.floor( abs_coord_x / (CELL_WIDTH + CELL_PADDING));
        const pos_y = Math.floor( abs_coord_y / (CELL_HEIGHT + CELL_PADDING));

        // Check that cell is within rows and columns present.
        if (pos_x < 0 || pos_x >= COLUMNS || pos_y < 0 || pos_y >= ROWS) return;

        // Distance of click from center line of candy must be less than threshold.
        const cell_coord_x = CELL_PADDING / 2 + (2 * pos_x + 1) * (CELL_WIDTH + CELL_PADDING) / 2;
        const cell_coord_y = CELL_PADDING / 2 + (2 * pos_y + 1) * (CELL_HEIGHT + CELL_PADDING) / 2;
        
        if (
            Math.abs(cell_coord_x - abs_coord_x) > THRESH ||
            Math.abs(cell_coord_y - abs_coord_y) > THRESH
        ) {
            return;
        } 

        // If everything is ok, then trigger the event in canvas.
        EventBus.cellClickEvent.emit ({x: pos_y, y: pos_x});
    }
}