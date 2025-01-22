import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCardCancel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.75 7.25A2.75 2.75 0 0 1 5.5 4.5H15a2.75 2.75 0 0 1 2.75 2.75v2.5a.75.75 0 0 1-1.5 0v-.5h-12v3.5c0 .69.56 1.25 1.25 1.25h5.02a.75.75 0 0 1 0 1.5H5.5a2.75 2.75 0 0 1-2.75-2.75zM15 6c.69 0 1.25.56 1.25 1.25h-12C4.25 6.56 4.81 6 5.5 6z"
    />
    <path d="M6.25 11.25a.75.75 0 0 0 0 1.5H9a.75.75 0 0 0 0-1.5zm10.53.47a.75.75 0 0 1 0 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 1 1 1.06-1.06l.97.97.97-.97a.75.75 0 0 1 1.06 0" />
  </svg>
);
export default SvgCreditCardCancel;
