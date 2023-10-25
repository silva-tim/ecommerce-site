import { CgSpinnerTwoAlt } from "react-icons/cg";

export default function Loading() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-white bg-opacity-80">
      <CgSpinnerTwoAlt className="text-6xl animate-spin" />
    </div>
  );
}
