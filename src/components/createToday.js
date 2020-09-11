function createToday(currentDayIndex){

    function day() {
        let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
        return days[dateFull.getDay()]
    }

    function userDate() {
        if (dateFull.getDate() < 10) return `0${dateFull.getDate()}`
        return dateFull.getDate()
    }

    function userMonth(){
        if (dateFull.getMonth()+1 < 10) return `0${dateFull.getMonth()+1}`
        return dateFull.getMonth()+1
    }
    
    let dateFull = new Date()
    dateFull.setDate(dateFull.getDate() - currentDayIndex)

    return(`${day()}, ${userDate()}.${userMonth()}.${dateFull.getFullYear()}`)
}

export default createToday


