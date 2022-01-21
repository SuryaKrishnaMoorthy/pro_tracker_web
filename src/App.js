import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./features/Auth";

import Home from "./pages/Home";
import Header from "./features/Header/Header";

function App() {
  const { loggedIn } = useSelector((state) => state.auth);
  
  return (
    <>
      {<Header />}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/tasks" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
