//import is ES6 Module, can also specify file path if necesscary (import React from "./react")
import React from "react";
import ReactDom from "react-dom";

//Importing CSS
import "./index.css";

//JSX Rules
// return single element
// div / section / article or Fragment
// use camleCase for HTML Attribute (JSX is still JavaScript)
// className instead of class for CSS-Styling
// Close every element with a closing tag
// Formatting: Use Parenthese to encapsulate Returned Elements

//Component Functions need to have a Capitalized Name
//Stateless Functional Component: Always Return JSX, in HTML Syntax
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

//Nested Components can be used to return a JSX element using Arrow Function Component Syntax
// const Person = () => <h2>John Doe</h2>; //JSX Element = <Person />
// const Message = () => <p>This is A Message</p>; //JSX Element = <Nessage />

//JSX Component
// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };

// *************************************************** BOOKLIST EXAMPLE ***********************************************************

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// //All instances that call "<Book />" are changed when component is modified
// //Can nest components within components
// //Dont Abstract too much, codebase can become messy
// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => {
//   return (
//     <img
//       src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
//       alt=""
//     ></img>
//   );
// };

// const Title = () => <h1>"I Love You To The Moon And Back"</h1>;

// //Too add style within JS, Use Double Curly Braces to induce an Object
// // All values within Object 'Style' need to have values in "quotes"
// //The Styling is setup 'InLine' stronger than regular CSS
// const Author = () => (
//   <h2 style={{ color: "#617d98", fontSize: "0.75rem", magringTop: "0.25rem" }}>
//     Amelia Hapsworth
//   </h2>
// );

// **************************************************************************************************************************

// //Placing 'title' as a variable to be used within the component via "{title}"
// const title = "I Love You To The Moon And Back";
// // A variable can also be called outside of scope, MUST RETURN A VALUE
// const author = "Amelia Hapsworth";
// const image =
//   "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <img src={image} alt=""></img>
//       <h1>{title}</h1>
//       <h2>{author.toUpperCase()}</h2>
//       {/* <p>{let x = 6}</p> Does Not Work */}
//       <p>{6 + 6}</p>
//       {/* Does Work: Enacts JavaScript */}
//     </article>
//   );
// };

// ***************************************************USING PROPS*****************************************************************

// const firstBook = {
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//   author: "Amelia Hapsworth",
//   title: "I Love You To The Moon And Back",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book job="developer" />{" "}
//       {/* Passes Property Name of 'job' and displays value 'developer'*/}
//       <Book title="random title" number={22} />{" "}
//       {/*Does not display 'developer' because there isn't a 'job' property, passes 'title' instead */}
//     </section>
//   );
// }

// //"props" enables object properties to be passed through components
// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={image} alt=""></img>
//       <h1>{title}</h1>
//       <h2>{author.toUpperCase()}</h2>
//       <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p>
//     </article>
//   );
// };

//*************************************************USING SAME PROPS FOR MULTIPLE CLASSES****************************************************************** */

// //firstBook Class, identifies properties to be used with matching Book main class values
// const firstBook = {
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//   author: "Amelia Hapsworth",
//   title: "I Love You To The Moon And Back",
// };

// const secondBook = {
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/91QEOvkzI9L._AC_UL200_SR200,200_.jpg",
//   author: "Wendi Silvano",
//   title: "Turkey Trouble",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         image={firstBook.image}
//         title={firstBook.title}
//         author={firstBook.title}
//       />
//       <Book
//         image={secondBook.image}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// //"props" enables object properties to be passed through components
// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.image} alt=""></img>
//       <h1>{props.title}</h1>
//       <h2>{props.author}</h2>
//     </article>
//   );
// };

/// ***************************************************************DESTRUCTURING PROPS***********************************************************

// const firstBook = {
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//   author: "Amelia Hapsworth",
//   title: "I Love You To The Moon And Back",
// };

