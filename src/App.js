import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { currUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currUser) return <Navigate to="/login" />;
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route index path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
