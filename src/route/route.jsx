import Home from "../pages/home";
import Products from "../pages/products";
import Categories from "../pages/categories";
import ProductEdit from "../pages/productEdit";
import CategoryEdit from "../pages/categoryEdit";
import ErrorPage from "../pages/error";
import App from "../App";

const route = [
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
        path: "products",
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "products/:id",
        element: <ProductEdit />,
      },
      {
        path: "categories/:id",
        element: <CategoryEdit />,
      },
    ],
  },
];

export default route;
