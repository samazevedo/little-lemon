import { useReducer, useEffect, Suspense } from "react"
import Image from "next/image"
import { fetchAvailableTimes } from "../actions/bookingActions"
import ReservationsClient from "./reservation-client"
export default async function Reservations() {
	const initalTimes = await fetchAvailableTimes(new Date().toISOString())

	return (
		<main className="grid grid-rows-[0.5fr_1.5fr]">
			<header className="w-full h-full grid place-items-center relative ">
				<Image
					src="/assets/images/restaurant.jpg"
					alt="hero-img"
					className="w-full h-full"
					priority
					fill
				/>
				<h1 className="absolute bg-emerald-900 text-center text-yellow-400 text-2xl rounded-md px-4 py-2">
					Book a table
				</h1>
			</header>
			<section className="w-full">
				<Suspense fallback={<div>Loading...</div>}>
					<ReservationsClient initialTimes={initalTimes} />
				</Suspense>
			</section>
		</main>
	)
}
