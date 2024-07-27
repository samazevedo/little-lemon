// import { BookingAction } from "../actions"
// import { BookingState } from "@/types/types"

// export const initialState: BookingState = {
// 	availableTimes: [],
// 	selectedDate: "",
// 	selectedTime: "",
// 	name: "",
// 	email: "",
// 	phone: "",
// 	guests: 1,
// 	occasion: "",
// 	message: "",
// }

// export const bookingReducer = (
// 	state: BookingState,
// 	action: BookingAction
// ): BookingState => {
// 	switch (action.type) {
// 		case "SET_AVAILABLE_TIMES":
// 			return { ...state, availableTimes: action.payload }
// 		case "SELECT_DATE":
// 			return { ...state, selectedDate: action.payload }
// 		case "SELECT_TIME":
// 			return { ...state, selectedTime: action.payload }
// 		case "UPDATE_FIELD":
// 			return { ...state, [action.payload.field]: action.payload.value }
// 		default:
// 			return state
// 	}
// }
