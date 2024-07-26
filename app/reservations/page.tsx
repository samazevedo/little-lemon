"use client"
import { useEffect, useRef } from "react"
import { Button } from "@/components/button"
import Image from "next/legacy/image"
import { BookingForm } from "@/components/booking-form"

interface FormData {
	name: string
	email: string
	phone: string
	date: Date
	time: Date
	guests: number
	occasion: string
	comments: string
}

export default function Reservations() {
	const inputRef = useRef<HTMLInputElement>(null!)
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		alert("submit")
	}

	return (
		<div className="w-full h-full grid grid-rows-3 mb-40">
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
			<section className="w-full min-h-[300px] grid place-items-center mt-10">
				<BookingForm />
			</section>
		</div>
	)
}
