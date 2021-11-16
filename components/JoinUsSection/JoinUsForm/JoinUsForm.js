import { useState } from "react"

import { supabase } from "../../../lib/supabaseClient"

import JoinUsModal from "../JoinUsModal/JoinUsModal"

const isValidEmail = (val) => {
	let regEmail =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return regEmail.test(val)
}

const JoinUsForm = () => {
	const initialValues = {
		full_name: "",
		email: "",
		how: "",
	}

	const initialErrors = {
		full_name: false,
		email: false,
		checked: false,
	}

	const [values, setValues] = useState(initialValues)
	const [errors, setErrors] = useState(initialErrors)
	const [checked, setChecked] = useState(false)
	const [loading, setLoading] = useState(false)
	const [open, setOpen] = useState(false)

	const handleChange = (prop) => (event) => {
		event.preventDefault()
		setValues({ ...values, [prop]: event.target.value })
		if (prop === "full_name") {
			setErrors({
				...errors,
				[prop]: !Boolean(event.target.value),
			})
		}
		if (prop === "email") {
			setErrors({
				...errors,
				[prop]:
					!Boolean(event.target.value) ||
					!isValidEmail(event.target.value),
			})
		}
	}

	const handleChecked = () => {
		setChecked(!checked)
		setErrors({
			...errors,
			checked: checked,
		})
	}

	const applyApp = async (values) => {
		setLoading(true)
		const { data, error } = await supabase
			.from("apps")
			.insert(values)
			.single()
		setLoading(false)
		if (error) {
		} else if (data) {
			setOpen(true)
			setValues(initialValues)
			setErrors(initialErrors)
			setChecked(false)
		}
	}

	const onSubmitForm = () => {
		let validInput = true
		if (!values.full_name || !values.email || !checked) {
			validInput = false
			setErrors({
				...errors,
				full_name: !Boolean(values.full_name),
				email: !Boolean(values.email) || !isValidEmail(values.email),
				checked: !checked,
			})
		}
		if (validInput) {
			applyApp(values)
		}
	}

	return (
		<div className="w-full max-w-lg">
			<div
				method="post"
				noValidate
				className="rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-2 space-y-1">
					<label className="block text-gray-700 text-md font-bold">
						Full Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						name="full_name"
						id="full_name"
						type="text"
						required
						value={values.full_name}
						onChange={handleChange("full_name")}
						placeholder="UP IECEP"
					/>
					<p
						className={`${
							errors.full_name ? `opacity-1` : `opacity-0`
						} text-red-500 text-sm font-bold`}>
						*Required
					</p>
				</div>
				<div className="mb-2 space-y-1">
					<label className="block text-gray-700 text-md font-bold">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						name="email"
						id="email"
						type="email"
						required
						value={values.email}
						onChange={handleChange("email")}
						placeholder="iecep@upiecep.org"
					/>
					<p
						className={`${
							errors.email ? `opacity-1` : `opacity-0`
						} text-red-500 text-sm font-bold`}>
						*Required, must be a valid email.
					</p>{" "}
				</div>
				<div className="mb-2 space-y-2">
					<label className="block text-gray-700 text-md font-bold">
						How did you learn about UP IECEP?
					</label>
					<textarea
						rows={3}
						className="resize-none shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						name="how"
						id="how"
						type="text"
						value={values.how}
						onChange={handleChange("how")}
						placeholder=""
					/>
				</div>
				<div className="flex flex-row items-center mb-4">
					<label className="w-1/6 flex flex-col items-center">
						<input
							className="leading-tight"
							type="checkbox"
							checked={checked}
							onChange={handleChecked}
						/>
					</label>
					<label className="w-5/6 flex flex-col items-start text-gray-700 font-bold space-y-1">
						<span className="text-sm">
							By answering this form, I understand that the
							information provided in this form will be utilized
							by UP IECEP pursuant to the provisions of the Data
							Privacy Act, and only for the purpose of processing
							my application.
						</span>
						<p
							className={`${
								errors.checked ? `opacity-1` : `opacity-0`
							} text-red-500 text-sm font-bold`}>
							Please check the box.
						</p>
					</label>
				</div>
				<div className="mb-2">
					<button
						className={`${
							loading
								? `bg-light-maroon cursor-not-allowed hover:bg-light-maroon text-white`
								: `bg-darker-maroon hover:bg-dark-maroon text-white`
						}  w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
						type="button"
						onClick={onSubmitForm}>
						Submit
					</button>
				</div>
			</div>
			<JoinUsModal open={open} setOpen={setOpen} />
		</div>
	)
}

export default JoinUsForm
