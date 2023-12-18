import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import { fetchProduct } from "../lib/api";

export default function ProductView() {
  const productId = useParams<string>();
  const [product, setProduct] = useState<Product>();
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const response = await fetchProduct(productId);
        console.log(response);
        setProduct(response);
      } catch {
        setHasError(true);
      }
    }
  });
  return <div></div>;
}
