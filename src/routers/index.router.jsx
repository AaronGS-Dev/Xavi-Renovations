import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App/App";
import OurWork from "../pages/OurWorks/OurWork";
import Home from '../pages/Home/Home';
import Reform from "../pages/Reform/Reform";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurProcess from "../pages/OurProcess/OurProcess";
import Design from "../pages/Design/Design";

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
            },
            {
                path: '/reform/:id',
                element: <Reform/>
            },
            {
                path: '/contact',
                element: <ContactUs/>
            },
            {
                path: '/about',
                element: <AboutUs/>
            },
            {
                path: '/process',
                element: <OurProcess/>
            },
            {
                path: '/design',
                element: <Design/>
            }
        ]
    }
])

export default router;