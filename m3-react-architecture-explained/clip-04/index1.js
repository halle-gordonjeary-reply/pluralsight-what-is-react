import React from "https://esm.sh/react@19/?dev";
import ReactDOMClient from "https://esm.sh/react-dom@19/client?dev";

window.onload = () => {
  const rootElement = document.getElementById("root");
  const root = ReactDOMClient.createRoot(rootElement);

  const ints = [1, 2, 3];

  const childrenElements = [];

  childrenElements.push(React.createElement("li", { key: ints[0] }, ints[0]));

  childrenElements.push(React.createElement("li", { key: ints[1] }, ints[1]));

  childrenElements.push(React.createElement("li", { key: ints[2] }, ints[2]));

  root.render(childrenElements);
};
