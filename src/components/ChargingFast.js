import React from 'react' ;
import '../App.css' ;
import './HeroSection.css' ;
import {ButtonReturn} from './ButtonReturn'
import {ChargingStartedFastButton} from './ChargingStartedFastButton'

function ChargingFast() {
    return (
        <div className="hero-container">
            <p></p>
            <div className="hero-btns">
                <ChargingStartedFastButton className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                  Start Fast Charging 50-150kW (Type 2)
                </ChargingStartedFastButton>
                <ButtonReturn className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Back
                </ButtonReturn>
                
            </div>
        </div>
    )
}

export default ChargingFast
