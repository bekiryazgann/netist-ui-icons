import * as React from "react";
import type { SVGProps } from "react";
const SvgThemeTemplate = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 7.25A3.75 3.75 0 0 1 7.25 3.5h5.5a3.75 3.75 0 0 1 3.75 3.75v5.5a3.75 3.75 0 0 1-3.75 3.75h-5.5a3.75 3.75 0 0 1-3.75-3.75zM7.25 5A2.25 2.25 0 0 0 5 7.25v.5h10v-.5A2.25 2.25 0 0 0 12.75 5zM11 9.25H5v3.5A2.25 2.25 0 0 0 7.25 15H11zM12.5 15V9.25H15v3.5A2.25 2.25 0 0 1 12.75 15z"
    />
  </svg>
);
export default SvgThemeTemplate;
