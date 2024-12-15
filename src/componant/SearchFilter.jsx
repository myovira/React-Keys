import React, { useState } from 'react'
import "./searchfilter.css"
import { Users } from './users';


const SearchFilter = () => {

  const [query,setquery]=useState("");

console.log(query);

  return (
    <div className='searchfilter'>
      <input type='text' placeholder='Search...' className='search' onChange={(e) => setquery(e.target.value)}></input>
      <ul className='list'>
        {Users.filter((user) =>
        user.first_name.toLowerCase().includes(query))
        .map((user) =>(

<li key={user.id}className='listItems'>{user.first_name}</li>
        ))}
        
      </ul>
    </div>
  )
}

export default SearchFilter
