import { CellType, Colors } from '~/setup';
import { Cell } from './Cell';
import { Global } from '~/EventBus';

export class StripedCell implements Cell {
    cellType: CellType;
    colorType: Colors;
    image: HTMLImageElement;
    isVisible: boolean;

    constructor(color: Colors, isVertical: boolean) {
        this.cellType = isVertical ? 'STRIPED_V' : 'STRIPED_H';
        this.colorType = color;
        this.isVisible = true;

        this.image = isVertical ? Global.spritePool.getStripedVertical(color) : Global.spritePool.getStripedHorizontal(color);
    }

    copy :() => Cell = () => {
        return new StripedCell(this.colorType, this.cellType === 'STRIPED_V');
    }
}
