import React, { FC, useEffect, useState } from 'react'
import { getUsers } from '../../services/dummyApi.service';
import { IUser } from '../../models/IUserModel';
import User from '../User/User';
type UsersProps ={
  lift:(id:number)=>void
}

const Users:FC<UsersProps> = ({lift}) => {
   
    let [users,setUsers] =useState<IUser[]>([]);
    useEffect(()=>{

        getUsers().then((response:IUser[]) => setUsers(response))
    },[])


  return (
    <div>
        {users.map((man:IUser)=><User user={man} key={man.id} lift={lift}/>)}
    </div>
  )
}

export default Users