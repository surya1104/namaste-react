const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", { id: "heading" }, "Hello I am 1 !!"),
      React.createElement("h2", { id: "heading" }, "Hello I am 2 !!"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "heading" }, "Hello I am 3 !!"),
      React.createElement("h2", { id: "heading" }, "Hello I am 4 !!"),
    ]),
  ]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
