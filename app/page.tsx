import { Hero, Hightlights } from "@/components"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"

export default function Home() {
	return (
		<main className="w-100 mx-auto ">
			<Hero />
			<Hightlights />
			<Reviews />
			<About />
		</main>
	)
}
