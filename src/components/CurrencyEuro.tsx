import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyEuro = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 5.519a8.5 8.5 0 1 0 0 12.962M3 14h10M3 10h10"
    />
  </svg>
);
export default SvgCurrencyEuro;
