import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./pages/SetAvatar";

const App = () => {
  return (
    <BrowserRouter basename= {process.env.PUBLIC_URL} >
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/setAvatar" element={<SetAvatar />}></Route>
        <Route path="/" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
