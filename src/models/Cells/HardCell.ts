import { CellType, Colors } from '~/setup';
import { Cell } from './Cell';
import { Global } from '~/EventBus';

export class HardCell implements Cell {
    cellType: CellType;
    colorType: Colors;
    image: HTMLImageElement;
    isVisible: boolean;

    constructor(color: Colors) {
        this.cellType = 'HARD';
        this.colorType = color;
        this.isVisible = true;

        // this.image.src = assignImageFromColor(color);
        this.image = Global.spritePool.getHardCandy(color);
    }

    copy :() => Cell = () => {
        return new HardCell(this.colorType);
    }
}
