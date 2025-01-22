import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCardReader = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 3.5A2.25 2.25 0 0 0 3.5 5.75v4.75a2.25 2.25 0 0 0 2.25 2.25h.32q-.07.365-.07.75v.75a1 1 0 0 0 1 1h2.25V16a.75.75 0 0 0 1.5 0v-.75H13a1 1 0 0 0 1-1v-.75a4 4 0 0 0-.07-.75h.32a2.25 2.25 0 0 0 2.25-2.25V5.75a2.25 2.25 0 0 0-2.25-2.25zm6.75 10.25v-.25a2.5 2.5 0 0 0-5 0v.25zM10 9.5a4 4 0 0 0-3.308 1.75H5.75A.75.75 0 0 1 5 10.5V8.25h10v2.25a.75.75 0 0 1-.75.75h-.942A4 4 0 0 0 10 9.5m5-3.25v-.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v.5z"
    />
  </svg>
);
export default SvgCreditCardReader;
