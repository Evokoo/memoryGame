import "./Scorecard.scss";

export default function Scorecard({ gameState }: { gameState: GameState }) {
	return (
		<div className='score_card'>
			<p>
				Matches: {gameState.matches} / {gameState.deck.length / 2}
			</p>
			<p>Guesses: {gameState.guesses}</p>
			<p>Top Score: {gameState.highScore}</p>
		</div>
	);
}
