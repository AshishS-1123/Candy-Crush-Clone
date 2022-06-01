import { CELL_HEIGHT, CELL_WIDTH } from "~/setup";

export class CellItem {
    image: HTMLImageElement = new Image();

    constructor() {
        this.image.width = CELL_WIDTH;
        this.image.height = CELL_HEIGHT;
    }
}