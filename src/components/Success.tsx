import { useEffect } from "react";
import "./Success.scss";

export default function Success({
	gameState,
	dispatch,
}: {
	gameState: GameState;
	dispatch: React.Dispatch<GameAction>;
}) {
	useEffect(() => {
		const highscore = gameState.highScore;
		const guesses = gameState.guesses;

		const topScore: number =
			highscore > 0
				? Math.min(highscore, guesses)
				: Math.max(highscore, guesses);

		dispatch({ type: "set_highscore", payload: topScore });
	}, []);

	return (
		<div className='success'>
			<h1>WINNER!</h1>
			<button onClick={() => dispatch({ type: "reset_cards" })}>
				New Game
			</button>
		</div>
	);
}
