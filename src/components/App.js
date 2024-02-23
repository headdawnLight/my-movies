import { Routes, Route, Navigate } from "react-router-dom";
import HomeView from "../routes/HomeView";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeView />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default App;
