import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/todo" element={<TodoListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
