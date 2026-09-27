import React from 'react'



const page = () => {


  const instaProfile={
    name:"Matt Adlard",
    post:"754",
    followers:"1.1M",
    following:"1021",
    description:"Self taught pastry chef & best-selling author Order my new book below!"
  }
  console.log(instaProfile)





  const myObj = {
    name:"Johns",
    age:20,
    city:"New York"
  }

  console.log(myObj)

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

