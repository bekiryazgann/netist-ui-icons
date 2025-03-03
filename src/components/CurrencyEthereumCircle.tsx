import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyEthereumCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 15.5 12 18l5.5-2.5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-15.5-.5L12 14l5.5-2.5L12 5z"
    />
  </svg>
);
export default SvgCurrencyEthereumCircle;
