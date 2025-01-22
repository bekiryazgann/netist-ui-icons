import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path d="M16.5 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0zm-3.5 6.5a.75.75 0 0 0 0-1.5H6.06l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72z" />
  </svg>
);
export default SvgTransferOut;
