import React, { FC } from 'react'
import { IUser } from '../../models/IUserModel'
 type IUserProps ={
  user:IUser
  lift:(user:IUser)=>void
}

const User:FC<IUserProps> = ({user,lift}) => {
  return (

    <div key={user.id}>

        <ul>
            <li>name:{user.name}</li>
            <li>email:{user.email}</li>
            <li>phone:{user.phone}</li>
        </ul>
        <button onClick={()=>{
          lift(user)
        }} >click</button>


    </div>
  )
}

export default User