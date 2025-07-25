import React, { FC, useEffect, useState } from "react";
import { IUser } from "../../models/IUserModel";
import { getUsers } from "../../services/dummyApy.serviсe";
import User from "../User/User";
type IUsersProps = {
  lift: (id: number) => void;
};
const Users: FC<IUsersProps> = ({ lift }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getUsers().then((response) => setUsers(response));
  }, []);

  return (
    <div>
      {users.map((item) => (
        <User key={item.id} user={item} lift={lift} />
      ))}
    </div>
  );
};

export default Users;
