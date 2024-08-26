import { createBrowserRouter } from "react-router-dom";
import FormListing from "../pages/FormListing";
import FormDetails from "../pages/FormDetails";
const routes = createBrowserRouter([
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
