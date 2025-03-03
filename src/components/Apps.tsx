import * as React from "react";
import type { SVGProps } from "react";
const SvgApps = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 5.75A2.25 2.25 0 0 1 5.75 3.5H8.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM5.75 5a.75.75 0 0 0-.75.75V8h3V5zM3.5 14.25a2.25 2.25 0 0 0 2.25 2.25H8.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm2.25.75a.75.75 0 0 1-.75-.75V12h3v3zm8.5 1.5a2.25 2.25 0 0 0 2.25-2.25V11.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm.75-2.25a.75.75 0 0 1-.75.75H12v-3h3z"
    />
    <path d="M13.5 3.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 .75-.75" />
  </svg>
);
export default SvgApps;
