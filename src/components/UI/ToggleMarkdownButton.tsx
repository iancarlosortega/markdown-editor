'use client';

import { useContext } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { UIContext } from '@/providers';

export const ToggleMarkdownButton = () => {
	const { isMarkdownEditorOpen, toggleMarkdownEditor } = useContext(UIContext);

	return (
		<button
			className='fixed top-[67px] md:top-[85px] right-4 md:right-5 text-[#ced4da] z-50'
			onClick={toggleMarkdownEditor}>
			{isMarkdownEditorOpen ? <IconEye /> : <IconEyeOff />}
		</button>
	);
};
