import React from "react";

import ReactDOM from "react-dom/client"; 

const heading = React.createElement("div", {}, 'React, I am here');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
