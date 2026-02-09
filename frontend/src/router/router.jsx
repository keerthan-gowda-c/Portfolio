import {createBrowserRouter} from 'react-router-dom' 

import About from "../pages/About/About";
import HomePage from "../pages/Home/Homepage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import App from '../App';
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails';

import SkillPage from '../pages/Skills/SkillPage';
import ContactPage from '../pages/ContactPage/ContactPage';

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
                },
                   {
                    path:'/Projects/:id',
                    element:<ProjectDetails/>
                },
                {
                    path:'/Skills',
                    element:<SkillPage/>
                },
                {
                    path:'/Contact',
                    element:<ContactPage/>
                }

               
            ]
        }
    ]

)

export default my_router;