import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id, 'id peye geci');

  const res = await fetch("https://programming-hero-m8-a.vercel.app/products.json");
  const data = await res.json();

  const product = data.find((p) => p.id == id);

  return (
    <div>
      <div className="container mx-auto p-10">
        <div className="card lg:card-side gap-20">
          <figure>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={100}
              className="object-cover"
            ></Image>
          </figure>
          <div className="space-y-3 mt-10">
            <h2 className="card-title text-3xl">{product.name}</h2>
            <div className="flex items-center gap-1 justify-start">
              <span className="text-amber-500">
                <FaStar />
              </span>
              <p className="grow-0">{product.rating}</p>
              <p>({product.stock})</p>
            </div>

            <h1 className="font-bold text-2xl">${product.price}</h1>
            <p className="text-green-500">In Stock</p>
            <p>{product.description}</p>

            <div className="flex gap-10 my-5">
                <div className="space-y-2">
                    <p><span className="font-bold">Brand</span> </p>
                <p><span className="font-bold">Category</span></p>
                <p><span className="font-bold">Stock</span></p>
                <p><span className="font-bold">Shipping</span></p>
                </div>
                <div className="space-y-2">
                    <p> {product.brand}</p>
                <p> {product.category}</p>
                <p>{product.stock}</p>
                <p>Free shipping on orders over $50</p>
                </div>
            </div>
            <div className="space-x-5">
              <button className="btn text-white btn-lg bg-amber-500">Add to Cart</button>
              <button className="btn btn-lg bg-transparent">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
