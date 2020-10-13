import React from 'react' ;
import '../App.css' ;
import './HeroSection.css' ;
import { ButtonReturn } from './ButtonReturn';

function ChargingFastStarted() {
    return (
        <div className="hero-container">
            <p>Fast Charging</p>
            <div className="hero-btns">
                <ButtonReturn className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                 Stop Fast Charging
                </ButtonReturn>

                
            </div>
        </div>
    )
}

export default ChargingFastStarted
