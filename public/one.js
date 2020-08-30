const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
const runtime = window.runtime;

console.warn(runtime);

window.$RefreshReg$ = (type, id) => {
  console.warn(id);
  const fullId = "Index";
  runtime.register(type, fullId);
};

window.$RefreshSig$ = runtime.createSignatureFunctionForTransform;

const useState = React.useState;

const Index = () => {
  const [name, setName] = useState("obbb21212o");
  return React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement("span", null, name),
    /*#__PURE__*/ React.createElement(
      "button",
      {
        onClick: () => setName("OOOOO"),
      },
      "SDASD"
    )
  );
};

export default Index;

$RefreshReg$(Index, "Index");
enqueueUpdate();

window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
