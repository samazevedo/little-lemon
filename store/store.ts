declare const fetchAPI: (date: string) => Promise<string[]>

interface State {
	availableTimes: string[]
	loading: boolean
	error: string | null
}

interface Action {
	type: string
	payload?: any
}

const initialState: State = {
	availableTimes: [],
	loading: false,
	error: null,
}

const updateTimes = (state: State, action: Action): State => {
	switch (action.type) {
		case "FETCH_TIMES_REQUEST":
			return { ...state, loading: true, error: null }
		case "FETCH_TIMES_SUCCESS":
			return { ...state, loading: false, availableTimes: action.payload }
		case "FETCH_TIMES_FAILURE":
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}

const fetchTimes = async (dispatch: React.Dispatch<Action>, date: string) => {
	dispatch({ type: "FETCH_TIMES_REQUEST" })

	try {
		const availableTimes = await fetchAPI(date)
		dispatch({ type: "FETCH_TIMES_SUCCESS", payload: availableTimes })
	} catch (error) {
		dispatch({ type: "FETCH_TIMES_FAILURE", payload: error })
	}
}

export { initialState, updateTimes, fetchTimes }
