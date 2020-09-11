import React, {useState} from 'react';
import './App.css';
import DataUser from './components/DataUser'
import UserBlock from './components/UserBlock'
import EatingBlock from './components/EatingBlock'
import CanvasBlock from './components/CanvasBlock'

function App() {

  let [user, setUser] = useState({
    name: "Andrey",
    sex: "м",
    dateBirth: "15.03.1997",
    weight: 78,
    growth: 189,
  })

   return (
    <div className="wrapper">
      <h1>Calory App</h1>
      <DataUser setUser = {setUser} user = {user}/>
      <UserBlock user = {user}/>
      <EatingBlock/>
      <CanvasBlock/>  
    </div>
  )
}

export default App;
