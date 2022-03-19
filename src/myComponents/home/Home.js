import React from 'react'

const homePage = {
  color:'red',
  fontSize:'30px',
  marginTop:'15px'
}
const lines = {
  fontSize:'25px',
  backgroundColor:'blue'
}

export default function Home() {
  return (
    <div>

      <div style={homePage} >Home Page</div>
      <div style={lines} >
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  )
}