// const secondBook = {
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/91QEOvkzI9L._AC_UL200_SR200,200_.jpg",
//   author: "Wendi Silvano",
//   title: "Turkey Trouble",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         image={firstBook.image}
//         title={firstBook.title}
//         author={firstBook.title}
//       />
//       <Book
//         image={secondBook.image}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// //2nd Way To Destruct: Calling an object {} and destructring the (props) object in the parameters instead "({})"
// const Book = ({ image, title, author }) => {
//   /* 1st Way To Destruct: Pass these values as props arguements */
//   // const { image, title, author } = props;
//   return (
//     <article className="book">
//       <img src={image} alt=""></img>
//       <h1>{title}</h1>
//       <h2>{author}</h2>
//     </article>
//   );
// };

// *************************************************** PROPS CHILDREN *************************************************

// const firstBook = {
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//   author: "Amelia Hapsworth",
//   title: "I Love You To The Moon And Back",
// };

// const secondBook = {
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/91QEOvkzI9L._AC_UL200_SR200,200_.jpg",
//   author: "Wendi Silvano",
//   title: "Turkey Trouble",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         image={firstBook.image}
//         title={firstBook.title}
//         author={firstBook.title}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
//           velit quia fugit laborum totam ea illo architecto voluptate quasi!
//         </p>
//         {/* Children Prop Cant have a Tag thats self closing, need to be b/w Open and Close Tags */}
//       </Book>

//       <Book
//         image={secondBook.image}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// //children is a special call for distinct values within the component
// const Book = (props) => {
//   //Refactored to show that "children" is part of props
//   const { image, title, author, children } = props;
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={image} alt=""></img>
//       <h1>{title}</h1>
//       <h2>{author}</h2>
//       {/* Include the children call here and it will render tags not explciitly called by component */}
//       {children}
//     </article>
//   );
// };

// ******************************** SIMPLE LIST *******************************************

// // Simplify class by passing properties through an array using JSON (Will Cause Errors if You Render Objects of Array)
// const books = [
//   {
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     author: "Amelia Hapsworth",
//     title: "I Love You To The Moon And Back",
//   },

//   {
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/91QEOvkzI9L._AC_UL200_SR200,200_.jpg",
//     author: "Wendi Silvano",
//     title: "Turkey Trouble",
//   },
// ];

// const names = ["john", "bob", "peter"];
// //You can use the ".map" method to itterate through array
// const newNames = names.map((names) => {
//   //To wrap the names in a tag, use an HTML/JSX tag, then call the array of items you want to wrap using '{}'
//   return <h1>{names}</h1>;
// });
// console.log(newNames);
// function BookList() {
//   return <section className="booklist">{newNames}</section>;
// }

// const Book = (props) => {
//   const { image, title, author } = props;
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={image} alt=""></img>
//       <h1>{title}</h1>
//       <h2>{author}</h2>
//     </article>
//   );
// };

// ******************************** PROPER LIST ***********************************************

// const books = [
//   {
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     author: "Amelia Hapsworth",
//     title: "I Love You To The Moon And Back",
//   },

//   {
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/91QEOvkzI9L._AC_UL200_SR200,200_.jpg",
//     author: "Wendi Silvano",
//     title: "Turkey Trouble",
//   },
//   {
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg",
//     author: "Brandon Stanton",
//     title: "Humans",
//   },
// ];

// function BookList() {
//   return (
//     <section className="booklist">
//       {/* If iterating through books array*/}
//       {books.map((book) => {
//         // For each and every object in the books array, you are returning that book
//         return (
//           <div>
//             {/* This will cause props to also return a "book" object */}
//             <Book book={book}></Book>
//           </div>
//         );
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   console.log(props);
//   // We can define the values of book by accessing the 'book' object
//   const { image, title, author } = props.book;
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={image} alt=""></img>
//       <h1>{title}</h1>
//       <h2>{author}</h2>
//     </article>
//   );
// };

// ***************************************** KEY PROP AND SPREAD OPERATOR ****************************************

