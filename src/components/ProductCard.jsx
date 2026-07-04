import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = async ({product}) => {
   
    return (
        <div>
            <div className="shadow rounded-xl">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={product.name}
                  className="object-cover rounded-t-xl"
                ></Image>
              </div>

              <div className="p-4 space-y-1">
                <p className="font-semibold text-sm">{product.brand}</p>
                <h2 className="font-bold text-lg">{product.name}</h2>
                <div className="flex items-center gap-1">
                    <span className="text-amber-500"><FaStar /></span>
                    <p>{product.rating}</p>
                    <p>({product.stock})</p>
                </div>
                
                <h1 className="font-bold text-xl">${product.price}</h1>
                <Link href={`/products/${product.id}`}>
                <button className="btn bg-transparent w-full mt-4">View Details</button>
                </Link>
              </div>
            </div>
        </div>
    );
};

export default ProductCard;