import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
	return (
		<Link href="/" className="ml-2">
			<Image
				src="/assets/images/logo.svg"
				alt="logo"
				width={150}
				height={150}
				className="w-auto h-auto"
				priority
			/>
		</Link>
	)
}
