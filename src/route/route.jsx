import Home from "../pages/Home";
import Books from "../pages/Books";
import Categories from "../pages/Categories";
import BookEdit from "../pages/BookEdit";
import BookCreate from "../pages/BookCreate";
import CategoryEdit from "../pages/CategoryEdit";
import CategoriesCreate from "../pages/CategoriesCreate";
import ErrorPage from "../pages/Error";
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
        path: "books",
        element: <Books />,
      },
      {
        path: "books/new",
        element: <BookCreate />,
      },
      {
        path: "books/edit/:id",
        element: <BookEdit />,
      },
      {
        path: "categories/:id",
        element: <CategoryEdit />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/new",
        element: <CategoriesCreate />,
      },
    ],
  },
];

export default route;