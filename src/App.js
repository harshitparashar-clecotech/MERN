import { Home } from "./Components/Screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Signup";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
