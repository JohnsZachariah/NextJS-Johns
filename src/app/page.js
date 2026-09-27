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


const instaPost=[
    {profilephoto:"image_url", profilename:"ruff_and_puff"},
    {postphoto:"post_url"},
    {likes:"1,000,000",comments:"1000",shares:"1000"},
    {caption:"Dog days are over, sweaters come to play,Leave fall, I trip, autumn's here to stay"},
    {hastags:"#dog #sweaterweather #fallvibes #autumnleaves #cozyseason"}
]


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

