import { LinkItem } from './linkItem'

export const Nav = () => {
    const navItem = [
        { href: '/', label: 'home' },
        { href: '/about', label: 'about' },
        { href: '/menu', label: 'menu' },
        { href: '/reservations', label: 'reservations' },
        { href: '/order', label: 'order online' },
        { href: '/login', label: 'login' },
    ]
    return (
        <nav>
            <ul>
                {navItem.map((item) => {
                    const { href, label } = item
                    return <LinkItem href={href} label={label} key={label} />
                })}
            </ul>
        </nav>
    )
}
