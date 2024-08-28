import { createBrowserRouter } from "react-router-dom";
import FormListing from "../pages/FormListing";
import FormDetails from "../pages/FormDetails";
import Home from "../pages/Home";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listing",
    element: <FormListing />,
  },
  {
    path: "/details",
    element: <FormDetails />,
  },
]);
export default routes;
