// import React from 'react'

import { useState } from "react"
import axios from "axios"

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function handleSubmit(event) {
     event.preventDefault()
     axios.post('http://localhost:3001/login', {email, password})
     .then((res) => console.log(res))
     .catch((err) => console.log(err))
  }
  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Enter Email</label>
            <input type="email"  onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Enter Password</label>
            <input type="password"  onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Log