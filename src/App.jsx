import React from 'react'
import "./App.css";
import { Users } from './users';
import { useState } from 'react';
import Table from './Table';

const App = () => {
  const [query, setQuery]=useState("")
const search=(data)=>{
  return data.filter(
    (item)=>
    item.first_name.toLowerCase().includes(query) ||
     item.last_name.toLowerCase().includes(query) ||
item.email.toLowerCase().includes(query)
  )
}
  return (
    <div className='App'>
   <input type="text" placeholder='search...' className='search' onChange={(e)=> setQuery(e.target.value)} />
   <Table data={search(Users)} />
    </div>
  )
}

export default App


