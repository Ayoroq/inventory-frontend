import Home from "../pages/Home";
import Books from "../pages/Books";
import Categories from "../pages/Categories";
import BookEdit from "../pages/BookEdit";
import BookCreate from "../pages/BookCreate";
import CategoryEdit from "../pages/CategoryEdit";
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
        path: "categories",
        element: <Categories />,
      },
      {
        path: "books/edit/:id",
        element: <BookEdit />,
      },
      {
        path: "categories/:id",
        element: <CategoryEdit />,
      },
    ],
  },
];

export default route;
