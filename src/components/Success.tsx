import { useEffect } from "react";
import "./Success.scss";

export default function Success({
	setMatches,
	setGuesses,
	highScore,
	setHighScore,
	guesses,
	boardSize,
}: {
	setMatches: React.Dispatch<React.SetStateAction<number>>;
	setGuesses: React.Dispatch<React.SetStateAction<number>>;
	highScore: number;
	setHighScore: React.Dispatch<React.SetStateAction<number>>;
	guesses: number;
	boardSize: number;
}) {
	const resetBoard = () => {
		setMatches(0);
		setGuesses(0);
	};

	useEffect(() => {
		const topScore: number =
			highScore > 0
				? Math.min(highScore, guesses)
				: Math.max(highScore, guesses);

		setHighScore(topScore);
		localStorage.setItem(`highscore${String(boardSize)}`, String(topScore));
	}, [guesses, highScore, setHighScore, boardSize]);

	return (
		<div className='success'>
			<h1>WINNER!</h1>
			<button onClick={() => resetBoard()}> New Game </button>
		</div>
	);
}
