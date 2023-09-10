import { FC, ReactNode, useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { DocumentsContext, documentsReducer } from './';
import { DEFAULT_DOCUMENT } from '@/constants';
import { Document } from '@/interfaces';

export interface DocumentsState {
	currentDocument: Document;
	documents: Document[];
}

const DOCUMENTS_INITIAL_STATE: DocumentsState = {
	currentDocument: DEFAULT_DOCUMENT,
	documents: JSON.parse(
		localStorage.getItem('documents') || JSON.stringify([DEFAULT_DOCUMENT])
	),
};

interface Props {
	children?: ReactNode;
}

export const DocumentsProvider: FC<Props> = ({ children }) => {
	const router = useRouter();

	const [state, dispatch] = useReducer(
		documentsReducer,
		DOCUMENTS_INITIAL_STATE
	);

	const addNewDocument = (newDocument: Document) => {
		dispatch({ type: '[DOCS] - Add Document', payload: newDocument });
		setCurrentDocument(newDocument);
		router.push(`/${newDocument.title}`);
	};

	const setCurrentDocument = (document: Document) => {
		dispatch({ type: '[DOCS] - Set Current Document', payload: document });
		saveChanges(document);
	};

	const saveChanges = (document: Document) => {
		dispatch({ type: '[DOCS] - Save Changes', payload: document });
		localStorage.setItem('documents', JSON.stringify(state.documents));
	};

	const removeDocument = (document: Document) => {
		if (state.documents.length === 0) return;
		dispatch({ type: '[DOCS] - Remove Document', payload: document });

		const updatedState = state.documents.filter(doc => doc.id !== document.id);

		if (updatedState.length === 0) return router.push('/');

		if (state.currentDocument.id === document.id) {
			const lastDocument = updatedState[updatedState.length - 1];
			setCurrentDocument(lastDocument);
			router.push(`/${lastDocument.title}`);
		}
	};

	return (
		<DocumentsContext.Provider
			value={{
				...state,
				addNewDocument,
				setCurrentDocument,
				saveChanges,
				removeDocument,
			}}>
			{children}
		</DocumentsContext.Provider>
	);
};
