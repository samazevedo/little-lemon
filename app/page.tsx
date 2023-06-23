import { Hero, Hightlights } from '@/components'

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <main className='w-100 '>
            <Hero />
            <Hightlights />
        </main>
    )
}
