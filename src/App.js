import Home from "./Home";
import { store } from "./redux/store/store";
// import "./style.css";
import { Provider } from "react-redux";
import "./index.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
