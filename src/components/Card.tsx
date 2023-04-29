export default function Card({
	card,
	gameState,
	dispatch,
}: {
	card: MemoryCard;
	gameState: GameState;
	dispatch: React.Dispatch<GameAction>;
}) {
	const toggleFlip = (cardEvent: React.BaseSyntheticEvent): void => {
		cardEvent.target.classList.toggle("facedown");
		cardEvent.target.classList.toggle("faceup");
	};

	const matchCards = (cardEvent: React.BaseSyntheticEvent): void => {
		cardEvent.target.classList.toggle("matched");
	};

	const flipCard = (id: number, value: string, event: React.SyntheticEvent) => {
		const current: MemoryCard = { id, value, event };

		if (current.event) {
			toggleFlip(current.event);
		}

		if (gameState.previousCard.id === -1) {
			dispatch({ type: "set_previous_card", payload: current });
			return;
		}

		if (current.value === gameState.previousCard.value) {
			console.log("Match");

			if (current.event && gameState.previousCard.event) {
				matchCards(current.event);
				matchCards(gameState.previousCard.event);
			}

			dispatch({
				type: "set_previous_card",
				payload: { id: -1, value: "", event: null },
			});
			dispatch({ type: "increase_match" });
		}

		if (current.value !== gameState.previousCard.value) {
			console.log("No Match");

			setTimeout(() => {
				if (current.event && gameState.previousCard.event) {
					toggleFlip(current.event);
					toggleFlip(gameState.previousCard.event);
				}
			}, 500);

			dispatch({
				type: "set_previous_card",
				payload: { id: -1, value: "", event: null },
			});
		}

		dispatch({ type: "increase_guesses" });
	};

	return (
		<div
			className='card facedown'
			onClick={(event) => flipCard(card.id, card.value, event)}
		>
			<h3 className='card_value'>{card.value}</h3>
		</div>
	);
}
