import React from 'react'

const Cardd = (prop) => {
  return (
    <div className="Parent">
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1781833001413-be0b4c1b3b9e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <h1>{prop.user},
           {prop.age}</h1>
        <p>Loremsit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Cardd
