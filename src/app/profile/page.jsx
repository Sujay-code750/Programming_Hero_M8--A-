"use client";

import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {

       const userData = useSession();
        const user = userData.data?.user;

        const onSubmit = async (e) =>{
                e.preventDefault();
        
                const name = e.target.name.value;
                const image = e.target.image.value;
                // console.log({name, image});
        
                await authClient.updateUser({
                    name,
                    image,
                })
          
            };

    return (
        <div className="p-10">
            <div className="max-w-96 mx-auto mt-5">
                <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
   <div className="avatar">
                 <div className=" w-8 rounded-full">
                   <Image
                     src={user?.image}
                     alt={user?.name.charAt(0)}
                     width={10}
                     height={10}
                     referrerPolicy="no-referrer"
                   ></Image>
                 </div>
               </div>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.name}</h2>
    <p>{user?.email}</p>
    <div className="card-actions">
     
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-amber-500 text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Update Information</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <form onSubmit={onSubmit} className="fieldset border-base-300 rounded-box border p-10 mx-auto">

            <h1 className="font-bold text-3xl">Update Profile</h1>
         

          <label className="label font-bold">Full Name</label>
          <input name="name" type="text" className="input w-full" placeholder="Enter your new Name" />

          <label className="label font-bold">Photo URL</label>
          <input name="image" type="url" className="input w-full" placeholder="Enter your new Url" />


        <button type="submit" className="btn bg-amber-500 mt-4 w-full text-white" slot="close">Save</button>
        </form>
  </div>
</dialog>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ProfilePage;