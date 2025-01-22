import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0zm-12.25 6.5a.75.75 0 0 1 0-1.5h6.94L9.47 7.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72z"
    />
  </svg>
);
export default SvgTransferIn;
