import { SimpleCandy } from '../CellItems/Candies/SimpleCandy';
import { CellItem } from '../CellItems/CellItem';
import { Cell } from './Cell';

export class CandySourceCell implements Cell {
    cellItem: CellItem;
    isVisible: boolean;

    constructor() {
        // These cells will only produce candies and will not be visible.
        this.cellItem = new SimpleCandy('EMPTY');
        this.isVisible = false;
    }

    destroyCellItem: () => void = () => {

    }

    replaceCellItem: (newItem: CellItem) => CellItem = (newItem: CellItem) => {
        const tempCellItem = this.cellItem;
        this.cellItem = newItem;
        
        return tempCellItem;
    }
}
