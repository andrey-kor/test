import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TimeMenu from './TimeMenu'
import imageClock from '../img/clock.svg'
import imageEat from '../img/burger.svg'
import validation from './validation'

 function AddEatingItem({onCreate}){
     const [valueTime, setTime] = useState('')
     const [valueKal, setKal] = useState('')

    function submitHandler(event){
        event.preventDefault()
        
        if (valueTime.trim() && valueKal.trim()){
            onCreate(valueTime, valueKal)
            setTime('')
            setKal('')
        }
    }

    function clearPlace(input){
        input.placeholder = ""
    }
    
   return(
       <div className='form-wrapper'>
        <form className="form__addEatingItem" onSubmit={submitHandler}>
            <div className = "wrapper-inputItemBlock">
                <img src={imageClock} className="imageClock" alt="arrow left"/>

                <div className="time__wrapper">
                    <input id="inputTime" className="addEatingItem-time" 
                    placeholder="время" value={valueTime} autoComplete="off" required

                    onChange = {event => {setTime(event.target.value)
                        validation(event.target.id, event.target.value)
                    } }
                    
                    onFocus = {event => {clearPlace(event.target)
                        document.querySelector(".timeMenu").style.display = "block"}}
                    />
                    
                    {document.addEventListener('click', (event) => {
                        if(event.target.id !== ("inputTime")) {
                            document.querySelector(".timeMenu").style.display = "none"
                        }
                    })}
                                
                    <TimeMenu setTime={setTime}/>
                </div>
            </div>

            <div className = "wrapper-inputItemBlock">
                <img src = {imageEat} className="imageEat" alt="arrow right"/>
                <input id = "inputKal" className="addEatingItem-kal" 
                placeholder="кКал" value={valueKal} autoComplete="off" required

                onChange = {event => {setKal(event.target.value)
                    validation(event.target.id, event.target.value)}} 

                onFocus = {event => clearPlace(event.target)}
                />
            </div>
            <button className="form__button">Добавить</button>
            </form>
        <div>
            <span className = "errorTime"></span>
            <span className = "errorKal"></span>
        </div>
       </div>
   ) 
}

   
AddEatingItem.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddEatingItem