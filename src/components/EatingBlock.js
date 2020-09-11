import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import DateNav from './DateNav'
import EatingList from './EatingList'
import createToday from './createToday'
import EatingSum from './EatingSum'
import AddEatingItem from './AddEatingItem'
import canvasPainter from './canvasPainter'

function EatingBlock(){
    
    let [currentDayIndex, setCurrentDayIndex] = useState(0)

    let [days, setDay] = useState([
        {id: 0, date: createToday (currentDayIndex), eating: []}
    ])

    window.addEventListener('load', canvasStart)

    function canvasStart() {
        canvasPainter(days)
    }

    window.addEventListener('load', canvasSize)
    window.addEventListener('resize', canvasSize)

    function canvasSize() {
        document.querySelector('#canvas').width = String(document.querySelector(".block").clientWidth) - 40
        canvasPainter(days)
    }

    

    function changeCurrantDay(direction){
        let arrowRightStyle = document.querySelector(".img-right").style
        
        if (direction === "left"){
            currentDayIndex = setCurrentDayIndex(currentDayIndex += 1)
            if (arrowRightStyle.opacity !== 1) arrowRightStyle.opacity = 1
        }

        else if (currentDayIndex === 0) {
            arrowRightStyle.opacity = 0.5
        }

        else {
            setCurrentDayIndex(currentDayIndex -= 1)
        }
    }

    if (days.length < currentDayIndex + 1) createDay()

    function addItem (valueTime, valueKal) {
        const changedEating = days[currentDayIndex].eating.concat({
            id: days[currentDayIndex].eating.length,
            time: valueTime,
            kal: valueKal,
            key: nanoid(),
        })
       
        const result = [
            ...days.slice(0, currentDayIndex),                                                                                      
            {...days[currentDayIndex], eating: changedEating},
            ...days.slice(currentDayIndex+1)
        ]
        console.log("result", result);

        const resultEating = result[currentDayIndex].eating
        resultEating.sort((a, b) => a.time > b.time ? 1 : -1)

        setDay(days = result)
        canvasPainter(days)

    }

    function rmItem (id){
        const resultEatingArray = days[currentDayIndex].eating.filter(item => item.id !== id)

        const result = [
            ...days.slice(0, currentDayIndex),                                                                                      
            {...days[currentDayIndex], eating: resultEatingArray},
            ...days.slice(currentDayIndex+1)
        ]
        setDay(days = result)
        canvasPainter(days)
    }

    function createDay(){
        const result = [
            ...days,
            {
                id: days.length, 
                date: createToday (currentDayIndex), 
                eating: [],
            }
        ]
        console.log("newDays", result);
        setDay(days = result)
        canvasPainter(days)
    }

    return(
        <div className="block eatingBlock">
            <p className = "subtitle">Приёмы пищи</p>
            <DateNav changeCurrantDay={changeCurrantDay} currentDayIndex = {currentDayIndex}/>
            <AddEatingItem onCreate={addItem} />
            {days[currentDayIndex].eating.length > 0 ? <EatingList currentDay={days[currentDayIndex]} rmItem={rmItem}/> : 
            <p style = {{color: "#292522"}}>Дабавьте приём пищи</p>}
            <EatingSum currentDay={days[currentDayIndex]} />
        </div>
    )
}

EatingBlock.propTypes = {
    currentDayIndex: PropTypes.number,
    resultEating: PropTypes.array,
}

export default EatingBlock
