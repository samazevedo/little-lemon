import { useRef, useEffect, useState } from "react"

export const BookingForm = () => {
	const inputRef = useRef<HTMLInputElement>(null!)
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		date: "",
		time: "",
		guests: 1,
		occasion: "",
		comments: "",
	})
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { id, value } = e.target
		setFormData((prev) => ({ ...prev, [id]: value }))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log("form submitted", formData)
		alert("table booked")
	}

	useEffect(() => {
		inputRef.current.focus()
	}, [inputRef])

	return (
		<form className="grid grid-rows-8 grid-cols-1" onSubmit={handleSubmit}>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="name">Name: </label>
				<input
					ref={inputRef}
					type="text"
					id="name"
					placeholder="Full Name"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={handleChange}
					value={formData.name}
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="email">Email: </label>
				<input
					type="email"
					id="email"
					placeholder="Email Address"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={handleChange}
					value={formData.email}
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="phone">Phone number: </label>
				<input
					type="string"
					id="phone"
					placeholder="(xxx) xxx-xxxx"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={handleChange}
					value={formData.phone}
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label>Choose a date :</label>
				<input
					type="date"
					id="date"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={handleChange}
					value={formData.date}
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="date">Choose time:</label>
				<select
					id="time"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					value={formData.time}
					onChange={handleChange}
				>
					<option>17:00</option>
					<option>18:00</option>
					<option>19:00</option>
					<option>20:00</option>
					<option>21:00</option>
					<option>22:00</option>
				</select>
			</div>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="guest">Guests: </label>
				<input
					id="guests"
					type="number"
					placeholder="1"
					min={1}
					max={10}
					className=" border-b-2 border-emerald-900 focus:outline-none "
					value={formData.guests}
					onChange={handleChange}
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					value={formData.occasion}
					onChange={handleChange}
				>
					<option>Birthday</option>
					<option>Anniversary</option>
					<option>Other</option>
				</select>
			</div>
			<div className="py-2 px-1 w-full grid grid-rows-2 font-bold place-items-center">
				<label htmlFor="comments">Message</label>
				<textarea
					id="comments"
					placeholder="Additional requirements"
					className=" border-b-2  border-emerald-900 focus:outline-none "
					value={formData.comments}
					onChange={handleChange}
				/>
			</div>
			<div className="p-2 grid place-items-center">
				<button
					type="submit"
					className="w-full h-full max-w-[150px] max-h-[100px] bg-yellow-400 text-emerald-900 hover:bg-black hover:text-yellow-400 rounded-sm px-4 py-2 text-emerald-800 font-bold transition duration-200 ease-linear shadow-md"
				>
					Book Now
				</button>
			</div>
		</form>
	)
}
