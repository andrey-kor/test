import React from 'react'

function UserBlock({user}){

    let age = 0;
    let caloriesNorm = 0;

    function userAge(user){
        let nowDate = [];
        nowDate.push(new Date().getDate(), new Date().getMonth()+1, new Date().getFullYear())
        let birthDate = user.dateBirth.split(".")
        age = nowDate[2] - birthDate[2]

        if((nowDate[1] < birthDate[1]) || ((nowDate[1] === birthDate[1]) & (nowDate[0] < birthDate[0])))  age -=1
        return age + printYear(age)
    }   

    function printYear(age){
        if ((age%10 === 1) && (age !== 11)) return " год"
        else if ((age%10 >= 2) && (age%10 <=4) && (age !== 12) && (age !==13) && (age !==14)) return " года"
        else return " лет"
    }

    function calculateCal(user){
    
        function calcM(user){
            caloriesNorm = Math.round(66 + (13.7 * user.weight) + (5 * user.growth) - (6.76 * age))
            delete localStorage.caloriesNorm
            sessionStorage.setItem('caloriesNorm', caloriesNorm);
            return caloriesNorm
        }
    
        function calcW(user){
            caloriesNorm = Math.round(655 + (9.6 * user.weight) + (1.8 * user.growth) - (4.7 * age))
            delete localStorage.caloriesNorm
            sessionStorage.setItem('caloriesNorm', caloriesNorm);
            return caloriesNorm
        }

        return user.sex === "м" ? calcM(user) : user.sex === "ж" ? calcW(user) : " Невозможно посчитать - ошибка данных "
    }

    return(
        <div className="block userBlock">
            <p className = "subtitle">Пользователь</p>
            <p>{user.name}, {user.dateBirth}</p>
            <p>Рост: {user.growth} см.</p>
            <p>Вес: {user.weight} кг.</p>
            <p>Возраст: {userAge(user)}</p>
            <p>Норма потребления: <span id="calories_norm">{calculateCal(user)}</span> кКал</p>
        </div>
    )
}

export default UserBlock