//Layout
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

//Admin Pages
import AdminHome from '../pages/Admin/Admin';
import AdminSignIng from '../pages/Admin/SignIn';
import AdminUsers from '../pages/Admin/Users';
import AdminMenuWeb from '../pages/Admin/MenuWeb';
import AdminBlog from '../pages/Admin/Blog';

//Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

//Others
import Error404 from '../pages/Error404';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSignIng,
                exact: true
            },
            {
                path: "/admin/users",
                component: AdminUsers,
                exact: true
            },
            {
                path: "/admin/menu",
                component: AdminMenuWeb,
                exact: true
            },
            {
                path: "/admin/blog",
                component: AdminBlog,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false, 
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                path:"/blog",
                component: Blog,
                exact: true
            },
            {
                path:"/blog/:url",
                component: Blog,
                exact: true
            },
            {
                component:Error404
            }

        ]
    }
];

export default routes;