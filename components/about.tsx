import Image from "next/legacy/image"
export const About = () => {
	return (
		<div className="w-full grid bg-yellow-400 h-full">
			<div className="max-w-[1200px] mx-auto my-10">
				<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 p-8">
					<div className="w-full ">
						<h2 className="text-3xl font-bold">Little Lemon</h2>
						<h3 className="text-2xl font-bold">Chicago</h3>
						<p className="font-bold ">
							Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
							Despite the city&apos;s diversity, the two brothers recognized the lack
							of Mediterranean cuisine in Chicago, and were inspired to bring the
							flavors of their hometown in Italy to the people of Chicago. The two
							brothers continue to oversee the Little Lemon restaurant, nearly thirty
							years later.
						</p>
					</div>
					<div className="relative hidden sm:grid place-items-center w-full">
						<div className="relative w-[250px] h-[350px]">
							<Image
								className="w-auto h-auto object-cover"
								src="/assets/images/food02.jpeg"
								alt="hero-img"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="relative w-[250px] h-[350px] -translate-y-3/4 translate-x-1/4">
							<Image
								className="w-auto h-auto "
								src="/assets/images/food01.jpeg"
								alt="hero-img"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
