import * as React from "react";
import type { SVGProps } from "react";
const SvgVariable = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.906 21A20.25 20.25 0 0 0 22 12c0-3.233-.754-6.289-2.094-9M4.094 3A20.25 20.25 0 0 0 2 12c0 3.233.754 6.289 2.094 9M16.549 8.625h-.09c-.653 0-1.274.287-1.7.786l-5.374 6.303a2.23 2.23 0 0 1-1.7.786h-.09m1.12-7.875h1.394c.5 0 .939.333 1.076.816l1.774 6.243a1.12 1.12 0 0 0 1.077.816h1.394"
    />
  </svg>
);
export default SvgVariable;
