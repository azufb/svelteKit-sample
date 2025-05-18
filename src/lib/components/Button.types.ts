export enum BUTTON_THEME {
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	NORMAL = 'NORMAL'
}

export interface ButtonProps {
	label: string;
	theme: BUTTON_THEME;
	onClick: () => void;
}
