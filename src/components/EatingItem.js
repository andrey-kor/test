import React from 'react';
import PropTypes from 'prop-types'


function EatingItem({ eatingItem, rmItem, id }){ 

    return(
        <li className="li"> 
            <button 
            className="buttonRm" 
            onClick={() => rmItem(eatingItem.id)}>
            &times;
            </button>
            <strong className="liNum">{id+1 + "."}</strong>
             
            <span className="eating-time">{eatingItem.time}</span> 
            <span>{eatingItem.kal}</span>
            <span>&nbsp;кКал</span>   
        </li>
    )
}

EatingItem.propTypes = {
    id: PropTypes.number,
    eatingItem: PropTypes.object.isRequired,
    rmItem: PropTypes.func.isRequired,
}

export default EatingItem