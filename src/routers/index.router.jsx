import { createBrowserRouter } from "react-router-dom";
import App from "../pages/app/App";
import Home from "../pages/Home/Home";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },

])

export default router;