import Link from 'next/link'
import Image from 'next/image'

type logoProps = {
    src: string
    alt: string
}

export const Logo = ({ src, alt }: logoProps) => {
    return (
        <Link href='/'>
            <Image src={src} alt={alt} width={150} height={50} />
        </Link>
    )
}
