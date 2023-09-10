'use client';

import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DocumentsContext } from '@/providers';
import { Header, MarkdownPanel, ToggleMarkdownButton } from '.';
import { DEFAULT_DOCUMENT, EMPTY_DOCUMENT } from '@/constants';

interface Props {
	title?: string;
}

export const MainContent: FC<Props> = ({ title }) => {
	const { documents, setCurrentDocument } = useContext(DocumentsContext);
	const router = useRouter();

	useEffect(() => {
		const doc = documents.find(doc => doc.title == title);

		const defaultDocument = documents.find(
			doc => JSON.stringify(doc) == JSON.stringify(DEFAULT_DOCUMENT)
		);

		if (!doc && defaultDocument) {
			console.log('default document');
			setCurrentDocument(defaultDocument);
			return router.push(`/${defaultDocument.title}`);
		}

		if (!doc) {
			setCurrentDocument(EMPTY_DOCUMENT);
			return router.push('/');
		}
		setCurrentDocument(doc);
	}, []);

	return (
		<div className='w-full'>
			<MarkdownPanel />
			<Header />
			<ToggleMarkdownButton />
		</div>
	);
};
