import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home/Home";
import BlogDetail from "../pages/BlogDetail/BlogDetail";

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
        path: "/blog",
        element: <BlogDetail />,
      },
    ],
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
