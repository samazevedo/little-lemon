import { Button } from "./button"
import { Card } from "./card"

const cards = [
	{
		title: "Greek salad",
		description:
			"The famous greek salad of crispy lettuce, peppers, olives and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		src: "/assets/images/greek-salad.jpg",
		price: "$12.99",
	},
	{
		title: "Bruchetta",
		description:
			"Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		src: "/assets/images/bruchetta.svg",
		price: " $5.99",
	},
	{
		title: "Lemon Dessert",
		description:
			"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		src: "/assets/images/lemon-dessert.jpg",
		price: "$5.00",
	},
]

export const Hightlights = () => {
	return (
		<section className="max-w-[1200px] mx-auto p-4">
			<div className="w-full grid grid-rows-2  sm:grid-cols-2">
				<h2 className="font-bold self-start sm:self-center">This week specials!</h2>
				<Button type="button" href="/menu">
					Online Menu
				</Button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{cards.map((card) => (
					<Card
						key={card.title}
						title={card.title}
						description={card.description}
						src={card.src}
						price={card.price}
					/>
				))}
			</div>
		</section>
	)
}
