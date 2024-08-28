import { createBrowserRouter, Outlet } from "react-router-dom";
import ListForms from "../pages/ListForms";
import CreateForm from "../pages/CreateForm";
import Home from "../pages/Home";
import FormDetails from "../pages/FormDetails";
import AdminLayout from "../layouts/AdminLayout";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: (
      <AdminLayout>
        <AdminLayout.Main>
          <Outlet />
        </AdminLayout.Main>
      </AdminLayout>
    ),
    children: [
      {
        path: "",
        element: <ListForms />,
      },
      {
        path: "form/create",
        element: <CreateForm />,
      },
      {
        path: "form/details/:id",
        element: <FormDetails />,
      },
    ],
  },
]);
export default routes;
