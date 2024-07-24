import Image from "next/image"
interface CardProps {
	title: string
	description: string
	src: string
	price: string
}
export const Card = ({ title, description, src, price }: CardProps) => {
	return (
		<div className="grid grid-rows-[0.5fr_0.5fr_0.1fr] bg-gray-100 overflow-hidden shadow-lg rounded-t-md">
			<Image
				src={src}
				alt={title}
				width={150}
				height={150}
				className="w-full h-auto rounded-t-md object-center "
			/>

			<div className="grid grid-rows-[1fr_1fr] p-4 ">
				<div className="w-full grid grid-cols-2 items-center ">
					<h3 className="text-lg font-bold justify-self-start">{title}</h3>
					<p className="text-orange-600 font-bold  justify-self-end">{price}</p>
				</div>

				<p className="text-md ">{description}</p>
			</div>
			<div className="grid items-end justify-start p-4 ">
				<h3 className="text-md font-bold  ">Order a delivery</h3>
			</div>
		</div>
	)
}
