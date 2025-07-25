import React, { FC } from "react";
import { IPost } from "../../models/IPostModel";
import Post from "../Post/Post";
type PostsProps = {
  posts: IPost[];
};

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((value) => (
        <Post item={value} key={value.id} />
      ))}
    </div>
  );
};

export default Posts;
