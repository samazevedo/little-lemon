import Link from "next/link"
import Image from "next/image"
export default function Footer() {
	return (
		<footer className="relative w-full bg-emerald-900 text-white">
			<div className="grid grid-cols-4 place-items-top py-6 gap-4">
				<div className="grid place-items-center">
					<Image
						className="w-auto h-auto"
						src="/assets/images/logo2.png"
						alt="logo"
						width={100}
						height={100}
						priority
					/>
				</div>
				<div className="text-sm">
					<h3 className="font-bold  sm:text-xl">Navigation</h3>
					<ul>
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
							<Link href="/reservations">Reserveations</Link>
						</li>
						<li>
							<Link href="/order">Order </Link>
						</li>
						<li>
							<Link href="/login">Login</Link>
						</li>
					</ul>
				</div>
				<div className="text-sm">
					<h3 className="font-bold text-sm sm:text-xl">Contact</h3>
					<address>
						2395 Maldove Way,
						<br />
						Chicago IL 60642
						<br />
						(629)-243-6827
						<br />
						info@littlelemon.com
					</address>
				</div>
				<div className="text-sm">
					<h3 className="font-bold text-sm sm:text-xl">Connect</h3>
					<ul>
						<li>
							<a href="https://www.facebook.com/" target="_blank">
								Facebook
							</a>
						</li>
						<li>
							<a href="https://www.twitter.com/" target="_blank">
								Twitter
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/" target="_blank">
								Instagram
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div>
				{/* © 2023 - {new Date().getFullYear()} Sam Azevedo. All rights reserved */}
			</div>
		</footer>
	)
}
