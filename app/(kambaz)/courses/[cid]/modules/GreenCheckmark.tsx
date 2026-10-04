import { FaCheckCircle, FaCircle } from "react-icons/fa";

//2.4.4 Styling the Modules Screen
//The Modules list is shared between the Modules screen and the Home screen,
//so it gets styled once here.

export default function GreenCheckmark() {
  return (
    <span className="relative me-1 inline-flex">
      <FaCheckCircle
        className="absolute text-xl text-green-600"
        style={{ top: "2px" }}
      />
      <FaCircle className="text-base text-white" />
    </span>
  );
}