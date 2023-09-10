import { DocumentsState } from './DocumentsProvider';
import { Document } from '@/interfaces';

type DocumentsActionType =
	| { type: '[DOCS] - Set Current Document'; payload: Document }
	| { type: '[DOCS] - Add Document'; payload: Document }
	| { type: '[DOCS] - Save Changes'; payload: Document }
	| { type: '[DOCS] - Remove Document'; payload: Document };

export const documentsReducer = (
	state: DocumentsState,
	action: DocumentsActionType
): DocumentsState => {
	switch (action.type) {
		case '[DOCS] - Set Current Document':
			return {
				...state,
				currentDocument: action.payload,
			};

		case '[DOCS] - Save Changes':
			return {
				...state,
				documents: state.documents.map(doc => {
					if (doc.id !== action.payload.id) return doc;
					return action.payload;
				}),
			};

		case '[DOCS] - Add Document':
			return {
				...state,
				documents: [...state.documents, action.payload],
			};

		case '[DOCS] - Remove Document':
			return {
				...state,
				documents: state.documents.filter(doc => doc.id !== action.payload.id),
			};

		default:
			return state;
	}
};
