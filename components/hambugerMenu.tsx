"use client"
import { useState } from "react"
import { useSpring, animated, useTransition } from "@react-spring/web"
import Link from "next/link"

export const HambugerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => setIsOpen(!isOpen)
	const transition = useTransition(isOpen, {
		from: { opacity: 0, y: -100 },
		enter: { opacity: 1, y: 0 },
		leave: { opacity: 0, y: -100 },
		config: {
			mass: 1,
			tension: 300,
			friction: 30,
			precision: 0.0001,
		},
	})

	const iconAnimation = useSpring({
		transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",

		config: {
			mass: 1,
			tension: 300,
			friction: 10,
			precision: 0.0001,
		},
	})
	return (
		<div className="grid md:hidden justify-self-end mr-2 ">
			<animated.button
				onClick={toggleMenu}
				aria-label="Toggle menu"
				className="z-10"
				style={iconAnimation}
			>
				{isOpen ? (
					<>
						<CloseIcon className="w-8  h-8" />
					</>
				) : (
					<HamburgerIcon className="w-8 h-8" />
				)}
			</animated.button>
			{transition(
				(style, item) =>
					item && (
						<div className="grid grid-rows-[1.8fr_0.2fr]">
							<animated.div
								style={style}
								className="fixed top-0 z-9 right-0 w-[100vw] h-[100vh] bg-yellow-400 text-emerald-900 grid grid-rows-6 place-items-center
                                "
								onClick={toggleMenu}
							>
								<Link href="/" className="text-4xl font-bold ">
									Home
								</Link>
								<Link href="/about" className="text-4xl font-bold ">
									About
								</Link>
								<Link href="/menu" className="text-4xl font-bold ">
									Menu
								</Link>
								<Link href="/reservations" className="text-4xl font-bold ">
									Reservations
								</Link>
								<Link href="/order" className="text-4xl font-bold ">
									Order Online
								</Link>
								<Link href="/login" className="text-4xl font-bold ">
									Login
								</Link>
								<div>socials</div>
							</animated.div>
						</div>
					)
			)}
		</div>
	)
}

const HamburgerIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg
		className={className}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4 6h12"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="square"
		/>
		<path
			d="M8 12h12"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="square"
		/>
		<path
			d="M6 18h12"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="square"
		/>
	</svg>
)

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M18 6L6 18"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6 6L18 18"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
