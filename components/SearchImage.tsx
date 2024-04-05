import * as React from "react";
import { SVGProps } from "react";
const SearchImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M7.844 13.836a5.992 5.992 0 1 0 0-11.985 5.992 5.992 0 0 0 0 11.985ZM12.012 12.323l2.35 2.343" />
    </g>
  </svg>
);
export default SearchImage;
