import Link from 'next/link'

type LinkItemProps = {
    href: string
    label: string
}

export const LinkItem = ({ href, label }: LinkItemProps) => {
    return (
        <Link href={href} className=''>
            {label}
        </Link>
    )
}
