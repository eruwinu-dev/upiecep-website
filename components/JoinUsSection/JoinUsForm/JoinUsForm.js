const JoinUsForm = () => {
	return (
		<div className="w-full max-w-lg">
			<form className="rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label className="block text-gray-700 text-md font-bold mb-2">
						Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="UP IECEP"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-md font-bold mb-2">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="iecep@upiecep.org"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-md font-bold mb-2">
						How did you learn about UP IECEP?
					</label>
					<textarea
						rows={3}
						className="resize-none shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="how"
						type="text"
						placeholder=""
					/>
				</div>
				<div className="flex flex-row items-center mb-4">
					<label className="w-1/6 flex flex-col items-center">
						<input className="mr-2 leading-tight" type="checkbox" />
					</label>
					<label className="w-5/6 flex flex-col items-start text-gray-500 font-bold">
						<span className="text-sm">
							By answering this form, I understand that the
							information provided in this form will be utilized
							by UP IECEP pursuant to the provisions of the Data
							Privacy Act, and only for the purpose of processing
							my application.
						</span>
					</label>
				</div>
				<div className="mb-4">
					<button
						className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">
						Sign Up
					</button>
				</div>
			</form>
		</div>
	)
}

export default JoinUsForm
