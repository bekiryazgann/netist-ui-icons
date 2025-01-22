import * as React from "react";
import type { SVGProps } from "react";
const SvgRemoveBackground = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2.47 16.47a.749.749 0 1 0 1.06 1.06l14-14a.749.749 0 1 0-1.06-1.06zm0-6.94a.75.75 0 0 1 0-1.06l6-6a.749.749 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0m0-4a.75.75 0 0 1 0-1.06l2-2a.749.749 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0m8 10.94a.749.749 0 1 0 1.06 1.06l6-6a.749.749 0 1 0-1.06-1.06zm-4 1.06a.75.75 0 0 1 0-1.06l10-10a.749.749 0 1 1 1.06 1.06l-10 10a.75.75 0 0 1-1.06 0m-4-5.06a.749.749 0 1 0 1.06 1.06l10-10a.749.749 0 1 0-1.06-1.06zm12 5.06a.75.75 0 0 1 0-1.06l2-2a.749.749 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0" />
  </svg>
);
export default SvgRemoveBackground;
