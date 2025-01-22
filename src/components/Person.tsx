import * as React from "react";
import type { SVGProps } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M8 6.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
    />
    <path
      fillRule="evenodd"
      d="M15.484 14.227a6.274 6.274 0 0 0-10.968 0l-.437.786A1.338 1.338 0 0 0 5.249 17h9.502a1.338 1.338 0 0 0 1.17-1.987zm-9.657.728a4.773 4.773 0 0 1 8.346 0l.302.545h-8.95z"
    />
  </svg>
);
export default SvgPerson;
