import React, { useState } from 'react';
import './App.css';
import Users from './components/Users/Users';
import { IPost } from './models/IPostModel';
import { getPostsOfUser } from './services/dummyApi.service';
import Posts from './components/Posts/Posts';



function App() {
 
  const[posts,setPosts]=useState<IPost[]>([])
const lift = async(id:number)=>{
setPosts(await getPostsOfUser(id))
console.log(id)


}
 


  return (
    <div>
       <hr />

    <Posts posts={posts}/>
    <hr />
  <Users lift={lift}/>
   
    
    </div>
  );
}

export default App;
