import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home/Home";
import BlogDetail from "../pages/BlogDetail/BlogDetail";
import About from "../pages/About/About";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Blogs from "../pages/Blogs/Blogs";
import ContactPage from "../pages/Contact/ContactPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog",
        element: <BlogDetail />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const AppRoutes = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default AppRoutes;
