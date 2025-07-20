import React, { useState }  from 'react';
import './App.css';
import Users from './components/users/Users';
import { IUser } from './models/IUserModel';
import { ITodo } from './models/ITodoModel';
import { getTodos } from './services/api.service';



function App() {

  
  const [todos,setTodos] =useState<ITodo[]>([]);


  const lift =(user:IUser) =>{
getTodos(user)
         .then((response:ITodo[]) =>{
        setTodos(response)
         })
  }



  return (
    <div>
     
     <hr />
     {
      todos.map((todo:ITodo) => <div key={todo.id}>{todo.title}</div>)
     }
     <hr />
   <Users lift ={lift}/>
   
    
    </div>
  );
}

export default App;
