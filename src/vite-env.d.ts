/// <reference types="vite/client" />

interface MemoryCard {
	id: number;
	value: string;
	event?: React.MouseEvent<HTMLDivElement> | null;
}
