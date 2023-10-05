import { Routes, createBrowserRouter } from "react-router-dom";
import UserListPage from "./UserListPage";
import HomePage from "./HomePage";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
]);

export default routes;
