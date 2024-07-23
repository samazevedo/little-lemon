import Link from "next/link"

type ButtonProps = {
	children: React.ReactNode
	type: "submit" | "reset" | "button" | undefined
	href: string
}

export const Button = ({ children, type, href }: ButtonProps) => {
	return (
		<button
			type={type}
			className="w-auto bg-yellow-400 hover:bg-black hover:text-yellow-400 rounded-md px-4 py-2 text-emerald-800 font-bold transition duration-200 ease-linear shadow-md"
		>
			<Link href={href}>{children}</Link>
		</button>
	)
}
