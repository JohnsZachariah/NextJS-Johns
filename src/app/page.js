import React from 'react'



const page = () => {

  const table = () => {
    for(let i=0;i<=10;i++){
      console.log(5,"x",i,"=",5*i)
    }
  }
  table()

  let name="Johns"

  const Greet = (a) =>{
    console.log("Hello my name is",a)
  }

  console.log(Greet(name))

  const Add = (a,b) => {
    return a + b                                                   
  }
  console.log("Addition Result:",Add(2,3))

  return (
    <div>page</div>
  )
}

export default page

