import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
    const location = useLocation();
  return (
    <div>Hello {location.state.id} and welcome to the homepage</div>
  )
}

export default Home