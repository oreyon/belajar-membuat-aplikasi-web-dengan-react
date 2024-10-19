export type Note = {
	id: number;
	title: string;
	body: string;
	createdAt: string;
	archived: boolean;
};

export type NoteItemProps = {
	note: Note;
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
};

export type NoteListProps = {
	notes: Note[];
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
};

export type AddNoteProps = {
	addNote: (title: string, body: string) => void;
};

export type NavbarProps = {
	onSearch: (keyword: string) => void;
};
