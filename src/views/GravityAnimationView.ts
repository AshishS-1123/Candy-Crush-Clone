import { EventBus } from "~/EventBus";
import { ANIMATION_DURATION, CellPos, Vector } from "~/setup";
import { CELL_WIDTH, CELL_PADDING, CELL_HEIGHT } from "~/setup";
import TWEEN from "tween.ts"

function drawCellAtPos (context: CanvasRenderingContext2D | null, x: number, y: number, img: HTMLImageElement): void {
    const width = CELL_WIDTH + 2 * CELL_PADDING;
    const height = CELL_HEIGHT + 2 * CELL_PADDING;

    context?.clearRect(x + 5, y, width - 5, height - 5);
    context?.drawImage(
        img, 
        x, 
        y, 
        width,
        height
    );
}

type GravityData = {
    images: HTMLImageElement[],
    startPoint: Vector,
}

export class GravityAnimationView {
    // Context for rendering.
    private context: CanvasRenderingContext2D | null;
    
    // For tween animations.
    private tweenValue = {x: 0, y: 0};
    private tween = new TWEEN.Tween(this.tweenValue);
    private tweenDone: boolean = true;

    // List of all cells modified.
    private cellsMoved: GravityData = {images: [], startPoint: {x: 0, y: 0}};

    constructor (context: CanvasRenderingContext2D | null) {
        this.context = context;

        EventBus.renderGravityAnimation.add (this.drawGravityAnimation.bind (this));
    }

    drawGravityAnimation (cells: GravityData) {

        this.context?.resetTransform();
        this.context?.translate(CELL_PADDING, CELL_PADDING);

        this.cellsMoved = cells;

        this.tweenValue = {
            x: 0, 
            y: 0,
        };

        const endValue = {
            x: 0,
            y: cells.images.length - cells.startPoint.x
        };

        this.tween = new TWEEN.Tween (this.tweenValue)
            .to (endValue, ANIMATION_DURATION)
            .easing (TWEEN.Easing.Linear.None)
            .onComplete(this.setTweenDone.bind(this))
            .start();
        this.tweenDone = false;
        

        requestAnimationFrame(this.animateGravity.bind(this));
    }

    setTweenDone() {
        this.tweenDone = true;
    }

    animateGravity(timeStamp: number) {
        TWEEN.update(timeStamp);
        
        this.cellsMoved.images.forEach((img, idx) => {
            drawCellAtPos(
                this.context,
                this.cellsMoved.startPoint.y * (CELL_WIDTH + CELL_PADDING),
                (this.tweenValue.y - idx + this.cellsMoved.startPoint.x - 1) * (CELL_HEIGHT + CELL_PADDING ),// + this.cellsMoved.startPoint.y,
                img
            )
        })
        

        if (!this.tweenDone)
            requestAnimationFrame(this.animateGravity.bind(this));
    }
}
