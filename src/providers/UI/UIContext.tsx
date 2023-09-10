import { createContext } from 'react';

interface ContextProps {
	isSidebarOpen: boolean;
	isMarkdownEditorOpen: boolean;
	isConfirmDeleteModalOpen: boolean;
	toggleSidebar: () => void;
	toggleMarkdownEditor: () => void;
	toggleConfirmDeleteModal: () => void;
}

export const UIContext = createContext({} as ContextProps);
