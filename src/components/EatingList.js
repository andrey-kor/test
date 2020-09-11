import React from 'react'
import {nanoid} from 'nanoid'
import PropTypes from "prop-types"
import EatingItem from "./EatingItem"

 function EatList({currentDay, rmItem}){ 
    return (
        <ul className="eatingItem-list">   
            { currentDay.eating.map((eatingItem, id) => {
                return (
                <EatingItem 
                eatingItem = {eatingItem}
                key={nanoid()}
                rmItem = {rmItem}
                id = {id}
                />
                )
            }) }
        </ul>              
    )
}

EatList.propTypes = {
    rmItem: PropTypes.func.isRequired
}

export default EatList