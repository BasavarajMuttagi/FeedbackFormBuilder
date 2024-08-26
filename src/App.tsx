import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import ActiveSelectionContextProvider from "./contexts/ActiveSelectionContextProvider";

function App() {
  return (
    <ActiveSelectionContextProvider>
      <RouterProvider router={routes} />
    </ActiveSelectionContextProvider>
  );
}

export default App;
