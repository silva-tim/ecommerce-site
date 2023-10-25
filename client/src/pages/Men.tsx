import ProductCard from "../components/ProductCard";

export default function Men() {
  return (
    <section>
      <div className="bg-cover flex justify-center items-center bg-center h-screen w-screen px-10 bg-[url('/images/backgrounds/menHero.jpg')]">
        <span className="text-6xl tracking-widest text-center basis-full font-mont">
          MEN
        </span>
      </div>
      <div className="flex flex-wrap justify-between">
        <ProductCard
          productImage="images/products/sunglasses.jpg"
          productName="Monaco Daybreak Sunglasses"
          price={50}
          alt="sunglasses"
        />
        <ProductCard
          productImage="images/products/sunglasses.jpg"
          productName="Monaco Daybreak Sunglasses"
          price={50}
          alt="sunglasses"
        />
        <ProductCard
          productImage="images/products/sunglasses.jpg"
          productName="Monaco Daybreak Sunglasses"
          price={50}
          alt="sunglasses"
        />
        <ProductCard
          productImage="images/products/sunglasses.jpg"
          productName="Monaco Daybreak Sunglasses"
          price={50}
          alt="sunglasses"
        />
        <ProductCard
          productImage="images/products/sunglasses.jpg"
          productName="Monaco Daybreak Sunglasses"
          price={50}
          alt="sunglasses"
        />
      </div>
    </section>
  );
}
