import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyPound = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.5 20.5h-11s3.5-2.759 3.5-7c0-2.828-2.086-3.839-2.116-6.195.002-4.664 5.617-4.416 7.568-2.562M6.5 13.5H15"
    />
  </svg>
);
export default SvgCurrencyPound;
