import React from 'react'
import "./Card.css"
const Card = ({imoji,heading,detail}) => {
  return (
    <div>
      <div className="card">
            <img src={imoji} alt="" />
            <span>
                {heading}
            </span>
            <span style={{color:'black'}}>
                {detail}
            </span>
      </div>
      
    </div>
  )
}

export default Card
