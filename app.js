import React from "react";

import ReactDOM from "react-dom/client"; 


const d =(<h1 className="head">i am from React</h1>);  //jsx to react element -> react object

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(d);
