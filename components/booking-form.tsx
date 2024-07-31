"use client"
import React, { useRef, useEffect, useState, ChangeEvent } from "react"
import {
	fetchAvailableTimes,
	submitBooking,
} from "@/app/actions/bookingActions"

interface BookingFormProps {
	initialAvailableTimes: string[]
}
export const BookingForm = ({ initialAvailableTimes }: BookingFormProps) => {
	const [date, setData] = useState("")
	const [time, setTime] = useState("")
	const [guests, setGuests] = useState("")
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [occasion, setOccasion] = useState("")
	const [message, setMessage] = useState("")

	const [availableTimes, setAvailableTimes] = useState(initialAvailableTimes)

	const handleDateChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const selectedData = e.target.value
		setData(selectedData)
		const times = await fetchAvailableTimes(selectedData)
		setAvailableTimes(times)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const formData = {
			date,
			time,
			guests,
			occasion,
			name,
			email,
			phone,
			message,
		}
		try {
			const result = await submitBooking(formData as any)
			if (result.success) {
				console.log("Booking submitted successfully")
				// Handle successful submission (e.g., show confirmation, reset form)
			} else {
				console.log("Failed to submit booking")
				// Handle submission failure
			}
		} catch (error) {
			console.error("Error submitting booking:", error)
			// Handle error
		}

		console.log(formData)
		// Reset the form
		setData("")
		setTime("")
		setGuests("")
		setOccasion("")
		setName("")
		setEmail("")
		setPhone("")
		setMessage("")
	}

	return (
		<form className="grid grid-rows-8 grid-cols-1" onSubmit={handleSubmit}>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					placeholder="Full Name"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="email">Email: </label>
				<input
					type="email"
					id="email"
					placeholder="Email Address"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="phone">Phone number: </label>
				<input
					type="string"
					id="phone"
					placeholder="(xxx) xxx-xxxx"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={(e) => setPhone(e.target.value)}
					value={phone}
					required
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label>Choose a date :</label>
				<input
					type="date"
					id="date"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={handleDateChange}
					value={date}
					required
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="date">Choose time:</label>
				<select
					id="time"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={(e) => setTime(e.target.value)}
					value={time}
					required
				>
					<option value="">Select a time</option>
					{availableTimes.map((timeSlot) => (
						<option key={timeSlot} value={timeSlot}>
							{timeSlot}
						</option>
					))}
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
					onChange={(e) => setGuests(e.target.value)}
					value={guests}
					required
				/>
			</div>
			<div className="py-2 px-1 font-bold">
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					className=" border-b-2 border-emerald-900 focus:outline-none "
					onChange={(e) => setOccasion(e.target.value)}
					value={occasion}
					required
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
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					required
				/>
			</div>
			<div className="p-2 grid place-items-center">
				<button
					type="submit"
					className="w-full h-full max-w-[150px] max-h-[100px] bg-yellow-400 text-emerald-900 hover:bg-black hover:text-yellow-400 rounded-sm px-4 py-2 text-emerald-800 font-bold transition duration-200 ease-linear shadow-md disabled:bg:yellow-400 disabled:text-emerald-900 disabled:cursor-not-allowed"
				>
					Book Now
				</button>
			</div>
		</form>
	)
}
