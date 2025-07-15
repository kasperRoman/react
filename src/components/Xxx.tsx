import React, { FC } from "react";
interface IProps{
  place:string;
}

const Xxx: FC<IProps> = ({place}) =>{
  return(
    <div>
  xxx  components in {place}
    </div>
  );
};

export default Xxx;