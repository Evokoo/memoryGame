/// <reference types="vite/client" />

interface MemoryCard {
	id: number;
	value: string;
	event?: React.SyntheticEvent | null;
}

interface GameState {
	deck: MemoryCard[];
	previousCard: MemoryCard;
	matches: number;
	guesses: number;
	highScore: number;
}

interface SetDeckAction {
	type: "set_deck";
	payload: MemoryCard[];
}

interface IncreaseMatchAction {
	type: "increase_match";
}

interface IncreaseGuessesAction {
	type: "increase_guesses";
}

interface SetHighscoreAction {
	type: "set_highscore";
	payload: number;
}

interface SetPreviousCardAction {
	type: "set_previous_card";
	payload: MemoryCard;
}

interface ResetCardsAction {
	type: "reset_cards";
}

type GameAction =
	| SetDeckAction
	| IncreaseMatchAction
	| IncreaseGuessesAction
	| SetHighscoreAction
	| SetPreviousCardAction
	| ResetCardsAction;
