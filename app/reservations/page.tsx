import { useReducer, useEffect, Suspense } from "react"
import Image from "next/legacy/image"
import { BookingForm } from "@/components/booking-form"
import { initialState, updateTimes, fetchTimes } from "@/store/store"
import { fetchAvailableTimes } from "../actions/bookingActions"
import ReservationsClient from "./reservation-client"

export default async function Reservations() {
	const initalTimes = await fetchAvailableTimes(new Date().toISOString())

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
				<Suspense fallback={<div>Loading...</div>}>
					<ReservationsClient initialTimes={initalTimes} />
				</Suspense>
			</section>
		</div>
	)
}
