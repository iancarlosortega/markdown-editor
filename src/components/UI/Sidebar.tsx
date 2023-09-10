'use client';

import { useContext } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { DocumentsContext, UIContext } from '@/providers';
import { Button, DocumentsList, ThemeSwitcher } from '..';

export const Sidebar = () => {
	const { isSidebarOpen } = useContext(UIContext);
	const { documents, addNewDocument } = useContext(DocumentsContext);

	const handleAddNewDocument = () => {
		const newId = documents[documents.length - 1]?.id + 1 || 1;

		const newDocument = {
			id: newId,
			title: `document-${newId}`,
			createdAt: new Date(),
			content: '',
		};

		addNewDocument(newDocument);
	};

	return (
		<aside
			className={`${
				isSidebarOpen ? 'translate-x-0' : 'translate-x-[-250px]'
			} transition-smooth h-screen w-[250px] bg-secondary p-6 fixed flex flex-col z-10`}>
			<h3 className='text-[#adb5bd] tracking-[2px] uppercase mb-8'>
				My Documents
			</h3>
			<Button onClick={handleAddNewDocument}>
				<IconPlus className='w-5 h-5' />
				New Document
			</Button>
			<DocumentsList />
			<ThemeSwitcher />
		</aside>
	);
};
