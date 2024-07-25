import { Button } from "@/components/button"
import Image from "next/legacy/image"

interface FormData {
	name: string
	email: string
	phone: number
	date: Date
	time: Date
	guests: number
	occasion: string
	comments: string
}

export default function Reservations() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		alert("submit")
	}
	return (
		<div className="w-full h-full grid grid-rows-3">
			<div className="w-full h-full grid ">
				<Image
					src="/assets/images/restaurant.jpg"
					alt="hero-img"
					width={50}
					height={50}
					className="w-full h-full"
					layout="responsive"
					objectFit="cover"
				/>
				<h1 className="w-[250px] absolute bg-emerald-900 text-center text-yellow-400 text-2xl rounded-md px-4 py-2 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
					Book a table
				</h1>
			</div>
			<div className="w-full h-full grid place-items-center">
				<form className="grid grid-cols-2 gap-2 p-6">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" placeholder="Full Name" />
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" placeholder="Email Address" />
					<label htmlFor="phone">Phone number:</label>
					<input type="number" id="phone" placeholder="(xxx) xxx-xxxx" />
					<label>Choose a date:</label>
					<input type="date" id="date" />
					<label htmlFor="date">Choose time:</label>
					<select id="time">
						<option>17:00</option>
						<option>18:00</option>
						<option>19:00</option>
						<option>20:00</option>
						<option>21:00</option>
						<option>22:00</option>
					</select>
					<label htmlFor="guest">Number of guests</label>
					<input type="number" placeholder="1" min={1} max={10} />
					<label htmlFor="occasion">Occasion</label>
					<select id="occasion">
						<option>Birthday</option>
						<option>Anniversary</option>
						<option>Other</option>
					</select>

					<label htmlFor="comments">Comments</label>
					<textarea id="comments" placeholder="Additional requirements" />

					<button
						type="submit"
						className="w-full max-w-[200px] max-h-[50px] bg-yellow-400 text-emerald-900 hover:bg-black hover:text-yellow-400 rounded-md"
					>
						Book Now
					</button>
				</form>
			</div>
		</div>
	)
}
