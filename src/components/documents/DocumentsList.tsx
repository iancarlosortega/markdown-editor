'use client';

import { useContext } from 'react';
import { DocumentsContext } from '@/providers';
import { DocumentListItem } from '.';

export const DocumentsList = () => {
	const { documents } = useContext(DocumentsContext);

	return (
		<ul className='flex-1 flex flex-col gap-2 mt-6 overflow-y-scroll'>
			{documents.map(doc => (
				<DocumentListItem key={doc.id} document={doc} />
			))}
		</ul>
	);
};
