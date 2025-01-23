import React from "https://esm.sh/react@19/?dev";
import ReactDOM from "https://esm.sh/react-dom@19/client?dev";

window.onload = () => {
  const rootElement = document.getElementById("root");
  const root = ReactDOM.createRoot(rootElement);

  const ints = [1, 2, 3];

  // this refactor is not in the clip, but would be the obvious next step
  const childrenElements = ints.map((id, index) => {
    return React.createElement("li", { key: ints[index] }, ints[index]);
  });
  root.render(childrenElements);
};
