import React from 'react'



function Lolakshi() {
    const displayGreeting=()=>{
        document.write('Hello to git World')
    }
  return (
    <div>
        <button onClick={displayGreeting}> Lolakshi</button>
    </div>
  )
}

export default Lolakshi