import { EventBus } from "~/EventBus";
import { CellPos, Vector } from "~/setup";
import { CELL_WIDTH, CELL_PADDING, CELL_HEIGHT } from "~/setup";
import TWEEN from "tween.ts"

function drawCellAtPos (context: CanvasRenderingContext2D | null, x: number, y: number, img: HTMLImageElement): void {
    const width = CELL_WIDTH + 2 * CELL_PADDING;
    const height = CELL_HEIGHT + 2 * CELL_PADDING;

    context?.drawImage(
        img, 
        x, 
        y, 
        width,
        height
    );
}

export class SwapAnimationView {
    // Context for rendering.
    private context: CanvasRenderingContext2D | null;
    
    // For tween animations.
    private tweenValue = {x: 0, y: 0};
    private initialPos: {first: Vector, second: Vector} = {first: {x:0,y:0}, second: {x:0,y:0}};
    private tween = new TWEEN.Tween(this.tweenValue);

    // For images to render.
    private images: {first: HTMLImageElement, second: HTMLImageElement};

    constructor (context: CanvasRenderingContext2D | null) {
        this.context = context;
        this.images = {first: new Image(), second: new Image()};

        EventBus.renderSwapAnimation.add (this.drawSwapAnimation.bind (this));
    }

    drawSwapAnimation (params: {first: CellPos, second: CellPos}) {
        const {first, second} = params;

        this.context?.resetTransform();
        this.context?.translate(CELL_PADDING, CELL_PADDING);

        this.images = {
            first: first.img,
            second: second.img
        }

        this.initialPos = {
            first: {x: first.pos.x * (CELL_PADDING + CELL_WIDTH), y: first.pos.y * (CELL_PADDING + CELL_HEIGHT)},
            second: {x: second.pos.x * (CELL_PADDING + CELL_WIDTH), y: second.pos.y * (CELL_PADDING + CELL_HEIGHT)},
        };

        const endValue = {
            x: first.pos.x === second.pos.x ? 0 : 1,
            y: first.pos.y === second.pos.y ? 0 : 1,
        }

        this.tween = new TWEEN.Tween (this.tweenValue)
            .to (endValue, 500)
            .easing (TWEEN.Easing.Quadratic.InOut)
            .start();

        requestAnimationFrame(this.animate.bind(this));
    }

    animate(timeStamp: number) {
        TWEEN.update(timeStamp);

        const fx = this.tweenValue.x * (this.initialPos.second.x - this.initialPos.first.x) + this.initialPos.first.x;
        const fy = this.tweenValue.y * (this.initialPos.second.y - this.initialPos.first.y) + this.initialPos.first.y;

        const sx = this.tweenValue.x * (this.initialPos.first.x - this.initialPos.second.x) + this.initialPos.second.x;
        const sy = this.tweenValue.y * (this.initialPos.first.y - this.initialPos.second.y) + this.initialPos.second.y;
        
        const rectX = Math.min(this.initialPos.first.y, this.initialPos.second.y);
        const rectY = Math.min(this.initialPos.first.x, this.initialPos.second.x);
        const rectW = Math.abs(this.initialPos.first.y - this.initialPos.second.y) + CELL_HEIGHT + CELL_PADDING + 5;
        const rectH = Math.abs(this.initialPos.first.x - this.initialPos.second.x) + CELL_WIDTH + CELL_PADDING + 5;
        this.context?.clearRect(rectX, rectY, rectW, rectH);
        
        // Draw first cell.
        drawCellAtPos (
            this.context,
            fy,
            fx,
            this.images.first
        );

        // // Draw second cell.
        drawCellAtPos (
            this.context,
            sy,
            sx,
            this.images.second
        );

        // Break the animation if tweening is done.
        if (this.tweenValue.x == 1 || this.tweenValue.y == 1) {
            this.tweenValue = {x: 0, y: 0};
            return;
        }

        requestAnimationFrame(this.animate.bind(this));
    }

}