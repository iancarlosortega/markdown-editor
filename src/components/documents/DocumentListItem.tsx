import Link from 'next/link';
import { IconFile } from '@tabler/icons-react';
import { Document } from '@/interfaces';

interface Props {
	document: Document;
}

export const DocumentListItem: React.FC<Props> = ({ document }) => {
	const { title, createdAt } = document;

	return (
		<li>
			<Link href={`/${title}`} className='flex items-center gap-3 group'>
				<IconFile className='text-white ' />
				<div className='flex flex-col'>
					<span className='text-white/60 text-xs'>
						{createdAt.toLocaleString()}
					</span>
					<span className='text-white group-hover:text-primary text-sm transition-colors duration-200 ease-in'>
						{title}.md
					</span>
				</div>
			</Link>
		</li>
	);
};
