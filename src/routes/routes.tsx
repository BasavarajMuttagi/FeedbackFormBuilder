import { createBrowserRouter } from "react-router-dom";
import ListForms from "../pages/ListForms";
import CreateForm from "../pages/CreateForm";
import Home from "../pages/Home";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    children: [
      {
        path: "",
        element: <ListForms />,
      },
      {
        path: "create",
        element: <CreateForm />,
      },
    ],
  },
]);
export default routes;
