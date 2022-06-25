import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import MyNavbar from "./components/MyNavbar";
import About from "./components/About";
import Post from "./components/Post";
import Author from "./components/Author";
import Footer from "./components/Footer";
import Books from "./components/Books";
import SignupModal from "./components/SignupModal";
import "./App.css";
const axios = require("axios").default;

function App() {
  const [content, setContent] = useState();
  const [userInput, setUserInput] = useState("");
  const [searchText, setSearchText] = useState("");
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [category, setCategory] = useState();
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const pageTopRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("a_taste_of_history_blog")) {
      setTimeout(() => {
        setModalShow(true);
      }, 30000);
    }

    localStorage.setItem("a_taste_of_history_blog", "true");
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts")
      .then((data) => setContent(data.data))
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
  }, [searchText, skip, limit]);

  console.log(content);

  const handleNextPage = () => {
    const nextSet = skip + limit;
    if (nextSet >= content.total) return;
    setSkip(nextSet);
    setPage((nextSet + limit) / limit);
    pageTopRef.current.scrollIntoView();
  };

  const handlePrevPage = () => {
    const prevSet = skip - limit;
    if (prevSet < 0) return;
    setSkip(prevSet);
    setPage((prevSet + limit) / limit);
    pageTopRef.current.scrollIntoView();
  };

  const handlePageNumbers = (number) => {
    setPage(number);
    setSkip(limit * number - limit);
    pageTopRef.current.scrollIntoView();
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(userInput);
    setUserInput("");
    navigate("/");
    setLimit(6);
  };

  const handleGoHome = () => {
    setSearchText("");
    setSkip(0);
    setPage(1);
    setLimit(6);
  };

  const handleCategorySelect = () => {
    setSearchText("");
    setLimit(100);
  };

  if (!content) return <h1>Loading...</h1>;

  return (
    <div ref={pageTopRef} className="App">
      <MyNavbar onInput={handleUserInput} onSubmit={handleSearch} onClickHome={handleGoHome} onCategorySelect={handleCategorySelect} userInput={userInput} />
      <Routes>
        <Route path="/" element={<Main content={content} onNextPage={handleNextPage} onPrevPage={handlePrevPage} onPageNumbers={handlePageNumbers} page={page} />} />
        <Route path="/:category" element={<Main content={content} />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <SignupModal show={modalShow} onHide={() => setModalShow(false)} />

      <Footer />
    </div>
  );
}

export default App;
