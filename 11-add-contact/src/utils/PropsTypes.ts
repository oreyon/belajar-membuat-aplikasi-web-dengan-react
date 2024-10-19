export type ContactItemBodyProps = {
	name: string;
	tag: string;
};

export type ContactItemImageProps = {
	imageUrl: string;
};

export type ContactItemProps = {
	id: number;
	imageUrl: string;
	name: string;
	tag: string;
	onDelete: (id: number) => void;
};

export type ContactListProps = {
	contacts: ContactItemProps[];
	onDelete: (id: number) => void;
};

export type DeleteButtonProps = {
	id: number;
	onDelete: (id: number) => void;
};
