import Image from "next/image";
import logoImg from "../../../public/images/logo.png";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { SlSocialPintarest } from "react-icons/sl";

const Footer = () => {
    return (
        <div className="bg-slate-900 text-white">
            <div className="container mx-auto">
                <footer className="footer sm:footer-horizontal p-10">
  <nav>
    <div>
        <a className="flex items-center text-2xl font-bold text-white">
                      <span>
                        {" "}
                        <Image src={logoImg} width={40} height={40} alt="Sunchart" />
                      </span>{" "}
                      SunChart
                    </a>
                    <p className="text-[#9fa2aa] py-5">You one-step shop for premium <br /> summer essentials</p>
                    <ul className="flex gap-5 py-2">
                        <li><a href="#" className="text-xl"><FaFacebookF /></a></li>
                        <li><a href="#" className="text-xl"><FaXTwitter /></a></li>
                        <li><a href="#" className="text-xl"><BsInstagram /></a></li>
                        <li><a href="#" className="text-xl"><SlSocialPintarest /></a></li>
                    </ul>
    </div>
  </nav>
  <nav>
    <h6 className="footer-title">Shop</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Subscribe to our newsletter</h6>
    <fieldset className="">
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email address"
          className="input text-black" />
        <button className="btn bg-amber-500 join-item text-white">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
 <div className="text-center text-white pb-5">
    <p>@2026 SunCart. All rights reserved.</p>
  </div>
            </div>
        </div>
    );
};

export default Footer;