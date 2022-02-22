import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreatePostPage from "../pages/CreatePostPage/CreatePostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage";
import PostsListPage from "../pages/PostsListPage/PostsListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
  <BrowserRouter>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/createpost" element={<CreatePostPage />} />
    <Route path="/postdetails/:id" element={<PostDetailsPage />} />
    <Route path="/" element={<PostsListPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/error" element={<ErrorPage />} />
  </BrowserRouter>;
};

export default Router;
