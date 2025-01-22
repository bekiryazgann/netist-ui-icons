import * as React from "react";
import type { SVGProps } from "react";
const SvgCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2.5 3.75A.75.75 0 0 1 3.25 3h1.612a1.75 1.75 0 0 1 1.732 1.5h9.656a.75.75 0 0 1 .748.808l-.358 4.653a2.75 2.75 0 0 1-2.742 2.539H7.547l.093.78a.25.25 0 0 0 .248.22h6.362a.75.75 0 0 1 0 1.5H7.888a1.75 1.75 0 0 1-1.738-1.543L5.11 4.72a.25.25 0 0 0-.248-.22H3.25a.75.75 0 0 1-.75-.75M7.368 11h6.53a1.25 1.25 0 0 0 1.246-1.154L15.44 6H6.773z"
    />
    <path d="M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgCart;
