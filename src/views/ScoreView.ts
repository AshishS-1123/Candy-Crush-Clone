import { EventBus } from "~/EventBus";
import { MOVES } from "~/setup";

export class ScoreView {
    private scoreElement: HTMLDivElement;
    private movesElement: HTMLDivElement;
    private score: number = 0;
    private moves: number = MOVES;

    constructor(scorePanel: string, movesPanel: string) {
        this.scoreElement = document.getElementById(scorePanel) as HTMLDivElement;
        this.movesElement = document.getElementById(movesPanel) as HTMLDivElement;

        this.printScoreAndMoves();

        EventBus.incrementScore.add (this.handleScoreInc.bind(this));
        EventBus.decrementMoves.add (this.handleMoves.bind(this));
        EventBus.gameOver.add (this.handleGameOver.bind(this));
    }

    handleScoreInc (newScore: number) {
        this.score += newScore;
        this.printScoreAndMoves();
    }

    handleMoves () {
        this.moves -= 1;

        if (this.moves < 1) {
            EventBus.gameOver.emit ();
        } else {
            this.printScoreAndMoves();
        }
    }

    printScoreAndMoves () {
        this.scoreElement.innerText = `Score: ${this.score}`;
        this.movesElement.innerText = `Moves: ${this.moves}`;
    }

    handleGameOver () {
        this.scoreElement.innerText = `Game Over. You Scored ${this.score}`;
        this.movesElement.innerText = '';
    }
}