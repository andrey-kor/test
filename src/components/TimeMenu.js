import React from 'react';
import validation from './validation';

function TimeMenu({setTime}){

    const times = [
        {id: 0, value: "00:00"},
        {id: 1, value: "01:00"},
        {id: 2, value: "02:00"},
        {id: 3, value: "03:00"},
        {id: 4, value: "04:00"},
        {id: 5, value: "05:00"},
        {id: 6, value: "06:00"},
        {id: 7, value: "07:00"},
        {id: 8, value: "08:00"},
        {id: 9, value: "09:00"},
        {id: 10, value: "10:00"},
        {id: 11, value: "11:00"},
        {id: 12, value: "12:00"},
        {id: 13, value: "13:00"},
        {id: 14, value: "14:00"},
        {id: 15, value: "15:00"},
        {id: 16, value: "16:00"},
        {id: 17, value: "17:00"},
        {id: 18, value: "18:00"},
        {id: 19, value: "19:00"},
        {id: 20, value: "20:00"},
        {id: 21, value: "21:00"},
        {id: 22, value: "22:00"},
        {id: 23, value: "23:00"},
    ]

    function makeLi(times){
        return(

            <ul className="timeMenu-ul">
                {times.map(item => {
                return(
                    <li id = "timeMenu" className="timeMenu-li"
                    key={item.id}
                    onClick={event => {
                        setTime(event.target.innerHTML)
                        validation(event.target.id, event.target.value)
                        }}>
                        {item.value}
                    </li>)})}
            </ul>
        )
    }   

    return(
        <div className="timeMenu">
            {makeLi(times)}
        </div>
    )
}

export default TimeMenu