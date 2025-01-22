import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRupee = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 3h12M6 8h12m-3.5 13L6 13h3c6.667 0 6.667-10 0-10"
    />
  </svg>
);
export default SvgCurrencyRupee;
