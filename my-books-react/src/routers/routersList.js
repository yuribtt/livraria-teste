import Catalog from "../pages/home/Catalog";
import Login from "../pages/login/Login";

const ROUTES_LIST = [
    { 
        path: "/login",
        component: Login,
    }, 
    {
        path: "/home",
        component: Catalog, 
    }
];

export default ROUTES_LIST;
