import { Cell } from './Cell';
import { CellType, Colors } from "~/setup";
import EMPTY_CELL from '~images/EmptyCell.png';
import { selectRandomString } from '~/utils/random';
import { SimpleCell } from './SimpleCell';

export class CandySourceCell implements Cell {
    cellType: CellType;
    colorType: Colors;
    image: HTMLImageElement = new Image();
    isVisible: boolean;

    private previousGeneratedColor: string = 'EMPTY';

    constructor() {
        this.cellType = 'HIDDEN';
        this.colorType = 'EMPTY';
        this.isVisible = true;
        this.image.src = EMPTY_CELL;
    }

    generateRandomCandy () {
        const choices = ['RED', 'ORANGE', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE']
        const exceptions = [this.previousGeneratedColor];

        const newCell = new SimpleCell(selectRandomString(choices, exceptions) as Colors);
        this.previousGeneratedColor = newCell.colorType;

        return newCell;
    }

    copy :() => Cell = () => {
        return new CandySourceCell();
    }
}
