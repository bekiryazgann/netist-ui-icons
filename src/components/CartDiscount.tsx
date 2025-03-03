import * as React from "react";
import type { SVGProps } from "react";
const SvgCartDiscount = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.25 3a.75.75 0 0 0 0 1.5h1.612a.25.25 0 0 1 .248.22l1.04 8.737A1.75 1.75 0 0 0 7.888 15h6.362a.75.75 0 0 0 0-1.5H7.888a.25.25 0 0 1-.248-.22l-.093-.78h6.35a2.75 2.75 0 0 0 2.743-2.54l.358-4.652a.75.75 0 0 0-1.496-.116l-.358 4.654A1.25 1.25 0 0 1 13.898 11h-6.53L6.6 4.543A1.75 1.75 0 0 0 4.862 3z" />
    <path d="M9 6.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4.28-.22a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 1.06 1.06zM14 9.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgCartDiscount;
