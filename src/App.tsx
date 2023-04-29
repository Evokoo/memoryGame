import { useEffect, useState } from "react";
import "./App.scss";

import Card from "./components/Card";
import Scorecard from "./components/Scorecard";
import Success from "./components/Success";

// const cards: MemoryCard[] = [
// 	{ id: 1, value: "A" },
// 	{ id: 2, value: "B" },
// 	{ id: 3, value: "C" },
// 	{ id: 4, value: "D" },
// 	{ id: 5, value: "E" },
// 	{ id: 6, value: "F" },
// 	{ id: 7, value: "G" },
// 	{ id: 8, value: "H" },
// 	{ id: 9, value: "I" },
// 	{ id: 10, value: "J" },
// 	{ id: 11, value: "K" },
// 	{ id: 12, value: "L" },
// 	{ id: 13, value: "A" },
// 	{ id: 14, value: "B" },
// 	{ id: 15, value: "C" },
// 	{ id: 16, value: "D" },
// 	{ id: 17, value: "E" },
// 	{ id: 18, value: "F" },
// 	{ id: 19, value: "G" },
// 	{ id: 20, value: "H" },
// 	{ id: 21, value: "I" },
// 	{ id: 22, value: "J" },
// 	{ id: 23, value: "K" },
// 	{ id: 24, value: "L" },
// ];

const cards: MemoryCard[] = [
	{ id: 1, value: "A" },
	{ id: 2, value: "B" },
	{ id: 3, value: "C" },
	{ id: 4, value: "D" },
	{ id: 5, value: "E" },
	{ id: 6, value: "F" },
	{ id: 13, value: "A" },
	{ id: 14, value: "B" },
	{ id: 15, value: "C" },
	{ id: 16, value: "D" },
	{ id: 17, value: "E" },
	{ id: 18, value: "F" },
];

function App() {
	const [deck, setDeck] = useState<MemoryCard[]>([]);
	const [matches, setMatches] = useState<number>(0);
	const [guesses, setGuesses] = useState<number>(0);
	const [highScore, setHighScore] = useState<number>(0);
	const [last, setLast] = useState<MemoryCard>({
		id: -1,
		value: "",
		event: null,
	});

	useEffect(() => {
		setDeck(cards.sort((_) => (Math.random() > 0.5 ? 1 : -1)));
		setHighScore(
			Number(localStorage.getItem(`highscore${String(deck.length)}`))
		);
	}, []);

	return (
		<div id='App'>
			{matches < cards.length / 2 ? (
				<div className='card_grid'>
					{deck.map((card: MemoryCard) => (
						<Card
							key={card.id}
							id={card.id}
							value={card.value}
							last={last}
							setLast={setLast}
							setMatch={setMatches}
							setGuesses={setGuesses}
						/>
					))}
				</div>
			) : (
				<Success
					setMatches={setMatches}
					setGuesses={setGuesses}
					highScore={highScore}
					setHighScore={setHighScore}
					guesses={guesses}
					boardSize={cards.length}
				/>
			)}
			<Scorecard
				matches={matches}
				guesses={guesses}
				deck={deck}
				highScore={highScore}
			/>
		</div>
	);
}

export default App;
