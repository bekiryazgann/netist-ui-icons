import * as React from "react";
import type { SVGProps } from "react";
const SvgDuplicate = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11.25 8.5a.75.75 0 0 0-.75.75v1.25H9.25a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0V12h1.25a.75.75 0 0 0 0-1.5H12V9.25a.75.75 0 0 0-.75-.75" />
    <path
      fillRule="evenodd"
      d="M8.75 16.5a2.75 2.75 0 0 1-2.74-2.51 2.75 2.75 0 0 1-2.51-2.74v-5A2.75 2.75 0 0 1 6.25 3.5h5a2.75 2.75 0 0 1 2.74 2.51 2.75 2.75 0 0 1 2.51 2.74v5a2.75 2.75 0 0 1-2.75 2.75zm0-10.5A2.75 2.75 0 0 0 6 8.75v3.725c-.57-.116-1-.62-1-1.225v-5C5 5.56 5.56 5 6.25 5h5c.605 0 1.11.43 1.225 1zm0 1.5c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25z"
    />
  </svg>
);
export default SvgDuplicate;
