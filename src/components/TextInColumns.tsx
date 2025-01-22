import * as React from "react";
import type { SVGProps } from "react";
const SvgTextInColumns = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 5.75C3 4.784 3.784 4 4.75 4H8c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 8 10.5H4.75A1.75 1.75 0 0 1 3 8.75zm1.75-.25a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25H8a.25.25 0 0 0 .25-.25v-3A.25.25 0 0 0 8 5.5z"
    />
    <path d="M3 12.5a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12.5M3.75 14.5a.75.75 0 0 0 0 1.5h2.625a.75.75 0 0 0 0-1.5zM11 14.5a.75.75 0 0 0 0 1.5h2.625a.75.75 0 0 0 0-1.5zM11 11.75a.75.75 0 0 0 0 1.5h5.25a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M12 4a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h3.25A1.75 1.75 0 0 0 17 8.75v-3A1.75 1.75 0 0 0 15.25 4zm-.25 1.75A.25.25 0 0 1 12 5.5h3.25a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25H12a.25.25 0 0 1-.25-.25z"
    />
  </svg>
);
export default SvgTextInColumns;
