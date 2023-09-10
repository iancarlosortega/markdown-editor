import { UIState } from './UIProvider';

type UIActionType =
	| { type: '[UI] - Toggle Sidebar' }
	| { type: '[UI] - Toggle Markdown Editor' }
	| { type: '[UI] - Toggle Confirm Delete Modal' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
	switch (action.type) {
		case '[UI] - Toggle Sidebar':
			return {
				...state,
				isSidebarOpen: !state.isSidebarOpen,
			};

		case '[UI] - Toggle Markdown Editor':
			return {
				...state,
				isMarkdownEditorOpen: !state.isMarkdownEditorOpen,
			};

		case '[UI] - Toggle Confirm Delete Modal':
			return {
				...state,
				isConfirmDeleteModalOpen: !state.isConfirmDeleteModalOpen,
			};

		default:
			return state;
	}
};
