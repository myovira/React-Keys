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
import TimerApp from './componant/TimerApp'
import ColorSwitcher from './componant/ColorSwitcher'
import SearchFilter from './componant/SearchFilter'
import FetchDisplayAPI from './componant/FetchDisplayAPI'
import ImageCarousel from './componant/ImageCarousel'


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
    <Route path='timerapp' element={<TimerApp/>} />
    <Route path='colorswitcher' element={<ColorSwitcher/>}/>
    <Route path='searchfilter' element={<SearchFilter />} />
    <Route path='fetchapi'element={<FetchDisplayAPI/>}/>
    <Route path='imagecarousel' element={<ImageCarousel/>} />
    </Routes>
    </Router>
   
    </>
  );
}

export default App
