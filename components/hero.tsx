import Image from "next/image"
import { Button } from "./button"

export const Hero = () => {
	return (
		<section className="w-full h-full bg-emerald-900  text-white grid place-items-center  ">
			<div className="grid grid-cols-1 place-items-center sm:grid-cols-2 m-6 max-w-[1200px]">
				<div className="grid place-items-center sm:place-items-start">
					<h1 className=" text-yellow-400 ">Little Lemon</h1>
					<h2>Chicago</h2>
					<p className="my-4">
						we bring you the vibrant flavors of Mediterranean cuisine, made with the
						freshest ingredients. Enjoy refreshing salads, succulent seafood, and
						zesty desserts in a warm, inviting space. Relax in our cheerful decor and
						cozy atmosphere, perfect for meals with family and friends. Our friendly
						staff is here to make your dining experience extraordinary.
					</p>
					<Button type="button" href="/reservations">
						Reserve a Table
					</Button>
				</div>
				<div className="rounded-sm hidden sm:grid right-20 top-40 ">
					<Image
						className="rounded-md w-auto h-auto"
						src="/assets/images/restauranfood.jpg"
						alt="hero-img"
						width={250}
						height={250}
					/>
				</div>
			</div>
		</section>
	)
}
