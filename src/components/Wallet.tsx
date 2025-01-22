import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 5.75v8.5a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-1c.304-.228.5-.591.5-1v-2c0-.409-.196-.772-.5-1V8.5a2.25 2.25 0 0 0-2.25-2.25h-.75v-.5a2.25 2.25 0 0 0-2.25-2.25h-5.5A2.25 2.25 0 0 0 3.5 5.75M5.75 5a.75.75 0 0 0-.75.75v.5h7v-.5a.75.75 0 0 0-.75-.75zm9.75 5.5h-3.75V12h3.75zM15 9v-.5a.75.75 0 0 0-.75-.75H5v6.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-.75h-3.5c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25z"
    />
  </svg>
);
export default SvgWallet;
