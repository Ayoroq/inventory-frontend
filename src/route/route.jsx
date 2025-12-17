import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/home";
import Products from "../pages/products";
import Categories from "../pages/categories";
import ProductEdit from "../pages/productEdit";
import CategoryEdit from "../pages/categoryEdit";
import ErrorPage from "../pages/error";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "proudcts",
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "product/:id",
        element: <ProductEdit />,
      },
      {
        path: "category/:id",
        element: <CategoryEdit />,
      },
    ],
  },
]);

export default router;
