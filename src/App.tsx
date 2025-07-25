import React, { useState } from "react";
import "./App.css";
import { getPostsOfUser } from "./services/dummyApy.serviсe";
import Users from "./components/Users/Users";
import { IPost } from "./models/IPostModel";
import Posts from "./components/Posts/Posts";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const lift = async (id: number) => {
    setPosts(await getPostsOfUser(id));
    // getPostsOfUser(id).then((posts) => setPosts(posts))
  };

  return (
    <div>
      <hr />
      <Posts posts={posts} />
      <hr />
      <Users lift={lift} />
    </div>
  );
}

export default App;
