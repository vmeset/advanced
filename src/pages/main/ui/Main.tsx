import React, { useEffect, useState } from "react";

const api = "https://jsonplaceholder.typicode.com/posts";

function Main() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState("1");
  const [totalCount, setTotalCount] = useState(0);
  const [pages, setPages] = useState([]);
  const [limit, setLimit] = useState("10");

  const fetchPosts = () => {
    const posts = fetch(`${api}?_page=${page}&_limit=${limit}`).then(
      (response) => response.json().then((data) => setPosts(data))
    );
  };

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  return (
    <div>
      Main PAGE
      <input value={limit} onChange={(e) => setLimit(e.target.value)} />
      <input value={page} onChange={(e) => setPage(e.target.value)} />
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
