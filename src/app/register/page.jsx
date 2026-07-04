"use client";
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (e) =>{
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log({name, image, email, password});

    const { data, error } = await authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        image, // User image URL (optional)
    });

    // console.log({data, error});

    if(!error){
      router.push('/')
    }
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

            <h1 className="font-bold text-3xl">Create Account</h1>
            <p>Join Suncart today</p>

          <label className="label font-bold">Full Name</label>
          <input name="name" type="text" className="input w-full" placeholder="Enter your Name" />

          <label className="label font-bold">Photo URL</label>
          <input name="image" type="url" className="input w-full" placeholder="Enter your Url" />

          <label className="label font-bold">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Enter your Email" />

          <label className="label font-bold">Password</label>
          <input name="password" type="password" className="input w-full" placeholder="Enter your password" />
<button type="submit" className="btn bg-amber-500 mt-4 w-full text-white">Register</button>



            <div className="py-5 relative">
                <hr className=""></hr>
                <p className="text-xl bg-white px-2 absolute top-1 right-45">Or</p>
            </div>

            <button onClick={handleGoogleSignIn} className="btn w-full"> <FaGoogle /> Continue with google</button>

                <p className="text-center font-semibold text-lg pt-5">Already have an account? <span className="text-amber-500"><Link href={'/login'}>Login</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
