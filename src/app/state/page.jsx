import React, { useState } from 'react';

const Page = () => {
  const arr = ["apple", "orange"];
  const db = "mysql";
  const [name, setName] = useState(db);
  const [newarr, setNewArr] = useState(arr);
  return (
    <div>
        {arr.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      <div>{db}</div>
      <button onClick={() => setName("Mongo db")}>click me</button>
      <div>{name}</div>
    </div>
  );
};

export default Page;


