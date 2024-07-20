import { Logo } from "./logo"
import { Nav } from "./nav"
import logo from "../public/assets/images/Logo.svg"

export default function Header() {
	return (
		<header className="bg-emerald-900">
			<Logo src={logo} alt="logo" />
			<Nav />
		</header>
	)
}
