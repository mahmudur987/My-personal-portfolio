import React from "react";

const Blog = () => {
  let checked = "";

  function handleClick() {
    checked == "checked" ? (checked = "") : (checked = "checked");
  }

  return (
    <div class="max-w-5xl mx-auto shadow bg-base-200 drawer h-screen">
      <h1> this page is under maintanenc</h1>
    </div>
  );
};

export default Blog;
