import { MainContent } from '@/components/MainContent';

export default function DocumentPage({
	params,
}: {
	params: { title: string };
}) {
	return <MainContent title={params.title} />;
}
