import React from 'react'

function DataUser ({setUser, user}) { 

    window.addEventListener('load', submit)
    function submit(){
        document.querySelector('.popup__form').addEventListener('submit', submitHandler)
    }

    function validOk(element){
        let errorString = document.querySelector('.popup__error')
        element.classList.remove('invalid')
        element.classList.add('valid')
        errorString.innerHTML = ""
    } 

    function validErr(element){
        element.classList.remove('valid')
        element.classList.add('invalid')
    }

    function valid(id, value){
        let element = document.getElementById(id)
        let errorString = document.querySelector('.popup__error')
        switch (id) {
            case "inputName":
                if (/^([а-я]+|[a-z]+)$/ui.test(value)) validOk(element)                
                else {
                    validErr(element)
                    errorString.innerHTML = "Имя может содержать только буквы"
                }
                break
            case "inputDate": 
                let yearInput = value.slice(0,4)
                let yearCurrent = new Date().getFullYear()
                if (yearInput>1920 && yearInput<yearCurrent) validOk(element)  
                else {
                    validErr(element)
                    errorString.innerHTML = "Проверьте корректность введённой даты"
                }
                break
            case "inputGrowth": 
            if (value>50 && value<220) validOk(element)  
            else {
                validErr(element)
                errorString.innerHTML = "Рост не может быть меньше 50 и больше 220 см"
            }
            break
            case "inputWeight":
            if (value>20 && value<200) validOk(element)  
            else {
                validErr(element)
                errorString.innerHTML = "Вес не может быть меньше 20 и больше 200 кг"
            }
            break
            default: console.log("can't find classes inputs");
        }
    }

    function convertDate (value){
        return `${value.slice(8,10)}.${value.slice(5,7)}.${value.slice(0,4)}`
    }

    function submitHandler(event){

        event.preventDefault()
        let inputs = document.querySelectorAll('.popup__form input')
        let counterValid = 0
        for (let input of inputs){
           let isValid = /invalid/.test(input.className) 
            if (isValid) {
               document.querySelector('.popup__error').innerHTML = "Пожалуйста, исправьте некорректные значения"
                return
            }
            else counterValid += 1
        }
            console.log("valid", counterValid);

        if (counterValid === 6) {
            setUser(user = {
                name: document.querySelector('#inputName').value,
                sex: document.querySelector('#inputSex') ? "м" : "ж",
                dateBirth: convertDate(document.querySelector('#inputDate').value),
                weight: document.querySelector('#inputWeight').value,
                growth: document.querySelector('#inputGrowth').value,
            })
            
            document.querySelector(".popup__outer").style.opacity = "0"; 
            setTimeout(displayNone, 500)

            function displayNone(){
                document.querySelector(".popup__outer").style.display = "none"
            }
        }
    }

    return (
        <div className = "popup__outer">
            <div className = "popup__wrapper"> 
                <form className = "popup__form" >
                    <div className = "input__wrapper">
                        <span className = "input-text">Ваше имя:</span>
                        <input id = "inputName" type = "text" placeholder = "Имя" required autoComplete="off" className = "popup-input input-name"
                        onChange ={ event => {
                            valid (event.target.id, event.target.value)
                        }}
                        />    
                    </div>
                    <div className = "input__wrapper">
                        <span className = "input-text">Пол:</span>
                        <div className = "span-wrapper">
                            <div><input name = "sex" id = "inputSex" type = "radio" value = "м" required autoComplete="off" className = "input-sex"/>м</div>
                            <div><input name = "sex" id = "inputSex" type = "radio" value = "ж" required autoComplete="off" className = "input-sex"/>ж</div>    
                        </div>
                    </div>
                    <div className = "input__wrapper">
                        <span className = "input-text">Дата рождения:</span>
                        <input id = "inputDate" type = "date" required className = "popup-input input-date" 
                        onBlur ={ event => {
                            valid (event.target.id, event.target.value)
                        }}
                        />    
                    </div>
                    <div className = "input__wrapper">
                        <span className = "input-text">Рост:</span>
                        <input id = "inputGrowth" type = "text" required autoComplete="off" placeholder = "Рост, см" className = "popup-input input-growth"
                        onBlur ={ event => {
                            valid (event.target.id, event.target.value)
                        }}
                        />    
                    </div>
                    <div className = "input__wrapper">
                        <span className = "input-text">Вес:</span>
                        <input id = "inputWeight" type = "text" required autoComplete="off" placeholder = "Вес, кг" className = "popup-input input-weight"
                        onBlur ={ event => {
                            valid (event.target.id, event.target.value)
                        }}
                        />    
                    </div>
                    <span className = "popup__error"></span>
                    <button className="popup__buttonSend">Рассчитать</button>
                </form>
            </div>
        </div>
    )
}

export default DataUser