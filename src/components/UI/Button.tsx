import { classNames } from '@/utils';

interface Props {
	children: React.ReactNode;
	onClick: () => void;
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={classNames(
				'bg-primary text-white w-full flex justify-center items-center gap-2 rounded-md p-2 md:p-3',
				'hover:bg-orange-400 transition-colors duration-200 ease-in'
			)}>
			{children}
		</button>
	);
};
