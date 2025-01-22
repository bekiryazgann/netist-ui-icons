import * as React from "react";
import type { SVGProps } from "react";
const SvgCashDollar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M9.5 6.5a.75.75 0 0 1 1.5 0v.25h.75a.75.75 0 0 1 0 1.5H9.5a.5.5 0 0 0 0 1h1a2 2 0 1 1 0 4v.25a.75.75 0 0 1-1.5 0v-.25h-.75a.75.75 0 0 1 0-1.5h2.25a.5.5 0 0 0 0-1h-1a2 2 0 1 1 0-4z" />
    <path
      fillRule="evenodd"
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
    />
  </svg>
);
export default SvgCashDollar;
