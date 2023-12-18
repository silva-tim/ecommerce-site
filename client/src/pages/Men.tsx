import ProductCard from "../components/ProductCard";

export default function Men() {
  return (
    <section>
      <div className="bg-cover flex justify-center items-center bg-center h-screen w-screen px-10 bg-[url('/images/backgrounds/menHero.jpg')]">
        <span className="text-6xl tracking-widest text-center basis-full font-mont">
          MEN
        </span>
      </div>
      <div className="h-16 border"></div>
      <div className="flex justify-center">
        <div className="flex flex-wrap w-5/6">
          <ProductCard
            productImage="images/products/wallet.jpg"
            productName="Monaco Daybreak Sunglasses"
            productId={1}
            price={50}
            alt="sunglasses"
          />
        </div>
      </div>
    </section>
  );
}
