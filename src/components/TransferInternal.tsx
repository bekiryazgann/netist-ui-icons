import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferInternal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.25 3.5A2.75 2.75 0 0 0 3.5 6.25v7.5a2.75 2.75 0 0 0 2.75 2.75h7.5a2.75 2.75 0 0 0 2.75-2.75v-7.5a2.75 2.75 0 0 0-2.75-2.75zM5 10.5h6.44l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06L11.44 9H5V6.25C5 5.56 5.56 5 6.25 5h.5v2a.75.75 0 0 0 1.5 0V5h5.5c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-5.5v-2a.75.75 0 0 0-1.5 0v2h-.5C5.56 15 5 14.44 5 13.75z"
    />
  </svg>
);
export default SvgTransferInternal;
