import Image from "next/image";

const PopularProducts = async () => {
  const res = await fetch("https://programming-hero-m8-a.vercel.app/products.json");
  const data = await res.json();

  // console.log(data);
  console.log(data[1].image);

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
          <button className="btn bg-transparent">View all</button>
        </div>


        <div className="grid grid-cols-4">
          {data.map((product) => (
            <div key={product.id}>
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={product.name}
                  className="object-cover"
                ></Image>
              </div>
              <h1>{product.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
