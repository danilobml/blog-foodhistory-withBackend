import { useEffect, useState, useRef } from "react";
import { useNavigate, Navigate } from "react-router-dom";
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
import serverUrl from "./serverUrl";
const axios = require("axios").default;

function App() {
  const [content, setContent] = useState();
  const [userInput, setUserInput] = useState("");
  const [searchText, setSearchText] = useState("");
  const [skip, setSkip] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalPosts, setTotalPosts] = useState();
  const [category, setCategory] = useState();
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const pageTopRef = useRef(null);

  console.log(totalPosts);
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
      .get(`${serverUrl}/api/posts/${page}`)
      .then(({ data }) => {
        if (!totalPosts) setTotalPosts(data.count);
        setContent(data.posts);
      })
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
  }, [page]);

  const handleNextPage = () => {
    const nextSet = skip + limit;
    if (nextSet >= totalPosts) return;
    setSkip(nextSet);
    setPage(Math.floor(nextSet + limit) / limit);
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
  };
  console.log(limit);

  if (!content) return <h1>Loading...</h1>;

  return (
    <div ref={pageTopRef} className="App">
      <MyNavbar onInput={handleUserInput} onSubmit={handleSearch} onClickHome={handleGoHome} onCategorySelect={handleCategorySelect} userInput={userInput} />
      <Routes>
        {totalPosts && <Route path="/" element={<Main content={content} totalPosts={totalPosts} onNextPage={handleNextPage} onPrevPage={handlePrevPage} onPageNumbers={handlePageNumbers} page={page} />} />}
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
