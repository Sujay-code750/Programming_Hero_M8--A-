import Image from "next/image";
import logoImg from "../../public/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                <Link href={"/"} className="font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="font-semibold">
                  Products
                </Link>
              </li>
              <li>
                <Link href={"/my-profile"} className="font-semibold">
                  My Profile
                </Link>
              </li>
              </ul>
            </div>
            <a className="flex items-center font-bold text-xl bg-transparent border-none">
              <span>
                {" "}
                <Image src={logoImg} width={40} height={40} alt="Sunchart" />
              </span>{" "}
              SunChart
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"} className="font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="font-semibold">
                  Products
                </Link>
              </li>
              <li>
                <Link href={"/my-profile"} className="font-semibold">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
           <Link href={'/login'}> <button className="btn text-white bg-amber-500">Login / Register</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
