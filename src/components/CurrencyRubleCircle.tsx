import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRubleCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 6.5H14a2.5 2.5 0 0 1 0 5H9.5zm0 0v11m.25-6H8m5 3.25H8M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgCurrencyRubleCircle;
