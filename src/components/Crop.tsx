import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 3.25a.75.75 0 0 0-1.5 0V4.5H3.25a.75.75 0 0 0 0 1.5H4.5v7.75c0 .966.784 1.75 1.75 1.75H14v1.25a.75.75 0 0 0 1.5 0V15.5h1.25a.75.75 0 0 0 0-1.5H15.5V6.25a1.75 1.75 0 0 0-1.75-1.75H6zM6 6v7.75c0 .138.112.25.25.25H14V6.25a.25.25 0 0 0-.25-.25z"
    />
  </svg>
);
export default SvgCrop;
