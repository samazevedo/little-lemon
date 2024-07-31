"use client"
import { LoginForm } from "@/components/login-form"

export default function Login() {
	return (
		<main>
			<div className="w-full h-full grid place-items-center grid-rows-[0.2fr_1.8fr]">
				<header>
					<h1>Login</h1>
				</header>
				<section className="w-full h-full">
					<LoginForm />
				</section>
			</div>
		</main>
	)
}
