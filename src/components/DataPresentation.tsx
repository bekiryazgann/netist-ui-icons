import * as React from "react";
import type { SVGProps } from "react";
const SvgDataPresentation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M13.5 6.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zM7.25 8.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M10.75 8a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0z" />
    <path
      fillRule="evenodd"
      d="M3.25 4.25A.75.75 0 0 1 4 3.5h12A.75.75 0 0 1 16 5v6a3 3 0 0 1-2.877 2.998l.588 1.765a.75.75 0 1 1-1.422.474L11.543 14H8.457l-.746 2.237a.75.75 0 1 1-1.423-.474l.589-1.765A3 3 0 0 1 4 11V5a.75.75 0 0 1-.75-.75M5.5 5h9v6a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 11z"
    />
  </svg>
);
export default SvgDataPresentation;
