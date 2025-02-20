import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Home"
import App from "../pages/App"
import Dragões from "../pages/Dragões"

const Router = createBrowserRouter([

    {path: '/', element: <Home/>},
    {path: '/emojis', element: <App/>},
    {path: '/dragoes', element: <Dragões/>}


])

export default Router
