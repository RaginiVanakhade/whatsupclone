import { Route, Routes } from "react-router-dom"
// import Login from "./Components/Login"
import WpHomePage from "./Components/WpHomePage"
// import WpProfile from "./Components/WpProfile"
// import WpChat from "./Components/WpChat"
// import WpPageNotFount from "./Components/WpPageNotFount"
// import { useState } from "react"
import Log from "./Components/log"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Log />}/>
      <Route path="/wphomepage" element={<WpHomePage/>}/>
      {/* <Route path="/wpprofile" element={<WpProfile/>}/>
      <Route path="/wpchat/:uniqueId" element={<WpChat/>}/>
      <Route path="/wppagenotfound" element={<WpPageNotFount/>}/> */}
    </Routes> 
    
       </>
  )
}

export default App


