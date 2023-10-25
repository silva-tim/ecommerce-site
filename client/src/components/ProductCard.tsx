type props = {
  productName: string;
  price: number;
  productImage: string;
  alt: string;
};

export default function ProductCard({
  productName,
  price,
  productImage,
  alt,
}: props) {
  return (
    <div className="px-5 py-8 border basis-1/4">
      <div className="h-5/6">
        <img
          src={productImage}
          alt={alt}
          className="object-cover w-full h-full rounded-lg drop-shadow"
        />
      </div>
      <div className="pt-5 text-center">
        <span className="block font-sans font-bold">{productName}</span>
        <span className="font-sans">${price}</span>
      </div>
    </div>
  );
}
