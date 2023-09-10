import { createContext } from 'react';
import { Document } from '@/interfaces';

interface ContextProps {
	currentDocument: Document;
	documents: Document[];
	// Methods
	addNewDocument: (document: Document) => void;
	setCurrentDocument: (document: Document) => void;
	saveChanges: (document: Document) => void;
	removeDocument: (document: Document) => void;
}

export const DocumentsContext = createContext({} as ContextProps);
