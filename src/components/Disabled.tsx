import * as React from "react";
import type { SVGProps } from "react";
const SvgDisabled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-3.677 4.383a5.5 5.5 0 0 1-7.706-7.706zm1.06-1.06L6.677 5.617a5.5 5.5 0 0 1 7.706 7.706"
    />
  </svg>
);
export default SvgDisabled;
