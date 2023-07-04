import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./Todo";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Homepage" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
