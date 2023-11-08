import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className=" bg-azulmarino border-2  border-slate-700  py-2 px-9   hover:bg-slate-400 rounded  mx-3 font-weight-bold "
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
}
export default Login;
