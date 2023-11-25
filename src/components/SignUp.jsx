import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleSignUp = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  };

  return (
    <div>
      <button
        className="bg-azulmarino border-2 border-slate-700 py-2 px-9 hover:bg-slate-400 rounded mx-3 font-weight-bold"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;