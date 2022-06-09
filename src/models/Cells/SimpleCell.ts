import { CellType, Colors, delay } from '~/setup';
import { Cell } from './Cell';
import { Global } from '~/EventBus';

export class SimpleCell implements Cell {
    cellType: CellType;
    colorType: Colors;
    image: HTMLImageElement;
    isVisible: boolean;

    constructor(color: Colors) {
        this.cellType = 'SIMPLE';
        this.colorType = color;
        this.isVisible = true;

        // this.image.src = assignImageFromColor(color);
        this.image = Global.spritePool.getSimpleCandy(color);
    }
}
