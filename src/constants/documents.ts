import { DEFAULT_MARKDOWN } from './markdown';

export const DEFAULT_DOCUMENT = {
	id: 1,
	title: 'welcome',
	content: DEFAULT_MARKDOWN,
	createdAt: new Date(),
};

export const EMPTY_DOCUMENT = {
	id: 0,
	title: 'untitled',
	content: '',
	createdAt: new Date(),
};
