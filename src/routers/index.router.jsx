import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App/App";
import OurWork from "../pages/OurWorks/OurWork";
import Reform from "../pages/Reform/Reform";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/ourwork',
                element: <OurWork/>
            },
            {
                path: '/reform/:id',
                element: <Reform/>
            }
        ]
    }
])

export default router;