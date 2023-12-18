import { useLocation } from "react-router-dom";
// import { Product } from "../types/Product";

export default function ProductView() {
  const location = useLocation();
  console.log(location.state);
  return <div></div>;
}
