import client from "./contentful/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import MyNavbar from "./components/MyNavbar";
import About from "./components/About";
import Post from "./components/Post";
import Author from "./components/Author";
import "./App.css";

function App() {
  const [content, setContent] = useState();
  const [userInput, setUserInput] = useState("");
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost", query: searchText })
      .then((data) => {
        setContent(data);
      });
  }, [searchText]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(userInput);
    setUserInput("");
    navigate("/");
  };

  if (!content) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <MyNavbar
        onInput={handleUserInput}
        onSubmit={handleSearch}
        userInput={userInput}
      />
      <Routes>
        <Route path="/" element={<Main content={content} />} />
        <Route path="/:category" element={<Main content={content} />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/author/:authorId" element={<Author />} />
      </Routes>
    </div>
  );
}

export default App;
