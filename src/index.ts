import { CandyMatchHandler } from "./controllers/CandyMatchHandler";
import { EventHandler } from "./controllers/EventHandler";
import { SwapHandler } from "./controllers/SwapHandler";
import { Board } from "./models/Board";
import { CanvasView } from "./views/CanvasView";
import { delay } from './setup';
import { CandyDestroyer } from "./controllers/CandyDestroyer";
import { GravityHandler } from "./controllers/GravityHandler";
import { EventBus } from "./EventBus";

async function main(): Promise<void> {
    const baseCanvas = new CanvasView('playField');
    const board = new Board();

    const eventHandler =  new EventHandler(baseCanvas);
    const swapHandler = new SwapHandler(board);
    const candyMatchHandler = new CandyMatchHandler();
    const candyDestroyer = new CandyDestroyer();
    const gravityHandler = new GravityHandler(board);

    // TODO: For degugging gravity. Remove later.
    // await delay(1000);
    document.addEventListener('keydown', (e) => {
        if (e.key == 'e') {
            EventBus.applyGravity.emit();
        }
        
    })
    // EventBus.applyGravity.emit();

    await delay(500);
    baseCanvas.drawBoard(board);
}

main ();