import {createBrowserRouter} from 'react-router-dom' 

import About from "../pages/About/About";
import HomePage from "../pages/Home/Homepage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import App from '../App';

const my_router = createBrowserRouter(
    [
        {
            element: <App/>,
            children:[
                {
                    path:'/',
                    element:<HomePage/>
                },
                {
                    path:'/About',
                    element:<About/>

                },
                {
                    path:'/Projects',
                    element:<ProjectPage/>
                }
            ]
        }
    ]

)

export default my_router;