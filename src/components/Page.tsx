import * as React from "react";
import type { SVGProps } from "react";
const SvgPage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.75 4.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9.5h-3.25A1.75 1.75 0 0 1 9.5 7.75V4.5zM11 5.56 13.44 8h-2.19a.25.25 0 0 1-.25-.25zm-7 .19A2.75 2.75 0 0 1 6.75 3h3.5a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v5.5A2.75 2.75 0 0 1 13.25 17h-6.5A2.75 2.75 0 0 1 4 14.25z"
    />
  </svg>
);
export default SvgPage;
