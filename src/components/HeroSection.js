import React from 'react' ;
import '../App.css' ;
import { Button } from './Button' ;
import './HeroSection.css' ;
import {Button2} from './Button2'

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Adventure time</h1>
            <p>Charging Options</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Charge slow 22Kw (CCS)
                </Button>
                <Button2 className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Charge fast 50-150kW (Type2)<i className='btn--primary' />
                </Button2>
            </div>
        </div>
    )
}

export default HeroSection
