import { Logo } from './logo'
import { Nav } from './nav'
import logo from '../public/assets/images/Logo.svg'

export default function Header() {
    return (
        <header className='grid grid-cols-2 w-full pl-10'>
            <Logo src={logo} alt='logo' />
            <Nav />
        </header>
    )
}
