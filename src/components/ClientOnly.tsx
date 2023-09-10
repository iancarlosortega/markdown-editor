'use client';

import { FC, useEffect, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export const ClientOnly: FC<Props> = ({ children }) => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) return null;

	return <>{children}</>;
};
