export interface BookingState {
	availableTimes: string[]
	selectedDate: string
	selectedTime: string
	name: string
	email: string
	phone: string
	guests: number
	occasion: string
	message: string
}
export type BookingAction =
	| { type: "SET_AVAILABLE_TIMES"; payload: string[] }
	| { type: "SELECT_DATE"; payload: string }
	| { type: "SELECT_TIME"; payload: string }
	| {
			type: "UPDATE_FIELD"
			payload: { field: keyof BookingState; value: string | number }
	  }
