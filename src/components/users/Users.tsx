import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../../models/IUserModel'
import User from '../user/User'
import { getUsers } from '../../services/api.service'
type IUserProps ={
  lift:(user:IUser)=>void
}



const Users:FC<IUserProps> = ({lift}) => {

    let [users ,setUsers] = useState<IUser[]>([])
     useEffect(() => {
    getUsers().then((response:IUser[]) => setUsers(response));
     },[])
  return (
    <div>
        {
             users.map((user:IUser) => <User key={user.id} user={user} lift={lift}/>)
        }
    </div>
  )
}

export default Users