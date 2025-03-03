import * as React from "react";
import type { SVGProps } from "react";
const SvgTeam = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 4a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 0 0 6 4m-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M10 7a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 0 0 10 7m-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m2.5-3a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M14 5.5A.75.75 0 1 0 14 7a.75.75 0 0 0 0-1.5"
    />
    <path d="M14 9a.75.75 0 0 0 0 1.5h.75c.69 0 1.25.56 1.25 1.25v1.5a.75.75 0 0 0 1.5 0v-1.5A2.75 2.75 0 0 0 14.75 9zm-7.25.75A.75.75 0 0 0 6 9h-.75a2.75 2.75 0 0 0-2.75 2.75v1.5a.75.75 0 0 0 1.5 0v-1.5c0-.69.56-1.25 1.25-1.25H6a.75.75 0 0 0 .75-.75m4 2.25a2.75 2.75 0 0 1 2.75 2.75v1a.75.75 0 0 1-1.5 0v-1c0-.69-.56-1.25-1.25-1.25h-1.5c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0v-1A2.75 2.75 0 0 1 9.25 12z" />
  </svg>
);
export default SvgTeam;
