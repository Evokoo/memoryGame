import "./Scorecard.scss";

export default function Scorecard({
	matches,
	guesses,
	deck,
	highScore,
}: {
	matches: number;
	guesses: number;
	deck: MemoryCard[];
	highScore: number;
}) {
	return (
		<div className='score_card'>
			<p>
				Matches: {matches} / {deck.length / 2}
			</p>
			<p>Guesses: {guesses}</p>
			<p>Top Score: {highScore}</p>
		</div>
	);
}
