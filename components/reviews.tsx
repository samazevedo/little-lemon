import Image from "next/image"
export const Reviews = () => {
	return (
		<div className="w-full h-full max-w-[1200px] mx-auto grid grid-rows-[0.2fr_1fr] place-items-center">
			<h2 className="text-center font-bold">Testimonals</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-4">
				{reviewList.map((review) => {
					return (
						<div
							key={review.id}
							className="grid shadow-md rounded-sm p-4 bg-gray-100"
						>
							<Image
								className="rounded-full justify-self-center"
								src={review.avatar}
								alt={review.name}
								width={100}
								height={100}
							/>
							<h3 className="font-bold my-2">{review.name}</h3>
							<p className="text-sm font-bold my-2">{review.text}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

const reviewList = [
	{
		id: 1,
		name: "Michael Christopher",
		avatar: "/assets/images/profile-placeholder.svg",
		text:
			"This is the best Mediterranean restaurant I've been to! And that's saying a lot, I've been to three!",
	},
	{
		id: 2,
		name: "Jane Smith",
		avatar: "/assets/images/profile-placeholder.svg",
		text:
			"Everything is so good. I've been to three different restaurants and I've never been disappointed!",
	},
	{
		id: 3,
		name: "Laura Jones",
		avatar: "/assets/images/profile-placeholder.svg",
		text:
			"Great food! Great service! Couldn't ask for more! I'll be back again and again!",
	},
	{
		id: 4,
		name: "Marcello Garcia",
		avatar: "/assets/images/profile-placeholder.svg",
		text: "Belissimo! Love the food and the service. Definitely recommend!",
	},
	{
		id: 5,
		name: "Jen Smith",
		avatar: "/assets/images/profile-placeholder.svg",
		text:
			"My favorite place for Mediterranean food. The food is delicious and the service is top-notch!",
	},
	{
		id: 6,
		name: "Abby Johnson",
		avatar: "/assets/images/profile-placeholder.svg",
		text:
			" I love the food here. The service is also top-notch. Dessert is also delicious!",
	},
	{
		id: 7,
		name: "Jack Chan",
		avatar: "/assets/images/profile-placeholder.svg",
		text:
			"I love the food here. The service is also top-notch. Dessert is also delicious!",
	},
	{
		id: 8,
		name: "Leo Dicaprio",
		avatar: "/assets/images/profile-placeholder.svg",
		text:
			"I love dessert here and the service is great. The food is also delicious!",
	},
]
