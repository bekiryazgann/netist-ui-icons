import * as React from "react";
import type { SVGProps } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M8 12.5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" />
    <path
      fillRule="evenodd"
      d="M6.75 2.5A2.75 2.75 0 0 0 4 5.25v9.5a2.75 2.75 0 0 0 2.75 2.75h6.5A2.75 2.75 0 0 0 16 14.75v-6a.75.75 0 0 0-.22-.53l-5.5-5.5a.75.75 0 0 0-.53-.22zM5.5 5.25C5.5 4.56 6.06 4 6.75 4H9v3.75c0 .966.784 1.75 1.75 1.75h3.75v5.25c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25zM13.44 8 10.5 5.06v2.69c0 .138.112.25.25.25z"
    />
  </svg>
);
export default SvgFile;
