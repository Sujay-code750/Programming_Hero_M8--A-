import { FaShoppingCart } from 'react-icons/fa';
import bannerImg from '../../../public/images/banner.png'
import { RxLapTimer } from 'react-icons/rx';
import { RiSecurePaymentFill } from 'react-icons/ri';
import Link from 'next/link';

const Banner = () => {
  return (
    <div
     className="hero py-20"
         style={{
  backgroundImage: `url(${bannerImg.src ?? bannerImg})`,
}}
    >

        <div className="container mx-auto p-10">
          <div className="">
            <div className=" text-black text-left space-y-6">
                <h5 className='text-amber-500 font-semibold'>SUMMER SALE</h5>
              <h1 className="mb-5 text-5xl font-bold">Stay Cool this Sunner</h1>
              <p className="mb-5">
                Discover premium essentials designed for sunshine, <br /> comfort, and unforgettable adventures.
              </p>
              <div className='space-x-5 py-5'>
                <Link href={'/products'}><button className="btn btn-lg bg-amber-500 rounded-full w-50 text-white">Shop Collection</button></Link>
                <Link href={'/products'}><button className="btn btn-lg rounded-full w-50 ">View Products</button></Link>
              </div>

              <div className='flex items-center gap-8 pt-2'>

                <div className='flex gap-4 items-center'>
                    <span className='text-2xl'><FaShoppingCart /></span>
                    <div>
                        <h4 className='font-semibold'>Free Shipping</h4>
                        <p className='text-gray-600 text-sm'>On orders over 550</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <span className='text-2xl'><RxLapTimer /></span>
                    <div>
                        <h4 className='font-semibold'>Easy Returns</h4>
                        <p className='text-gray-600 text-sm'>30-day returns</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <span className='text-2xl'><RiSecurePaymentFill /></span>
                    <div>
                        <h4 className='font-semibold'>Secure Payment</h4>
                        <p className='text-gray-600 text-sm'>100% secure chectout</p>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Banner;
