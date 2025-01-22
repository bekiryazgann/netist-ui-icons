import * as React from "react";
import type { SVGProps } from "react";
const SvgIcons = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.11 15H5.75A1.75 1.75 0 0 1 4 13.25v-4.3A3.5 3.5 0 1 1 9.663 5h4.587c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-.781 1.458l.679 1.164A.75.75 0 0 1 15.25 17h-7a.75.75 0 0 1-.648-1.128L8.111 15ZM6.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 1.5A3.5 3.5 0 0 0 10 6.5h4.25a.25.25 0 0 1 .25.25v6.5a.25.25 0 0 1-.047.146l-2.055-3.524a.75.75 0 0 0-1.296 0L8.986 13.5H5.75a.25.25 0 0 1-.25-.25V9.855a3.5 3.5 0 0 0 1 .145m5.25 1.739 2.194 3.761H9.556z"
    />
  </svg>
);
export default SvgIcons;
