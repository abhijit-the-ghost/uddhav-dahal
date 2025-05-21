import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
