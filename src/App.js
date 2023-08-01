import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import { Route, Routes } from 'react-router-dom';

import Nabvar from './Nabvar';
import News from './News';

import './App.css'


function App() {
  
  return (
    <>    
    <Nabvar/>  
    <Routes>
        <Route exact path='/' element={<News key='general' category='general'/>}/>
        <Route exact path='/business' element={<News key='business' category='business'/>}/>
        <Route exact path='/entertainment' element={<News key='entertainment' category='entertainment'/>}/>
        <Route exact path='/health' element={<News key='health' category='health'/>}/>
        <Route exact path='/science' element={<News key='science' category='science'/>}/>
        <Route exact path='/sports' element={<News key='sports' category='sports'/>}/>
        <Route exact path='/technology' element={<News key='technology' category='technology'/>}/>
    </Routes>

    </>
  )
}

export default App
