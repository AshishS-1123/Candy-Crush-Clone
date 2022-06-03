import { EventBus } from "~/EventBus";
import { CellPos, Vector } from "~/setup";
import { CELL_WIDTH, CELL_PADDING, CELL_HEIGHT } from "~/setup";
import TWEEN from "tween.ts"

function drawCellAtPos (context: CanvasRenderingContext2D | null, x: number, y: number, img: HTMLImageElement): void {
    const width = CELL_WIDTH + 2 * CELL_PADDING;
    const height = CELL_HEIGHT + 2 * CELL_PADDING;

    context?.clearRect(x, y, width - 5, height - 5);
    context?.drawImage(
        img, 
        x, 
        y, 
        width,
        height
    );
}

export class SwapAnimationView {
    private context: CanvasRenderingContext2D | null;
    private posTracker: {first: Vector, second: Vector};
    private images: {first: HTMLImageElement, second: HTMLImageElement};

    constructor (context: CanvasRenderingContext2D | null) {
        this.context = context;
        this.posTracker = {first: {x: -1, y: -1}, second: {x: -1, y: -1}};
        this.images = {first: new Image(), second: new Image()};

        EventBus.renderSwapAnimation.add (this.drawSwapAnimation.bind (this));
    }

    drawSwapAnimation (params: {first: CellPos, second: CellPos}): void {
        console.log(params.first.img, params.second.img);
        
        const {first, second} = params;

        this.context?.resetTransform();
        this.context?.translate(CELL_PADDING, CELL_PADDING);

        this.posTracker = {
            first: {
                x: (CELL_PADDING + CELL_HEIGHT) * second.pos.x,
                y: (CELL_PADDING + CELL_HEIGHT) * second.pos.y
            },
            second: {
                x: (CELL_PADDING + CELL_HEIGHT) * first.pos.x,
                y: (CELL_PADDING + CELL_HEIGHT) * first.pos.y
            }
        }

        this.images = {
            first: second.img,
            second: first.img
        }

        const endPos = {
            first: {...this.posTracker.second},
            second: {...this.posTracker.first}
        }

        const tween = new TWEEN.Tween (this.posTracker)
            .to (endPos, 1000)
            .easing (TWEEN.Easing.Linear.None)
            .onUpdate (this.drawBallsUsingTween.bind (this))
            .start();

        let animationRunning = true;
        let currentTime = 0;

        while (animationRunning) {
            tween.onComplete(() => {
                animationRunning = false;
            });

            TWEEN.update(currentTime);
            currentTime += 1;
        }        
    }

    drawBallsUsingTween () {
        const firstPos = this.posTracker.first;
        const secondPos = this.posTracker.second;
        
        drawCellAtPos (
            this.context,
            firstPos.y,
            firstPos.x,
            this.images.first
        );
        
        drawCellAtPos (
            this.context,
            secondPos.y,
            secondPos.x,
            this.images.second
        );
    }
}