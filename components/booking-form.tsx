"use client"
import React, { useRef, useEffect, useState, ChangeEvent } from "react"
import {
	fetchAvailableTimes,
	submitBooking,
} from "@/app/actions/bookingActions"
import { useRouter } from "next/navigation"

interface BookingFormProps {
	initialAvailableTimes: string[]
}
interface FormData {
	date: string
	time: string
	guests: string
	occasion: string
	name: string
	email: string
	phone: string
	message: string
}
export const BookingForm = ({ initialAvailableTimes }: BookingFormProps) => {
	const [formData, setFormData] = useState<FormData>({
		date: "",
		time: "",
		guests: "",
		occasion: "",
		name: "",
		email: "",
		phone: "",
		message: "",
	})

	const [availableTimes, setAvailableTimes] = useState(initialAvailableTimes)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitResult, setSubmitResult] = useState<{
		success: boolean
		message: string
	} | null>(null)
	const router = useRouter()

	const handleInputChange = (
		e:
			| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleDateChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const seteledDate = e.target.value
		setFormData((prev) => ({ ...prev, date: seteledDate }))
		const times = await fetchAvailableTimes(seteledDate)
		setAvailableTimes(times)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitResult(null)
		try {
			const result = await submitBooking(formData as any)

			setSubmitResult({
				success: result.success,
				message: result.success
					? "Booking submitted successfully"
					: "Failed to submit booking",
			})

			if (result.success) {
				setFormData({
					date: "",
					time: "",
					guests: "",
					occasion: "",
					name: "",
					email: "",
					phone: "",
					message: "",
				})
				router.push("/confirmation")
			}
		} catch (error) {
			setSubmitResult({
				success: false,
				message: "An error occurred. Please try again later",
			})
		} finally {
			setIsSubmitting(false)
		}
		console.log(formData)
	}

	return (
		<form
			className="w-full relative h-full grid gap-4 max-w-md mx-auto p-8"
			onSubmit={handleSubmit}
		>
			<InputField
				label="Name"
				id="name"
				type="text"
				placeholder="Full Name"
				value={formData.name}
				onChange={handleInputChange}
				required
			/>
			<InputField
				label="Email"
				id="email"
				type="email"
				placeholder="Email Address"
				value={formData.email}
				onChange={handleInputChange}
				required
			/>
			<InputField
				label="Phone number"
				id="phone"
				type="tel"
				placeholder="(xxx) xxx-xxxx"
				value={formData.phone}
				onChange={handleInputChange}
				required
			/>
			<InputField
				label="Choose a date"
				id="date"
				type="date"
				value={formData.date}
				onChange={handleDateChange}
				required
			/>
			<SelectField
				label="Choose time"
				id="time"
				value={formData.time}
				onChange={handleInputChange}
				options={[
					{ value: "", label: "Select a time" },
					...availableTimes.map((time) => ({ value: time, label: time })),
				]}
				required
			/>
			<InputField
				label="Guests"
				id="guests"
				type="number"
				placeholder="1"
				min={1}
				max={10}
				value={formData.guests}
				onChange={handleInputChange}
				required
			/>
			<SelectField
				label="Occasion"
				id="occasion"
				value={formData.occasion}
				onChange={handleInputChange}
				options={[
					{ value: "", label: "Select an occasion" },
					{ value: "Birthday", label: "Birthday" },
					{ value: "Anniversary", label: "Anniversary" },
					{ value: "Other", label: "Other" },
				]}
				required
			/>
			<div className="flex flex-col">
				<label htmlFor="message" className="font-bold mb-1">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="Additional requirements"
					className="border-b-2 border-emerald-900 focus:outline-none p-2"
					value={formData.message}
					onChange={handleInputChange}
				/>
			</div>
			{submitResult && (
				<div
					className={`text-center p-2 ${
						submitResult.success ? "text-green-600" : "text-red-600"
					}`}
				>
					{submitResult.message}
				</div>
			)}
			<div className="text-center">
				<button
					type="submit"
					className="w-full max-w-[150px] bg-yellow-400 text-emerald-900 hover:bg-black hover:text-yellow-400 rounded-sm px-4 py-2 font-bold transition duration-200 ease-linear shadow-md disabled:bg-yellow-200 disabled:text-emerald-700 disabled:cursor-not-allowed"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Submitting..." : "Book Now"}
				</button>
			</div>
		</form>
	)
}
const InputField = ({
	label,
	id,
	...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
	<div className="flex flex-col">
		<label htmlFor={id} className="font-bold mb-1">
			{label}
		</label>
		<input
			id={id}
			name={id}
			className="border-b-2 border-emerald-900 focus:outline-none p-2"
			{...props}
		/>
	</div>
)

const SelectField = ({
	label,
	id,
	options,
	...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
	label: string
	options: { value: string; label: string }[]
}) => (
	<div className="flex flex-col">
		<label htmlFor={id} className="font-bold mb-1">
			{label}
		</label>
		<select
			id={id}
			name={id}
			className="border-b-2 border-emerald-900 focus:outline-none p-2"
			{...props}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	</div>
)
