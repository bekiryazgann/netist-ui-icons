import * as React from "react";
import type { SVGProps } from "react";
const SvgTheme = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.25 3.5A3.75 3.75 0 0 0 3.5 7.25v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a3.75 3.75 0 0 0-3.75-3.75zM5 7.25A2.25 2.25 0 0 1 7.25 5h3.25v3H5zM12 5h.75A2.25 2.25 0 0 1 15 7.25V11h-3zm0 7.5V15h.75A2.25 2.25 0 0 0 15 12.75v-.25zm-1.5-3V15H7.25A2.25 2.25 0 0 1 5 12.75V9.5z"
    />
  </svg>
);
export default SvgTheme;
