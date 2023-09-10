'use client';

import { useContext } from 'react';
import { Roboto_Slab } from 'next/font/google';
import Markdown from 'marked-react';
import { UIContext } from '@/providers';
import { classNames } from '@/utils';
import { Document } from '@/interfaces';

const robotoSlab = Roboto_Slab({
	weight: ['300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
});

interface Props {
	document: Document;
}

export const MarkdownPreview: React.FC<Props> = ({ document }) => {
	const { isMarkdownEditorOpen } = useContext(UIContext);

	return (
		<section
			className={`${
				isMarkdownEditorOpen ? 'w-0 md:w-1/2' : 'w-full'
			} border-l border-[#6c757d] flex-1 transition-smooth`}>
			<div
				className={classNames(
					`${robotoSlab.className}`,
					'w-full h-full prose max-w-none flex-1 px-6 pt-6 pb-3 text-[#6c757d] selection:text-white transition-all duration-500',
					'dark:text-[#ced4da] dark:bg-secondary-dk dark:prose-invert dark:selection:text-secondary'
				)}>
				<div
					className={`${
						isMarkdownEditorOpen ? 'max-w-full' : 'max-w-[594px]'
					} w-full mx-auto transition-smooth`}>
					<Markdown value={document.content} />
				</div>
			</div>
		</section>
	);
};
