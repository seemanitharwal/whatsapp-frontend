import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ChatPage from "./components/ChatPage";
import AddWorkspace from "./components/AddWorkspace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat/:number" element={<ChatPage />} />
        <Route path="/add-workspace" element={<AddWorkspace />} />
      </Routes>
    </Router>
  );
}

export default App;
