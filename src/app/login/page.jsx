"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {

      const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signIn.email({ 
        email,
        password,
        callbackURL: '/',
    });

    console.log({data, error});
  };

  const handleGoogleSignIn = async () =>{
       await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    <div>
      <div className="container mx-auto py-15 px-10">
        <form onSubmit={onSubmit} className="fieldset border-base-300 rounded-box w-120 border p-10 mx-auto">

            <h1 className="font-bold text-3xl">Welcome Back</h1>
            <p >Login to your account</p>

          <label className="label font-bold">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Enter your Email" />

          <label className="label font-bold">Password</label>
          <input name="password" type="password" className="input w-full" placeholder="Enter your password" />

          <button type="submit" className="btn bg-amber-500 mt-4 w-full text-white">Login</button>



            <div className="py-5 relative">
                <hr className=""></hr>
                <p className="text-xl bg-white px-2 absolute top-1 right-45">Or</p>
            </div>

            <button onClick={handleGoogleSignIn} type="" className="btn w-full"> <FaGoogle /> Continue with google</button>

                <p className="text-center font-semibold text-lg pt-5">Don't have an account? <span className="text-amber-500"><Link href={'/register'}>Register</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
