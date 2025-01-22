import * as React from "react";
import type { SVGProps } from "react";
const SvgAppExtension = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12.28 8.78a.75.75 0 0 1-1.06-1.06l3.22-3.22h-1.19a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0V5.56z" />
    <path
      fillRule="evenodd"
      d="M5.75 3.5A2.25 2.25 0 0 0 3.5 5.75V8.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM5 5.75A.75.75 0 0 1 5.75 5H8v3H5zM3.5 14.25a2.25 2.25 0 0 0 2.25 2.25H8.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm2.25.75a.75.75 0 0 1-.75-.75V12h3v3zM14.25 16.5a2.25 2.25 0 0 0 2.25-2.25V11.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm.75-2.25a.75.75 0 0 1-.75.75H12v-3h3z"
    />
  </svg>
);
export default SvgAppExtension;
