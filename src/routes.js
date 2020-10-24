
import Profile from "./layouts/profile/Profile.js";
import Users from "./layouts/users/Users.js";
import Login from "./layouts/login/Login.js";


var routes = [
  {
    path: "/home",
    component: Profile

  },
 {
   path: "/Users",
   component: Users
  
  },

 {
   path: "/Login",
   component: Login

  },



];
export default routes;
