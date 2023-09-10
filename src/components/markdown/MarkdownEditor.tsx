'use client';

import { ChangeEvent, useContext } from 'react';
import { Roboto_Mono } from 'next/font/google';
import { DocumentsContext, UIContext } from '@/providers';
import { classNames } from '@/utils';
import { Document } from '@/interfaces';

const robotoMono = Roboto_Mono({
	weight: '400',
	subsets: ['latin'],
});

interface Props {
	document: Document;
}

export const MarkdownEditor: React.FC<Props> = ({ document }) => {
	const { isMarkdownEditorOpen } = useContext(UIContext);
	const { setCurrentDocument } = useContext(DocumentsContext);

	const onEditorChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setCurrentDocument({
			...document,
			content: e.target.value,
		});
	};

	return (
		<section
			className={`${
				isMarkdownEditorOpen
					? 'w-full md:w-1/2'
					: 'w-0 opacity-0 dark:opacity-100'
			} flex transition-smooth`}>
			<textarea
				value={document.content}
				onChange={onEditorChange}
				className={classNames(
					`${robotoMono.className}`,
					'overflow-y-hidden w-full flex-1 px-6 pt-6 pb-3 text-[.7rem] text-secondary-ltr outline-none resize-none',
					'selection:text-white caret-orange-500 transition-colors duration-500',
					'dark:text-[#ced4da] dark:bg-secondary-dk dark:selection:text-secondary'
				)}></textarea>
		</section>
	);
};
