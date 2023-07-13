import "./styles.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Signup from "./screens/Signup";



export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
