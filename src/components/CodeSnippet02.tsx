import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeSnippet02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 17 5-5-5-5M7 7l-5 5 5 5m7-14-4 18"
    />
  </svg>
);
export default SvgCodeSnippet02;
