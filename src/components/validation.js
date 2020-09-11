function validation(id, value){

    let timeInput = document.getElementById("inputTime")
    let kalInput = document.getElementById("inputKal")
    let formButton = document.querySelector(".form__button")
    let validErrorTime = document.querySelector(".errorTime")
    let validErrorKal = document.querySelector(".errorKal")

    function isKalValid() {
        return /^\d+$/.test(value)            
    }
    
    function isTimeValid() {
        return /^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/.test(value)
    }

    switch(id){
        case "inputTime": 
            console.log("inputTime");
            if (!isTimeValid()){
                validErrorTime.innerHTML = " Введите значение времени в формате ЧЧ:ММ, или выберите из списка."
                timeInput.classList.remove('valid')
                timeInput.classList.add('invalid')
                formButton.classList.add('buttonOf')
            }
            else {
                validErrorTime.innerHTML = ""
                timeInput.classList.remove('invalid')
                timeInput.classList.add('valid')
            }
            break;
        
        case "timeMenu": 
        console.log("aaa");
            validErrorTime.innerHTML = ""
            timeInput.classList.remove('invalid')
            timeInput.classList.add('valid')
            break;

        case "inputKal": 
            console.log("inputKal");
            if (!isKalValid()){
                validErrorKal.innerHTML = " Введите число в поле для ввода калорийности."
                kalInput.classList.remove('valid')
                kalInput.classList.add('invalid')
                formButton.classList.add('buttonOf')
            }
            else {
                validErrorKal.innerHTML = ""
                kalInput.classList.remove('invalid')
                kalInput.classList.add('valid')
            }
            break;
        
        default: 
            console.log("Error, can't find validation element"); 
            break;
    }

    if(!/invalid/.test(timeInput.className) & !/invalid/.test(kalInput.className)){
            formButton.classList.remove('buttonOf')
    }

    document.querySelector(".form__button").addEventListener('click', (event) => {

        if(/invalid/.test(timeInput.className) || /invalid/.test(kalInput.className)) event.preventDefault()
        else {
            kalInput.classList.remove('valid')
            timeInput.classList.remove('valid')
        }
    })

}

export default validation

