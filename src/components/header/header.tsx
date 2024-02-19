import './header.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

export default function Header(){
    return(
        <>
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt='ginger cat with glasses reading a book' loading='lazy'/>
                <Link className='main-logo' to='/'>CAT TALES </Link>
            </div>
            <div className='navs'>
                <Link className='nav-link' to='/login'>LOGIN</Link>
                <Link className='nav-link' to='/register'>SIGN UP</Link>
                <Link className='nav-link' to='/cart'>Cart</Link>

            </div>
        </header>
        </>
    )
}