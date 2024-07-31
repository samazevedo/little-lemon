import { fetchAPI, submitAPI } from "../utils/api"
export async function fetchAvailableTimes(
	dateString = new Date().toISOString()
) {
	// Convert the date string to a Date object
	const date = new Date(dateString)
	// Use the fetchAPI function to get available times
	const times = fetchAPI(date)
	return times
}

export async function submitBooking(formData = {}) {
	// Use the submitAPI function to submit the booking
	const result = submitAPI(formData)
	return { success: result }
}
