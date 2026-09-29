import React from 'react'
import Card from './components/Card'



const page = () => {


  const obj1 = { name: 'John', age: 19, rollno:38}

  const YTVedio={
    name: 'Gold Rush Vedio Song',
    channel: 'Sony Music South',
    views: 582000,
    time: '1 day ago'
  }

  return (
    <div>
      <h1 className='text-8xl text-center text-teal-600'>Project</h1>
      <p className='text-8xl text-center' >Name: {obj1.name}</p>
      <p className='text-8xl text-center'>Age: {obj1.age}</p>
      <p className='text-8xl text-center'>Roll No: {obj1.rollno}</p>

      <Card data={YTVedio}/> 

    </div>
  )
}

export default page














