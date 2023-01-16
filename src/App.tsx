import { useAppSelector } from "./redux/hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  const currentUser = useAppSelector((state) => state.currentUser);

  return (
    <div className="App">
      {Object.keys(currentUser).length === 0 ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
