import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App/App";
import OurWork from "../pages/OurWorks/OurWork";
import Home from '../pages/Home/Home';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/ourwork',
                element: <OurWork/>
            }
        ]
    }
])

export default router;