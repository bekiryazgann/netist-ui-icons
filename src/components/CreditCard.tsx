import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M6.25 11.25a.75.75 0 0 0 0 1.5H9a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M2.5 7.25A2.75 2.75 0 0 1 5.25 4.5h9.5a2.75 2.75 0 0 1 2.75 2.75v5.5a2.75 2.75 0 0 1-2.75 2.75h-9.5a2.75 2.75 0 0 1-2.75-2.75zM14.75 6c.69 0 1.25.56 1.25 1.25H4C4 6.56 4.56 6 5.25 6zM16 9.25H4v3.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25z"
    />
  </svg>
);
export default SvgCreditCard;
