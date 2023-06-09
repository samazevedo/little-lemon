import Head from 'next/head'

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content='Little Lemon Restaurant, Food made with passion.'
                />
                <meta name='og:title' content='LIttle Lemon Restaurant' />
                <meta
                    name='og:description'
                    content='Little Lemon Restaurant, Food made with passion.'
                />
                <meta name='og:image' content='/public/next.svg' />
                <title>Little Lemon Restaurant</title>
            </Head>
            <main>{children}</main>
        </>
    )
}
