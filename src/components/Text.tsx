import * as React from "react";
import type { SVGProps } from "react";
const SvgText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 3.25a.75.75 0 0 1 .695.467l2.75 6.75a.75.75 0 0 1-1.39.566L8.423 9.48a.8.8 0 0 1-.173.02H5.57l-.625 1.533a.75.75 0 1 1-1.39-.566l2.75-6.75A.75.75 0 0 1 7 3.25M7.82 8 7 5.988 6.18 8z"
    />
    <path d="M4.25 12.5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5zM4.25 15a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M15.066 5.94a3 3 0 1 0 0 5.118.75.75 0 0 0 1.434-.308v-4.5a.75.75 0 0 0-1.434-.31M13.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default SvgText;
