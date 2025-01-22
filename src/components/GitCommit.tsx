import * as React from "react";
import type { SVGProps } from "react";
const SvgGitCommit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 12a4 4 0 0 1-8 0m8 0a4 4 0 0 0-8 0m8 0h6M8 12H2"
    />
  </svg>
);
export default SvgGitCommit;
