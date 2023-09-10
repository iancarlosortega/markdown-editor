import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Providers } from '@/providers/Providers';
import { ClientOnly, ConfirmDelete } from '@/components';
import { Sidebar } from '@/components/UI/Sidebar';

const roboto = Roboto({
	weight: ['300', '400', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Markdown Editor',
	description: 'Project to practice Next.js, TypeScript, and Tailwind CSS',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es'>
			<body className={roboto.className}>
				<ClientOnly>
					<Providers>
						<div className='overflow-x-hidden'>
							<Sidebar />
							<ConfirmDelete />
							{children}
						</div>
					</Providers>
				</ClientOnly>
			</body>
		</html>
	);
}
