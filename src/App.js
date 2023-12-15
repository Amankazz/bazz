import Home from "./Home";
import { store } from "./redux/store/store";
import "./style.css";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
