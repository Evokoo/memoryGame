export default function Card({
	id,
	value,
	last,
	setLast,
	setMatch,
	setGuesses,
}: {
	id: number;
	value: string;
	last: MemoryCard;
	setLast: React.Dispatch<React.SetStateAction<MemoryCard>>;
	setMatch: React.Dispatch<React.SetStateAction<number>>;
	setGuesses: React.Dispatch<React.SetStateAction<number>>;
}) {
	const flipCard = (
		id: number,
		value: string,
		event: React.MouseEvent<HTMLDivElement>
	) => {
		const toggleFlip = (card): void => {
			card.classList.toggle("facedown");
			card.classList.toggle("faceup");
		};

		const matchCards = (card): void => {
			card.classList.toggle("matched");
		};

		const current: MemoryCard = { id, value, event };

		toggleFlip(current.event);

		if (last.id === -1) {
			setLast(current);
			return;
		}

		if (current.value === last.value) {
			console.log("Match");
			matchCards(current.event);
			matchCards(last.event);
			setLast({ id: -1, value: "", event: null });
			setMatch((matches) => matches + 1);
		}

		if (current.value !== last.value) {
			console.log("No Match");

			setTimeout(() => {
				toggleFlip(current.event);
				toggleFlip(last.event);
			}, 500);

			setLast({ id: -1, value: "", event: null });
		}

		setGuesses((guesses) => guesses + 1);
	};

	return (
		<div
			className='card facedown'
			onClick={(e) => flipCard(id, value, e.target)}
		>
			<h3 className='card_value'>{value}</h3>
		</div>
	);
}
