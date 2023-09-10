'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { Commissioner } from 'next/font/google';
import { toast } from 'sonner';
import {
	IconDeviceFloppy,
	IconFile,
	IconMenu2,
	IconTrash,
	IconX,
} from '@tabler/icons-react';
import { DocumentsContext, UIContext } from '@/providers';
import { Button } from '.';
import { EMPTY_DOCUMENT } from '@/constants';

const commissioner = Commissioner({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const Header = () => {
	const {
		isSidebarOpen,
		toggleSidebar,
		toggleConfirmDeleteModal,
		isMarkdownEditorOpen,
	} = useContext(UIContext);
	const { currentDocument, setCurrentDocument, addNewDocument, documents } =
		useContext(DocumentsContext);

	const handleDocumentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTitle = e.target.textContent || 'untitled';
		setCurrentDocument({ ...currentDocument, title: newTitle });
	};

	const handleSaveChanges = () => {
		if (currentDocument.id === EMPTY_DOCUMENT.id) {
			const newId = documents[documents.length - 1]?.id + 1 || 1;

			const newDocument = {
				...currentDocument,
				id: newId,
				createdAt: new Date(),
			};
			addNewDocument(newDocument);
		} else {
			setCurrentDocument(currentDocument);
		}
		toast.success('Changes Saved');
	};

	return (
		<div
			className={`fixed top-0 w-full h-[100px] md:h-[120px] transition-smooth ${
				isSidebarOpen ? 'translate-x-[250px]' : 'translate-x-0'
			}`}>
			<header className='flex justify-between items-center bg-secondary-lt'>
				<div className='flex'>
					<button
						onClick={toggleSidebar}
						className='bg-secondary-ltr py-4 px-4 md:px-6 text-white'>
						{isSidebarOpen ? (
							<IconX className='w-6 h-6' />
						) : (
							<IconMenu2 className='w-6 h-6' />
						)}
					</button>

					<div className='flex gap-4 items-center px-4 py-2'>
						<Link
							href='/'
							className='hidden md:block pl-4 pr-8 border-r border-white/30'>
							<h1
								className={`${commissioner.className} uppercase text-white font-bold my-2 tracking-[5px]`}>
								Markdown
							</h1>
						</Link>

						<div className='flex items-center gap-2 md:gap-4 my-2 px-2 md:px-6'>
							<IconFile className='text-white' />
							<div className='flex flex-col'>
								<span className='hidden md:block font-light text-sm text-secondary-ltst'>
									Document Name
								</span>
								<div>
									<span
										onInput={handleDocumentNameChange}
										className='outline-none text-white text-sm md:text-base'
										contentEditable
										suppressContentEditableWarning>
										{currentDocument?.title}
									</span>
									<span className='text-white'>.md</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='px-4 flex gap-6'>
					<button onClick={toggleConfirmDeleteModal}>
						<IconTrash className='text-gray-400 hover:text-white transition-colors' />
					</button>

					<Button onClick={handleSaveChanges}>
						<IconDeviceFloppy />
						<span className='hidden md:block'>Save Changes</span>
					</Button>
				</div>
			</header>
			<div className={`${commissioner.className} flex`}>
				<div
					className={`${
						isMarkdownEditorOpen ? 'w-full md:w-1/2' : 'w-0'
					} transition-smooth`}>
					<h3 className='title'>Markdown</h3>
				</div>
				<div
					className={`${
						isMarkdownEditorOpen ? 'w-0 md:w-1/2' : 'w-full'
					} transition-smooth flex-1 border-l border-[#6c757d]`}>
					<h3 className='title'>Preview</h3>
				</div>
			</div>
		</div>
	);
};
