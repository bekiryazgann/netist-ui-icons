import * as React from "react";
import type { SVGProps } from "react";
const SvgSpacingWidth01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 12h12M6 12l2-3m-2 3 2 3m10-3-2-3m2 3-2 3m5 6V3M3 21V3"
    />
  </svg>
);
export default SvgSpacingWidth01;
