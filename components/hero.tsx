import Image from 'next/image'

export const Hero = () => {
    return (
        <section className='bg-emerald-900 p-10 text-white grid items-center '>
            <div className='grid grid-cols-2 align-center justify-items-center'>
                <div className='p-1'>
                    <h1 className='text-4xl text-yellow-400 '>Little Lemon</h1>
                    <h3 className='text-2xl '>Chicago</h3>
                    <p className='w-15 mt-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aperiam iusto nihil esse dicta dolores soluta!
                        Magnam exercitationem quaerat modi amet cumque ex ipsum
                        harum, quibusdam libero expedita est fuga incidunt.
                    </p>
                    <button className='bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-xl mt-2 text-emerald-900'>
                        Reserve a Table
                    </button>
                </div>
                <div className='rounded-xl overflow-hidden absolute right-20 top-40'>
                    <Image
                        src='/assets/images/restauranfood.jpg'
                        alt='hero-img'
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </section>
    )
}
