import { Product } from "../types/Product";

export default function ProductCard({
  productName,
  price,
  productImage,
  alt,
}: Product) {
  return (
    <div className="px-5 py-10 border basis-1/4">
      <div className="h-3/4">
        <img
          src={productImage}
          alt={alt}
          className="object-cover w-full h-full rounded-lg drop-shadow"
        />
      </div>
      <div className="pt-6 leading-8 text-center ">
        <span className="block font-black font-mont">{productName}</span>
        <span>${price}</span>
      </div>
    </div>
  );
}
