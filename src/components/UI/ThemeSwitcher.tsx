'use client';

import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { classNames } from '@/utils';

export const ThemeSwitcher = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return setTheme(localStorage.getItem('theme')!);
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return setTheme('dark');
		}
		setTheme('light');
	}, [setTheme]);

	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'light') {
			root.classList.remove('dark');
		} else {
			root.classList.add('dark');
		}
	}, [theme]);

	const onToggleTheme = () => {
		const themeSelected = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', themeSelected);
		setTheme(themeSelected);
	};

	return (
		<div className='flex gap-2 mt-4'>
			<IconMoon className='dark:text-white text-[#5a6069]' />
			<label className='relative inline-flex items-center cursor-pointer'>
				<input
					onChange={onToggleTheme}
					type='checkbox'
					className='sr-only peer'
					checked={theme === 'light'}
				/>
				<div
					className={classNames(
						'w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-4 peer-focus:ring-orange-300 peer-checked:bg-orange-500',
						'peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:h-5 after:border',
						'after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full ',
						'after:w-5 after:transition-all dark:bg-gray-700 dark:peer-focus:ring-orange-800 dark:border-gray-600 '
					)}></div>
			</label>
			<IconSun className='dark:text-[#5a6069] text-white' />
		</div>
	);
};
