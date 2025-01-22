import * as React from "react";
import type { SVGProps } from "react";
const SvgOrder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.976 3.5a2.75 2.75 0 0 0-2.72 2.347l-.662 4.46a9 9 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66q0-.645-.095-1.283l-.66-4.46a2.75 2.75 0 0 0-2.72-2.347zM5.739 6.067A1.25 1.25 0 0 1 6.976 5h6.048c.62 0 1.146.454 1.237 1.067L14.844 10H12.36a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171H9.221a.25.25 0 0 1-.237-.17l-.159-.475A1.25 1.25 0 0 0 7.64 10H5.156zM5.001 11.5 5 11.59v1.66c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 15 13.25V11.5h-2.46l-.1.303A1.75 1.75 0 0 1 10.78 13H9.22a1.75 1.75 0 0 1-1.66-1.197l-.1-.303H5Z"
    />
  </svg>
);
export default SvgOrder;
