import React from 'react'
import './App.css'
import Home from './componant/Home'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import TodoList from './componant/TodoList'
import ToggleVisibility from './componant/ToggleVisibility'
import SimpleAdditionApp from './componant/SimpleAdditionApp'
import ClickTracker from './componant/ClickTracker'
import CounterApp from './componant/CounterApp'
import Mode from './componant/Mode'


const App = () => {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home'element={<Home/>}/>
    <Route path='todolist' element={<TodoList />}/>
    <Route path='toggle' element={<ToggleVisibility/>}/>
    <Route path='counterapp' element={<CounterApp />} />
    <Route path='additionapp'element={<SimpleAdditionApp/>} />
    <Route path='clicktracker' element={<ClickTracker />} />
    <Route path='mode' element={<Mode/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App
