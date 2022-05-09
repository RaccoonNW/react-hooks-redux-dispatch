

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  const app = document.querySelector("#app")
  app.textContent = state.count
}

function dispatch(action) {
  return state = changeState(state, action)
  render()
}

let state = { count: 0 };
let action = { type: "counter/increment" };

dispatch({ type: "counter/increment" });
