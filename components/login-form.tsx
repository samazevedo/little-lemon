import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface LoginFormData {
	email: string
	password: string
}
export const LoginForm = () => {
	const [formData, setFormData] = useState<LoginFormData>({
		email: "",
		password: "",
	})
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const router = useRouter()

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		setError(null)

		try {
			// Replace this with your actual login API call
			const response = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			})

			if (!response.ok) {
				throw new Error("Login failed")
			}

			// Successful login
			router.push("/dashboard") // Redirect to dashboard or home page
		} catch (err) {
			setError("Invalid email or password. Please try again.")
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full ">
				<div>
					<h2 className=" text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<input type="hidden" name="remember" value="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								value={formData.email}
								onChange={handleInputChange}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={formData.password}
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
							/>
							<label
								htmlFor="remember-me"
								className="ml-2 block text-sm text-gray-900"
							>
								Remember me
							</label>
						</div>

						<div className="text-sm">
							<a
								href="#"
								className="font-medium text-emerald-600 hover:text-emerald-500"
							>
								Forgot your password?
							</a>
						</div>
					</div>

					{error && <div className="text-red-500 text-sm text-center">{error}</div>}

					<div>
						<button
							type="submit"
							disabled={isLoading}
							className="group relative w-full flex  justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-emerald-300 disabled:cursor-not-allowed"
						>
							{isLoading ? (
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									<svg
										className="animate-spin h-5 w-5 text-emerald-500"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								</span>
							) : (
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									<svg
										className="h-5 w-5 text-emerald-500 group-hover:text-emerald-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
							)}
							{isLoading ? "Signing in..." : "Sign in"}
						</button>
						<div className="text-center my-2">
							Don&apos;t have an account?{" "}
							<Link href="/">
								<span className="text-emerald-600 hover:text-emerald-500">Sign up</span>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
