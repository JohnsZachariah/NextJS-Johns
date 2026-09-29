import React from 'react'

const Card = ({data}) => {
    console.log(data)
  return (
    <div>

        <div>
            
            <h2>{data.name}</h2>
            <h2>{data.channel}</h2>
            <p>{data.views}</p>
            <p>{data.time}</p>
        </div>
    </div>
  )
}

export default Card