// const books = [
//   {
//     id: 1,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     author: "Amelia Hapsworth",
//     title: "I Love You To The Moon And Back",
//   },

//   {
//     id: 2,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/91QEOvkzI9L._AC_UL200_SR200,200_.jpg",
//     author: "Wendi Silvano",
//     title: "Turkey Trouble",
//   },
//   {
//     id: 3,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg",
//     author: "Brandon Stanton",
//     title: "Humans",
//   },
// ];

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return (
//           <div>
//             {/*Each and every time you have a list, you need to add a "key" prop, and a UNIQUE Value */}
//             {/* Use the ES6 "spread" operator "..." to pass the 'book' as properties instead of as an object */}
//             <Book key={book.id} {...book}></Book>
//           </div>
//         );
//       })}
//     </section>
//   );
// }

// //2nd way to Destruct
// const Book = ({ image, title, author }) => {
//   //1st way to Destruct: const { image, title, author } = props;
//   return (
//     <article className="book">
//       <img src={image} alt=""></img>
//       <h1>{title}</h1>
//       <h2>{author}</h2>
//     </article>
//   );
// };

// ****************************** EVENT BASICS ************************************************************
// Documentation For SyntheticEvent here : https://reactjs.org/docs/events.html

// const books = [
//   {
//     id: 1,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     author: "Amelia Hapsworth",
//     title: "I Love You To The Moon And Back",
//   },

//   {
//     id: 2,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/91QEOvkzI9L._AC_UL200_SR200,200_.jpg",
//     author: "Wendi Silvano",
//     title: "Turkey Trouble",
//   },
//   {
//     id: 3,
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg",
//     author: "Brandon Stanton",
//     title: "Humans",
//   },
// ];

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return (
//           <div>
//             <Book key={book.id} {...book}></Book>
//           </div>
//         );
//       })}
//     </section>
//   );
// }

// const Book = ({ image, title, author }) => {
//   // To setup an event you need: 'attribute' , 'eventHandler'
//   // onClick, onMouseOver are events (need camelCase)
//   // eventHandler can be passed in 'inline' or as a reference
//   // We can identify an eventHandler object using 'e' then passing values such as '.target' to that event
//   const clickHandler = (e) => {
//     console.log(e);
//     console.log(e.target);
//     alert("Hello World");
//   };
//   // Complex Example for removing Data or adding Data
//   const complexExample = (author) => {
//     console.log(author);
//   };
//   // Implicit Return
//   // const hoverHandler = () => {
//   //   console.log("This is a Book");
//   // };
//   return (
//     // Inline Return
//     <article className="book" onMouseOver={() => console.log("This is a book")}>
//       <img src={image} alt=""></img>
//       {/* eventHandler inline */}
//       <h1 onClick={() => console.log(title)}>{title}</h1>
//       <h2>{author}</h2>
//       {/* eventHandler reference */}
//       <button type="button" onClick={clickHandler}>
//         Reference Example
//       </button>
//       <button type="button" onClick={() => complexExample(author)}>
//         More Complex Example
//       </button>
//     </article>
//   );
// };

// *********************************** IMPORT AND EXPORT STATEMENTS **********************************

// We can import data from relative file paths to use within our app using a 'name import', names must match both 'import' and 'export'
// Make sure everything matches when exporting and importing: component name, export name, import name, file source matches
import { data } from "./Books";

// "Default Import" name of import can change because we are importing a default component
// Aslong as import name matches what is being accessed in the index, name of import doesn't matter
import SpecificBook from "./Book";

import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

// Use netlify for free hosting
// To deploy a "build" version of a project run: "npm run build"
//NPM will then create a "build" folder which you can use to deploy your devloped version of your project
// You can then take the "build" folder and drag/drop it into netlify to host for free

//ReactDom.render(What to Render, Where to Render)
//Self-Close the Function Component name-Tag, then call "root" from index.html
ReactDom.render(<BookList />, document.getElementById("root"));
