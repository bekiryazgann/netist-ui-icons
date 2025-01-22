import * as React from "react";
import type { SVGProps } from "react";
const SvgDataTable = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 16.5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2zM8.75 5h2.5v2h-2.5zm-1.5 0H5.5a.5.5 0 0 0-.5.5V7h2.25zm0 3.5H5v6a.5.5 0 0 0 .5.5h1.75zm1.5 6.5V8.5h2.5V15zm4-8V5h1.75a.5.5 0 0 1 .5.5V7zm0 1.5V15h1.75a.5.5 0 0 0 .5-.5v-6z"
    />
  </svg>
);
export default SvgDataTable;
