import React from "react";
import List from "./List.js";
import Form from "./Form.js";
import Post from "./Posts.js";

const App = () => (
  <div>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </div>
);

export default App;
