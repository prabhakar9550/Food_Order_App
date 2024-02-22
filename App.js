import React from"react";
import ReactDOM from"react-dom/client";

// JSX - is not HTML in Jd
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

// React Functional Component

const HeadingComponent = () => {
  return <h1> Functional Component</h1>;
}
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
      