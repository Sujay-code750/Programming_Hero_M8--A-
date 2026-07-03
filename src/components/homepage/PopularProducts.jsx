
import Link from "next/link";
import ProductCard from "../ProductCard";

const PopularProducts = async () => {
   const res = await fetch("https://programming-hero-m8-a.vercel.app/products.json");
  const data = await res.json();

  return (
    <div>
      <div className="container mx-auto p-10">
        <div className="flex justify-between items-center">
          <div className="pb-10">
            <h1 className="text-2xl font-bold">Popular Picks</h1>
            <p className="text-gray-500">
              Handpicked essentials loved by our customers.
            </p>
          </div>
          <button className="btn bg-transparent"><Link href={'/products'}>View all</Link></button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.slice(0,4).map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
