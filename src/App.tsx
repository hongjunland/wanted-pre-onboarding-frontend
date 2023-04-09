import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import TodoListPage from "./pages/TodoListPage";
import AuthContext from "./auth/AuthContext";
import { useEffect, useState } from "react";
import { getAccessToken } from "./utils/authUtils";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (!init) {
      setInit(true);
      console.log("update app");
      if (getAccessToken()) {
        setLoggedIn(true);
      }
    }
  }, [init, isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/todo" element={<TodoListPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
