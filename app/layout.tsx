import "./globals.css"
import { Karla } from "next/font/google"
import { Header, Footer } from "@/components"

const karla = Karla({ subsets: ["latin"] })

export const metadata = {
	title: "Little Lemon Restaurant",
	description: "The tradition made with passion.",
	image: "/assets/images/restauranfood.jpg",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={karla.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
