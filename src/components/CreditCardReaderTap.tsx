import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCardReaderTap = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 4.25A3.25 3.25 0 0 0 6.75 7.5a.75.75 0 0 1-1.5 0 4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-1.5 0A3.25 3.25 0 0 0 10 4.25" />
    <path
      fillRule="evenodd"
      d="M5.25 17a.75.75 0 0 1-.75-.75v-5A2.25 2.25 0 0 1 6.75 9h6.5a2.25 2.25 0 0 1 2.25 2.25v5a.75.75 0 0 1-.75.75zM8 15.5H6v-4.25a.75.75 0 0 1 .75-.75H8zm2-5h3.25a.75.75 0 0 1 .75.75v4.25h-4z"
    />
    <path d="M9.25 7.5a.75.75 0 0 1 1.5 0 .75.75 0 0 0 1.5 0 2.25 2.25 0 1 0-4.5 0 .75.75 0 0 0 1.5 0" />
  </svg>
);
export default SvgCreditCardReaderTap;
