import React, {useState, useEffect} from 'react' ;
import { Link } from 'react-router-dom';
import './Navigation.css';
import {SignInButton} from './SignInButton'
function Navigation() {

    const [click, setClick] = useState(false) ;
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false) ;

    const ShowButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        } 
    } ;
    useEffect(() => {
        ShowButton();
      }, []);

  
    window.addEventListener('resize', ShowButton)

    return (
        <>
<nav className="navbar">
<div className="navbar-container">
 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
    Charge Inc <i className='fab fa-typo3'/>
 </Link>
 <div className="menu-icon" onClick={handleClick}>
     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
 </div>

</div>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>
  <li className='nav-item'>
      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
      Home
      </Link>
  </li>
  <li>
      <Link to='/Map' className='nav-links' onClick={closeMobileMenu}>
     Map
      </Link>
  </li>
  <li className='nav-item'>
      <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
      Pricing
      </Link>
      
      <li className='nav-item'>
      <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
      Sign In
      </Link>
  </li>
  </li>
</ul>
{button && <SignInButton buttonStyle='btn--outline'>Sign in</SignInButton>}
</nav>
        </>
    )
}

export default Navigation
