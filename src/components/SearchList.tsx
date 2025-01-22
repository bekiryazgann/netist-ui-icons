import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchList = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5.5 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      fillRule="evenodd"
      d="M13.189 14.25a4 4 0 0 1-5.648-2H6.75a.75.75 0 0 1 0-1.5h.5c0-.729.195-1.412.535-2H6.75a.75.75 0 0 1 0-1.5h2.562a4 4 0 0 1 5.033 6.034l1.935 1.936a.75.75 0 1 1-1.06 1.06zm.561-3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
    <path d="M4.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.25-7.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgSearchList;
