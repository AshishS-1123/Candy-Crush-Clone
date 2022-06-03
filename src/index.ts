import { EventHandler } from "./controllers/EventHandler";
import { SwapHandler } from "./controllers/SwapHandler";
import { Board } from "./models/Board";
import { CanvasView } from "./views/CanvasView";

function delay(delayInms: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delayInms);
    });
}

async function main(): Promise<void> {
    const baseCanvas = new CanvasView('playField');
    const board = new Board();

    const eventHandler =  new EventHandler(baseCanvas);
    const swapHandler = new SwapHandler(board);

    await delay(500);
    baseCanvas.drawBoard(board);
}

main ();