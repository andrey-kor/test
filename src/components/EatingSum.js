import React from 'react'
import PropTypes from 'prop-types'

function EatingSum(props){ 
    let eating = props.currentDay.eating
    let sumKal = 0

    function sum(eating){
        for (let eatingItem of eating){
            sumKal += +eatingItem.kal
        }
        return sumKal
    } 
  
    sum(eating)

    if (sumKal > 5000) alert("Вы уверены, что смогли столько съесть? Проверье корректность данных")

    return(
        <div className="eatingSum">
            <h3> Итого за день: </h3>
            <span className="eatingSum__num" style={sumKal <= (+sessionStorage.getItem('caloriesNorm')) ? {color: "green"} : {color: "red"}}> {sumKal} </span>
            <span>&nbsp;кКал</span>
        </div>  
    ) 
}

EatingSum.propTypes = {
    eating: PropTypes.array
}

export default EatingSum