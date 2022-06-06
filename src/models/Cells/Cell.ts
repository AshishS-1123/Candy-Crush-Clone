import { CellType, Colors } from "~/setup";

export interface Cell {
    // Represents type of cell.
    cellType: CellType;

    // Represents color of candy in cell.
    colorType: Colors;

    // Represents image to draw on canvas.
    image: HTMLImageElement;

    // Whether the cell should be rendered on the canvas.
    isVisible: boolean;
}