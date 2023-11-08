import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function LogOutButton(){

const {logout}=useAuth0
return(
   <div>

        <button className=" bg-azulmarino border-2  border-slate-700  py-2 px-9   hover:bg-slate-400 rounded  mx-3 font-weight-bold " onClick={() => logout()}>
            Log Out
          </button>
   </div>
);


}
export default LogOutButton