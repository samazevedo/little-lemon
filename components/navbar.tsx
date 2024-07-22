import Link from "next/link"

export const Navbar = () => {
	return (
		<nav className="hidden md:grid justify-self-end">
			<ul className="grid grid-cols-6 gap-3 place-items-center">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/menu">Menu</Link>
				</li>
				<li>
					<Link href="/reservations">Reservations</Link>
				</li>
				<li>
					<Link href="/order">Order Online</Link>
				</li>
				<li>
					<Link href="/login">Login</Link>
				</li>
			</ul>
		</nav>
	)
}
