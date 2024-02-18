import './header.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

export default function Header(){
    return(
        <>
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt='gray cat on a computer with a bookshelf behind' loading='lazy'/>
                <Link className='main-logo' to='/'>TECH-CAT </Link>
            </div>
            <div className='navs'>
                <Link className='nav-link' to='/login'>LOGIN</Link>
                <Link className='nav-link' to='/register'>SIGN UP</Link>

            </div>
        </header>
        </>
    )
}