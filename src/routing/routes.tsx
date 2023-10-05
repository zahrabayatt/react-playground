import { Routes, createBrowserRouter } from "react-router-dom";
import UserListPage from "./UserListPage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/content", element: <ContactPage /> },
]);

export default routes;
