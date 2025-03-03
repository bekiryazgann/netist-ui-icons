import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptPaid = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13.28 7.78a.75.75 0 0 0-1.06-1.06L9.25 9.69 8.03 8.47a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0z" />
    <path
      fillRule="evenodd"
      d="M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26A1.5 1.5 0 0 0 16 16V5a2.5 2.5 0 0 0-2.5-2.5h-7A2.5 2.5 0 0 0 4 5zM6.5 4a1 1 0 0 0-1 1v11l1.507-1.674a1 1 0 0 1 1.486 0L10 16l1.507-1.674a1 1 0 0 1 1.486 0L14.5 16V5a1 1 0 0 0-1-1z"
    />
  </svg>
);
export default SvgReceiptPaid;
