import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonRemove = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13.75 2a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M5.5 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 11a6.27 6.27 0 0 1 5.484 3.227l.437.786A1.338 1.338 0 0 1 13.751 17H4.249a1.338 1.338 0 0 1-1.17-1.987l.437-.786A6.27 6.27 0 0 1 9 11m0 1.5c-1.734 0-3.33.94-4.173 2.455l-.302.545h8.95l-.302-.545A4.77 4.77 0 0 0 9 12.5"
    />
  </svg>
);
export default SvgPersonRemove;
