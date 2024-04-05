import * as React from "react";
import { SVGProps } from "react";
const AddImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.522 2.466a.533.533 0 0 0-1.067 0v5.5h-5.5a.533.533 0 0 0 0 1.067h5.5v5.501a.533.533 0 0 0 1.067 0v-5.5h5.5a.533.533 0 1 0 0-1.067h-5.5V2.466Z"
      clipRule="evenodd"
    />
  </svg>
);
export default AddImage;
