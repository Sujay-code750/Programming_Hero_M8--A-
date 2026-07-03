import Image from "next/image";
import TopBrandImg1 from '../../../public/images/Topbrand1.png'
import TopBrandImg2 from '../../../public/images/Topbrand2.png'
import TopBrandImg3 from '../../../public/images/Topbrand3.png'
import TopBrandImg4 from '../../../public/images/Topbrand4.png'


const TopBrands = () => {
    return (
        <div>
            <div className="container mx-auto p-10">
                <div className="flex justify-between items-center">
          <div className="pb-10">
            <h1 className="text-3xl font-bold">Top brands</h1>
          </div>
          <button className="btn bg-transparent">View all</button>
        </div>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
                      <div className="flex justify-center items-center gap-5 bg-white p-2 rounded-xl shadow-md">
                        <div>
                          <Image src={TopBrandImg1} width={150} height={50} alt="Sun image" />
                        </div>
                     
                      </div>
            
                      <div className="flex justify-center items-center gap-5 bg-white p-2 rounded-xl shadow-md">
                        <div>
                          <Image src={TopBrandImg2} width={100} height={50} alt="Sun image" />
                        </div>
                   
                      </div>
            
                      <div className="flex justify-center items-center gap-5 bg-white p-2 rounded-xl shadow-md">
                        <div>
                          <Image src={TopBrandImg3} width={150} height={50} alt="Sun image" />
                        </div>
    
                      </div>
                      <div className="flex justify-center items-center gap-5 bg-white p-2 rounded-xl shadow-md">
                        <div>
                          <Image src={TopBrandImg4} width={100} height={50} alt="Sun image" />
                        </div>
    
                      </div>
                    </div>
        </div>
            </div>
        </div>
    );
};

export default TopBrands;