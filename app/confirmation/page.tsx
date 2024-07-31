import Link from "next/link"
export default function ConfirmedBooking() {
	return (
		<div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 text-center">
				<h1 className="text-3xl font-extrabold text-emerald-600">
					Booking Confirmed!
				</h1>
				<p className="mt-2 text-lg text-gray-600">
					Thank you for your reservation. We look forward to seeing you!
				</p>
				<div className="mt-5">
					<Link href="/" className="text-emerald-600 hover:text-emerald-500">
						Return to Home
					</Link>
				</div>
			</div>
		</div>
	)
}
