import React from 'react'
import { IoIosHome } from "react-icons/io";
import '../styles/Dragões.css'
import { Link } from 'react-router-dom';

function Dragões() {
  return (
    <div>
      <div className='TopD'>

       <div className='divIcon'><Link to='/'> <IoIosHome className='IconHomeD'/></Link></div>

       <h1 className='TitleD'>Escolham seus DRAGÕES!</h1>

      </div>
    </div>
  )
}

export default Dragões
