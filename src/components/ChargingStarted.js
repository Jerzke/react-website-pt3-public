import React from 'react' ;
import '../App.css' ;
import './HeroSection.css' ;
import { ButtonReturn } from './ButtonReturn';


function ChargingSlowStarted() {
    return (
        <div className="hero-container">
            <p>Slow Charging</p>
            <div className="hero-btns">
                <ButtonReturn className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                 Stop
                </ButtonReturn>

                
            </div>
        </div>
    )
}

export default ChargingSlowStarted
