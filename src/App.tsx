import React, { useEffect, useState } from 'react';
import './App.css';
interface User {
  id:number;
  name:string;
}


function App() {

let [users ,setUsers] = useState<User[]>([])
 useEffect(() => {
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(value =>value.json())
 .then(response =>{
  setUsers(response);
 
 
 })
 },[])


  return (
    <div>
   
   {
    users.map(user =><div key={user.id}>{user.name}</div>)
   }
    
    </div>
  );
}

export default App;
