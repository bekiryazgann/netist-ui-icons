import * as React from "react";
import type { SVGProps } from "react";
const SvgCashPound = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 6a1.75 1.75 0 0 0-1.75 1.75v1.5H7.5a.75.75 0 0 0 0 1.5h.75v1H7.5a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H9.75v-1h.75a.75.75 0 0 0 0-1.5h-.75v-1.5A.25.25 0 0 1 10 7.5h.75V8a.75.75 0 0 0 1.5 0v-.75C12.25 6.56 11.69 6 11 6z" />
    <path
      fillRule="evenodd"
      d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"
    />
  </svg>
);
export default SvgCashPound;
