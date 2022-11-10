import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import Dashboardpage from "./pages/DashboardPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboardpage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
