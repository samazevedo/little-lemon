import { Button } from './button'

export const Hightlights = () => {
    return (
        <section className='p-10 grid mt-20'>
            <div className='grid grid-cols-2 align-center gap-20'>
                <h2 className='text-3xl'>This week specials!</h2>
                <Button type='button' href='/menu'>
                    Online Menu
                </Button>
            </div>
            <div>other section</div>
        </section>
    )
}
