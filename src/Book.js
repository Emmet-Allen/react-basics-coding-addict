import React from "react";

const book = ({ image, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book" onMouseOver={() => console.log("This is a book")}>
      <img src={image} alt=""></img>

      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h2>{author}</h2>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

// export book as 'default', must import using SAME NAME
// Can only export ONE 'default'
// It's a 'default export' aslong as export matches, import name does not matter
export default book;
