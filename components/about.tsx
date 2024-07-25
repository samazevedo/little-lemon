import Image from "next/legacy/image"
export const About = () => {
	return (
		<div className="w-full grid bg-yellow-400 h-full">
			<div className="max-w-[1200px] mx-auto">
				<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 px-8 place-items-center">
					<div className="w-full">
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
					<div className="w-full h-full relative hidden sm:grid min-h-[600px] ">
						<div className="w-full h-full grid place-items-center">
							<div className="absolute w-[250px] h-[350px]">
								<Image
									className="w-auto h-auto object-cover"
									src="/assets/images/food02.jpeg"
									alt="hero-img"
									layout="fill"
									objectFit="cover"
									priority
								/>
							</div>
							<div className="absolute w-[250px] h-[350px] -translate-y-8 translate-x-8">
								<Image
									className="w-auto h-auto "
									src="/assets/images/food01.jpeg"
									alt="hero-img"
									layout="fill"
									objectFit="cover"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
