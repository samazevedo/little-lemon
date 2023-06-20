import { Hero } from '@/components'

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-100 '>
            <Hero />
        </div>
    )
}
