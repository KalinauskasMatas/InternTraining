import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

import { useAppSelector } from "./redux/hooks";

import "./App.css";

function App() {
  const currentUser = useAppSelector((state) => state.currentUser);

  return (
    <div className="App">
      {Object.keys(currentUser).length === 0 ? <Login /> : <Home />}
    </div>
  );
}

export default App;
