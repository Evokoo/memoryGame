const gameReducer = (state: GameState, action: GameAction): GameState => {
	switch (action.type) {
		case "set_deck":
			return {
				...state,
				deck: action.payload,
			};
		case "increase_match":
			return {
				...state,
				matches: state.matches + 1,
			};
		case "increase_guesses":
			return {
				...state,
				guesses: state.guesses + 1,
			};
		case "set_highscore": {
			//Set Localstorage
			localStorage.setItem(`highscore`, String(action.payload));

			return {
				...state,
				highScore: action.payload,
			};
		}
		case "set_previous_card":
			return {
				...state,
				previousCard: action.payload,
			};
		case "reset_cards": {
			return {
				...state,
				guesses: 0,
				matches: 0,
			};
		}
		default:
			throw Error("Invalid action type");
	}
};

export default gameReducer;
