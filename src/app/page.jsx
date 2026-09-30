import React from 'react'
import Card from './components/Card'  



const page = () => {


  
  const YtVideo=[
    {
    name: 'Gold Rush Vedio Song',
    channel: 'Sony Music South',
    views: 582000,
    time: '1 day ago'
    },
    {
    name: 'King Pin',
    channel: 'Sony Music South',
    views: 58200,
    time: '1 day ago'
    }
    
]

  return(
      <div>
        <Card data={YtVideo}/>
 
<div>
  {
    YtVideo.map((data)=>{
      return(
        <p key={data.id}>{data.Name}</p>
      )
    })
  }
</div>
  
</div>
  )
} 


export default page














