export type ShowStateType = boolean;

export type ShowState = {
	show: ShowStateType;
};

export function validateShow(value: unknown): value is ShowStateType {
	return typeof value === 'boolean';
}

export function normalizeShow(value?: unknown): ShowStateType {
	return value === true;
}
