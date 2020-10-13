import React from 'react' ;
import '../App.css' ;
import './HeroSection.css' ;
import { ButtonReturn } from './ButtonReturn'
import {ChargingStartedButton} from './ChargingStartedButton'

function Charging() {
    return (
        <div className="hero-container">
            <p></p>
            <div className="hero-btns">
                <ChargingStartedButton className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                   Start Slow Charging (22kW)
                </ChargingStartedButton>
                <ButtonReturn className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Back
                </ButtonReturn>
            </div>
        </div>
    )
}

export default Charging
