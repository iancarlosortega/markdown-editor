'use client';

import { Fragment, useContext } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { DocumentsContext, UIContext } from '@/providers';
import { Button } from '../UI';
import { classNames } from '@/utils';

export const ConfirmDelete = () => {
	const { isConfirmDeleteModalOpen, toggleConfirmDeleteModal } =
		useContext(UIContext);
	const { currentDocument, removeDocument } = useContext(DocumentsContext);

	const handleRemoveDocument = () => {
		removeDocument(currentDocument);
		toggleConfirmDeleteModal();
	};

	return (
		<Transition appear show={isConfirmDeleteModalOpen} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				onClose={toggleConfirmDeleteModal}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-black bg-opacity-25' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'>
							<Dialog.Panel
								className={classNames(
									'w-full max-w-md transform overflow-hidden rounded-2xl bg-white',
									'dark:bg-zinc-700 p-6 text-left align-middle shadow-xl transition-all'
								)}>
								<Dialog.Title
									as='h3'
									className='text-lg font-semibold leading-6 text-gray-900 dark:text-white'>
									Delete this document?
								</Dialog.Title>
								<div className='mt-2'>
									<p className='text-sm text-gray-500 dark:text-white/90'>
										Are you sure you want to delete{' '}
										<strong>‘{currentDocument.title}.md’</strong> document and
										its contents? This action cannot be reversed.
									</p>
								</div>

								<div className='mt-4'>
									<Button onClick={handleRemoveDocument}>Confirm</Button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
