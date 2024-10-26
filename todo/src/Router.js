import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Todo from "./pages/Todo";
import CompletedTodo from "./pages/CompletedTodo";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/completed-todo",
    element: <CompletedTodo />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

export default router;
