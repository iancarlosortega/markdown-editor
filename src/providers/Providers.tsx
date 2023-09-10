'use client';

import { Toaster } from 'sonner';
import { UIProvider, DocumentsProvider } from './';

interface Props {
	children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
	return (
		<UIProvider>
			<Toaster richColors />
			<DocumentsProvider>{children}</DocumentsProvider>
		</UIProvider>
	);
};
