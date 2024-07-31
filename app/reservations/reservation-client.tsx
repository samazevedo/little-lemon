"use client"
import { useReducer, useEffect } from "react"
import { BookingForm } from "@/components/booking-form"
import { initialState, updateTimes, fetchTimes } from "@/store/store"

type ReservationsClientProps = {
	initialTimes: string[]
}

export default function ReservationsClient({
	initialTimes,
}: ReservationsClientProps) {
	const [state, dispatch] = useReducer(updateTimes, {
		...initialState,
		availableTimes: initialTimes,
	})

	useEffect(() => {
		const today = new Date().toISOString().split("T")[0]
		fetchTimes(dispatch, today)
	}, [])

	return <BookingForm initialAvailableTimes={state.availableTimes} />
}
