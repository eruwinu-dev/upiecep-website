import { Fragment, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { FiCheck } from "react-icons/fi"

const JoinUsModal = ({ open, setOpen }) => {
	const cancelButtonRef = useRef(null)

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="fixed z-10 inset-0 overflow-y-auto"
				initialFocus={cancelButtonRef}
				onClose={setOpen}>
				<div className="flex flex-col items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
					</Transition.Child>

					<span
						className="hidden sm:inline-block sm:align-middle sm:h-screen"
						aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
						<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
							<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								<div className="flex flex-col items-center">
									<div className="p-2 text-3xl text-white bg-green-600 rounded-full flex-flex-col items-center max-w">
										<FiCheck />
									</div>
									<div className="mt-3 sm:text-center">
										<Dialog.Title
											as="h3"
											className="text-lg leading-6 font-medium text-gray-900">
											Thank you for answering!
										</Dialog.Title>
										<div className="mt-2">
											<p className="text-md text-gray-700">
												We will inform you once your
												application is processed.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-gray-50 px-4 py-3 sm:px-6 w-full flex flex-row items-center justify-end">
								<button
									type="button"
									className="font-bold py-1 px-4 rounded-lg focus:outline-none focus:shadow-outline border-solid border-2 border-gray-900 text-sm text-gray-900"
									onClick={() => setOpen(false)}
									ref={cancelButtonRef}>
									Close
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default JoinUsModal
