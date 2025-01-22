import * as React from "react";
import type { SVGProps } from "react";
const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fillRule="evenodd"
      d="M5.75 4.5A2.75 2.75 0 0 0 3 7.25v5.5a2.75 2.75 0 0 0 2.75 2.75h8.5A2.75 2.75 0 0 0 17 12.75v-5.5a2.75 2.75 0 0 0-2.75-2.75zM4.5 7.25C4.5 6.56 5.06 6 5.75 6h8.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zm2.067.32a.75.75 0 0 0-.634 1.36l3.538 1.651c.335.156.723.156 1.058 0l3.538-1.651a.75.75 0 0 0-.634-1.36L10 9.172z"
    />
  </svg>
);
export default SvgEmail;
