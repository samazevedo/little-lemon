import Link from 'next/link'

type ButtonProps = {
    children: React.ReactNode
    type: 'submit' | 'reset' | 'button' | undefined
    href: string
}

export const Button = ({ children, type, href }: ButtonProps) => {
    return (
        <button
            type={type}
            className='bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-xl mt-2 text-emerald-900'
        >
            <Link href={href}>{children}</Link>
        </button>
    )
}
