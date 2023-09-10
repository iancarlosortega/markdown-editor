import { FC, ReactNode, useReducer } from 'react';
import { UIContext } from './UiContext';
import { uiReducer } from './uiReducer';

export interface UIState {
	isSidebarOpen: boolean;
	isMarkdownEditorOpen: boolean;
	isConfirmDeleteModalOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
	isSidebarOpen: false,
	isMarkdownEditorOpen: true,
	isConfirmDeleteModalOpen: false,
};

interface Props {
	children?: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const toggleSidebar = () => {
		dispatch({ type: '[UI] - Toggle Sidebar' });
	};

	const toggleMarkdownEditor = () => {
		dispatch({ type: '[UI] - Toggle Markdown Editor' });
	};

	const toggleConfirmDeleteModal = () => {
		dispatch({ type: '[UI] - Toggle Confirm Delete Modal' });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				toggleSidebar,
				toggleMarkdownEditor,
				toggleConfirmDeleteModal,
			}}>
			{children}
		</UIContext.Provider>
	);
};
