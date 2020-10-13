import React from 'react'
import './HeroSection.css' ;
import './Button.css'
import {SignInButtonSuccess} from './SignInButtonSuccess'


export default function MapSite() {
    return (
        <div className="hero-container">
        <div className="hero-btns">
            <label><b>Username</b></label>
            <input type='text' placeholder='Username' name='uname' required className='btns' buttonStyle='btn--outline'></input>
            <label><b>Password</b></label>
            <input type='password' placeholder='Enter Password' name='psw' required className='btns' buttonStyle='btn--outline'></input>
            <SignInButtonSuccess className='btns--primary'> Press Here To Sign In </SignInButtonSuccess>
        
        </div>
    </div>
)
}
