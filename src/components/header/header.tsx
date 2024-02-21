import './header.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

export default function Header(){
    return(
        <>
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt='gray cat on a computer with a bookshelf behind' loading='lazy'/>
                <Link  aria-label='redirect to home' className='main-logo' to='/'>TECH-CAT </Link>
            </div>
            <div className='navs'>
                <Link  aria-label='redirect to login' className='nav-link' to='/login'>LOGIN</Link>
                <Link  aria-label='redirect to register' className='nav-link' to='/register'>CADASTRO</Link>
                <Link   aria-label='redirect to book list'className='nav-link' to='/books'>LIVROS</Link>

            </div>
        </header>
        </>
    )
}