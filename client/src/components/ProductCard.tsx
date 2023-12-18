import { Link } from "react-router-dom";
import { Product } from "../types/Product";

export default function ProductCard(product: Product) {
  return (
    <Link
      to={`/details/${product.id}`}
      className="px-5 py-10 border cursor-pointer basis-1/4 group"
    >
      <div className="h-3/4">
        <img
          src={product.image}
          alt={product.alt}
          className="object-cover w-full h-64 transition rounded-lg drop-shadow"
        />
      </div>
      <div className="pt-6 leading-8 text-center ">
        <span className="block font-black font-mont group-hover:underline">
          {product.name}
        </span>
        <span>${product.price}</span>
      </div>
    </Link>
  );
}
