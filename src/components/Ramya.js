import React from 'react'

function Ramya() {

  const wish=()=>{
    document.write("welcome lola")
  }
  return (
    <div>
        <h1>This is Ramya Component</h1>
        <h1>Changes done by jagath</h1>
        <button onclick={wish}>Lolakshi</button>
    </div>
  )
}

export default Ramya