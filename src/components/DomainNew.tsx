import * as React from "react";
import type { SVGProps } from "react";
const SvgDomainNew = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M3.25 3a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0V4.5h10.25a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M5 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V9.5h-9v5h3.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75zM15.5 7v1h-9V7z"
    />
    <path d="M12.5 15.25a.75.75 0 0 1 .75-.75h1.25v-1.25a.75.75 0 0 1 1.5 0v1.25h1.25a.75.75 0 0 1 0 1.5H16v1.25a.75.75 0 0 1-1.5 0V16h-1.25a.75.75 0 0 1-.75-.75" />
  </svg>
);
export default SvgDomainNew;
