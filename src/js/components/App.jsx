// src/js/components/App.jsx
import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
import Post from "./Posts.jsx";

const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>API posts</h2>
            <Post />
        </div>
    </div>
);

export default App;