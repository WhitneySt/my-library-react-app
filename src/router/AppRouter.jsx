import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Layout from "../components/Layout/Layout";
import Details from "../pages/Details/Details";

const AppRouter = () => {
  const [books, setBooks] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home books={books} setBooks={setBooks} />} />
          <Route path="/" element={<Home books={books} setBooks={setBooks} />}>
            <Route path="book/:title" element={<Details books={books} />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
