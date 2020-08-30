import One from "./one.js";

function render(compo) {
  ReactDOM.render(
    React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement("span", null, "GOOD"),
      /*#__PURE__*/ React.createElement(compo, null)
    ),
    document.querySelector("#root")
  );
}
window.render = render;
render(One);

setTimeout(() => {
  import("./two.js").then(({ default: Two }) => {
    render(Two);
  });
}, 1000);

setTimeout(() => {
  import("./one.js").then(({ default: One }) => {
    render(One);
  });
}, 2000);

setInterval(() => {
  fetch("/update/changes")
    .then((res) => res.json())
    .then((changes) => {
      if (!changes.url) {
        return;
      }

      import(changes.url);
    });
}, 3000);
