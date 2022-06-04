import client from "./contentful/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import MyNavbar from "./components/MyNavbar";
import About from "./components/About";
import Post from "./components/Post";
import Author from "./components/Author";
import Footer from "./components/Footer";
import Books from "./components/Books";
import "./App.css";

function App() {
  const [content, setContent] = useState();
  const [userInput, setUserInput] = useState("");
  const [searchText, setSearchText] = useState("");
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 6;

  const navigate = useNavigate();

  useEffect(() => {
    client.getEntries({ content_type: "blogPost", query: searchText, limit, skip }).then((data) => {
      setContent(data);
    });
  }, [searchText, skip]);

  const handleNextPage = () => {
    const nextSet = skip + limit;
    if (nextSet >= content.total) return;
    setSkip(nextSet);
    setPage((nextSet + limit) / limit);
  };

  const handlePrevPage = () => {
    const prevSet = skip - limit;
    if (prevSet < 0) return;
    setSkip(prevSet);
    setPage((prevSet + limit) / limit);
  };

  const handlePageNumbers = (number) => {
    setPage(number);
    setSkip(limit * number - limit);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(userInput);
    setUserInput("");
    navigate("/");
  };

  const handleGoHome = () => {
    setSearchText("");
    setSkip(0);
    setPage(1);
  };

  const handleCategorySelect = () => {
    setSearchText("");
  };

  if (!content) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <MyNavbar onInput={handleUserInput} onSubmit={handleSearch} onClickHome={handleGoHome} onCategorySelect={handleCategorySelect} userInput={userInput} />
      <Routes>
        <Route path="/" element={<Main content={content} onNextPage={handleNextPage} onPrevPage={handlePrevPage} onPageNumbers={handlePageNumbers} page={page} />} />
        <Route path="/:category" element={<Main content={content} />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
