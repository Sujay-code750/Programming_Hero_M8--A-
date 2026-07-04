import ProductCard from "@/components/ProductCard";

const products = async () => {

  const res = await fetch("https://programming-hero-m8-a.vercel.app/products.json");
  const data = await res.json();

  return (
    <div>
      <div className="container mx-auto p-10">

        <h1 className="font-bold text-3xl pb-5">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default products;
