import "./App.css";
import MyNavbar from "./components/MyNavbar";
import client from "./contentful/client";
import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";

function App() {
  const [content, setContent] = useState();
  console.log(content);
  useEffect(() => {
    client.getEntries().then((data) => setContent(data));
  }, []);

  return (
    <div className="App">
      <MyNavbar />
      {content && <PostCard content={content} />}

      {/* {content && <img src={content.items[0].fields.heroimage.fields.file.url} />} */}
    </div>
  );
}

export default App;
