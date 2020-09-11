import React from 'react'
import arrowL from '../img/arrow-left.svg'
import arrowR from '../img/arrow-right.svg'
import createToday from './createToday'


function DateNav({changeCurrantDay , currentDayIndex}){

    return(
        <div className="dateNav__wrapper">
            <div className="dateNav__button button-left" onClick={() => changeCurrantDay("left")}>
                <div className="wrapper__arrow-left">
                    <img className="dateNav__arrow" src={arrowL} alt="arrow-left"></img>
                </div>
            </div>

            <span>{createToday (currentDayIndex)}</span>
            
            <div className="dateNav__button button-right" onClick={() => changeCurrantDay("right")}> 
                <div className="wrapper__arrow-right" >
                    <img className="dateNav__arrow img-right" src={arrowR} alt="arrow-right"></img>
                </div>
    </div>
        </div>
    )
}

export default DateNav