// Imports
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Submissions from "./Submissions";

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/submissions",
    element: <Submissions />,
  }
]);

export default router;