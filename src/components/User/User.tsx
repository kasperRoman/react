import React, { FC } from "react";
import { IUser } from "../../models/IUserModel";
type IUserProps = {
  user: IUser;
  lift: (id: number) => void;
};

const User: FC<IUserProps> = ({ user, lift }) => {
  return (
    <div>
      <ul>
        <li>name:{user.firstName}</li>
        <li>email:{user.email}</li>
        <li>phone:{user.phone}</li>
      </ul>
      <button
        onClick={() => {
          lift(user.id);
        }}
      >
        Post of User
      </button>
    </div>
  );
};

export default User;
