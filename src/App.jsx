import React from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../components/Home';



const App = () => {
  return (
    <div >
      <Router>
        <Routes>
        <Route exact path="/" element={ <Home/>}/> 
        <Route exact path="/section1" element={ <Section1/>}/> 
        <Route exact path="/section2" element={ <Section2/>}/> 
       </Routes>
       </Router>  
       </div>     
  )
}

export default App
