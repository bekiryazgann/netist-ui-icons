import * as React from "react";
import type { SVGProps } from "react";
const SvgLogoTwitch = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13.5 5.75h-1v3h1zm-3.75 0h1v3h-1z" />
    <path
      fillRule="evenodd"
      d="M6.5 3 4 5.5v9h3V17l2.5-2.5h2L16 10V3zM15 9.5l-2 2h-2l-1.75 1.75V11.5H7V4h8z"
    />
  </svg>
);
export default SvgLogoTwitch;
