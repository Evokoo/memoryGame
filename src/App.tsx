import { useEffect, useReducer } from "react";

//Styles
import "./App.scss";

//Components
import Card from "./components/Card";
import Scorecard from "./components/Scorecard";
import Success from "./components/Success";

//Reducer
import gameReducer from "./gameReducer";

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

const intialState: GameState = {
	deck: [],
	previousCard: { id: -1, value: "", event: null },
	matches: 0,
	guesses: 0,
	highScore: 0,
};

function App() {
	const [gameState, dispatch] = useReducer(gameReducer, intialState);

	useEffect(() => {
		const shuffledDeck = cards.sort((_) => (Math.random() > 0.5 ? 1 : -1));
		dispatch({ type: "set_deck", payload: shuffledDeck });
		dispatch({
			type: "set_highscore",
			payload: Number(localStorage.getItem(`highscore`) || 0),
		});
	}, []);

	return (
		<div id='App'>
			<h1>Hello Wolrd</h1>
			{gameState.matches < cards.length / 2 ? (
				<div className='card_grid'>
					{gameState.deck.map((card: MemoryCard) => (
						<Card gameState={gameState} card={card} dispatch={dispatch} />
					))}
				</div>
			) : (
				<Success gameState={gameState} dispatch={dispatch} />
			)}
			<Scorecard gameState={gameState} />
		</div>
	);
}

export default App;
