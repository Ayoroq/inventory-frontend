import Home from "../pages/Home.jsx";
import Books from "../pages/Books.jsx";
import Categories from "../pages/Categories.jsx";
import BookEdit from "../pages/BookEdit.jsx";
import BookCreate from "../pages/BookCreate.jsx";
import CategoryEdit from "../pages/CategoryEdit.jsx";
import CategoriesCreate from "../pages/CategoriesCreate.jsx";
import ErrorPage from "../pages/Error.jsx";
import App from "../App.jsx";

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