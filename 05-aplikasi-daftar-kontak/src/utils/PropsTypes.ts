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
};

export type ContactListProps = {
	contacts: ContactItemProps[];
};
