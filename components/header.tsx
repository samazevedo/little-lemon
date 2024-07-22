import { Navbar } from "./navbar"
import { Logo } from "./logo"
import { HambugerMenu } from "./hambugerMenu"

export default function Header() {
	return (
		<header className="grid grid-cols-2 md:grid-cols-[0.3fr_1.7fr]">
			<Logo />
			<Navbar />
			<HambugerMenu />
		</header>
	)
}
