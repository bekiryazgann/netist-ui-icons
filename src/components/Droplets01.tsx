import * as React from "react";
import type { SVGProps } from "react";
const SvgDroplets01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 16a6 6 0 0 1-12 0c0-4.314 6-14 6-14s6 9.686 6 14M8 9a3 3 0 1 1-6 0c0-2.157 3-7 3-7s3 4.843 3 7"
    />
  </svg>
);
export default SvgDroplets01;
