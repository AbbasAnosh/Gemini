import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignIn = () => {
  return (
    <div>
      <SignIn path="/sign-in" />
    </div>
  );
};

export default SignIn;
