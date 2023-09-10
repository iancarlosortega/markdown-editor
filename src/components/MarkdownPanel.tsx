'use client';

import { useContext } from 'react';
import { DocumentsContext, UIContext } from '@/providers';
import { MarkdownEditor, MarkdownPreview } from '.';

export const MarkdownPanel = () => {
	const { isSidebarOpen } = useContext(UIContext);
	const { currentDocument } = useContext(DocumentsContext);

	return (
		<main
			className={`flex mt-[100px] md:mt-[120px] transition-smooth min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-120px)] ${
				isSidebarOpen ? 'translate-x-[250px]' : 'translate-x-0'
			}`}>
			<MarkdownEditor document={currentDocument} />
			<MarkdownPreview document={currentDocument} />
		</main>
	);
};
