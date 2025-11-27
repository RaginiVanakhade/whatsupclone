import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import WpHomePage from "./pages/WpHomePage"
import WpProfile from "./pages/WpProfile"
import WpChat from "./pages/WpChat"
import WpPageNotFount from "./pages/WpPageNotFount"
// import { useState } from "react"

import Home from "./Components/Home"
// import Log from "./Components/log"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}/> 
    <Route path="/Home" element={<Home />}/>
    <Route path="/wphomepage" element={<WpHomePage />}/>
     <Route path="/wpprofile" element={<WpProfile/>}/>
      <Route path="/wpchat/:uniqueId" element={<WpChat/>}/>
      <Route path="/wppagenotfound" element={<WpPageNotFount/>}/>
    </Routes> 
    
       </>
  )
}

export default App


