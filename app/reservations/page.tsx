export default function Reservations() {
	return (
		<div className="w-full h-full">
			<h1>Reservations</h1>

			<form className="grid max-w-md gap-10">
				<label>Choose a date</label>
				<input type="date" id="date" />
				<label htmlFor="date">Choose time</label>
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
				<input type="submit" value="Make your reservation" />
			</form>
		</div>
	)
}
