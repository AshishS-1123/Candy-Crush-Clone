import { CellItem } from "../CellItems/CellItem";

export interface Cell {
    // Represents a cell from the board. If no item is present, put null here.
    cellItem: CellItem | null;

    // Whether the cell should be rendered on the canvas.
    isVisible: boolean;

    // method to call when destroying the cell item.
    // implement score calculating here. But dont actually delete items here.
    destroyCellItem: () => void;

    // use this method in GravityHandler for swapping the current element with another.
    // replaces the current item with given item and returns old item.
    replaceCellItem: (newItem: CellItem) => CellItem;
}