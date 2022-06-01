import { Colors } from '~/setup';
import { SimpleCandy } from '../CellItems/Candies/SimpleCandy';
import { CellItem } from '../CellItems/CellItem';
import { Cell } from './Cell';

export class SimpleCell implements Cell {
    cellItem: CellItem;
    isVisible: boolean;

    constructor(color: Colors) {
        // Initially, all cells will be empty. Then gravity will take effect 
        // pull candies down.
        this.cellItem = new SimpleCandy(color);
        this.isVisible = true;
    }

    destroyCellItem: () => void = () => {

    }

    replaceCellItem: (newItem: CellItem) => CellItem = (newItem: CellItem) => {
        const tempCellItem = this.cellItem;
        this.cellItem = newItem;
        
        return tempCellItem;
    }
}
