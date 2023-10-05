import { Routes, createBrowserRouter } from "react-router-dom";
import UserListPage from "./UserListPage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/content", element: <ContactPage /> },
  { path: "/users/:id", element: <UserDetailPage /> },
]);

export default routes;
