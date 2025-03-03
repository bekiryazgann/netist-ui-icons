import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCardSecure = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2.5 6.75A2.75 2.75 0 0 1 5.25 4h9.5a2.75 2.75 0 0 1 2.75 2.75V8A.75.75 0 0 1 16 8V6.75c0-.69-.56-1.25-1.25-1.25h-9.5C4.56 5.5 4 6.06 4 6.75v.5h8a1 1 0 1 1 0 2H4v4c0 .69.56 1.25 1.25 1.25h4.052a.75.75 0 0 1 0 1.5H5.25a2.75 2.75 0 0 1-2.75-2.75z" />
    <path d="M5.75 11.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M13 12.25a1 1 0 0 0-1 1V16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.75a1 1 0 0 0-1-1v-.75a2 2 0 1 0-4 0zm2.5 0v-.75a.5.5 0 0 0-1 0v.75z"
    />
  </svg>
);
export default SvgCreditCardSecure;
