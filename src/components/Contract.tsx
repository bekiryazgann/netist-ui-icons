import * as React from "react";
import type { SVGProps } from "react";
const SvgContract = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 7.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 7.5m.75 2.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M2.5 5.75a2 2 0 0 1 2-2H13a2 2 0 0 1 2 2v7.5h2a.75.75 0 0 1 .75.75v1.5a2.25 2.25 0 0 1-2.25 2.25H7.75A2.75 2.75 0 0 1 5 15v-4.75H3.25a.75.75 0 0 1-.75-.75zm5.25 10.5C8.44 16.25 9 15.69 9 15v-1a.75.75 0 0 1 .75-.75h3.75v-7.5a.5.5 0 0 0-.5-.5H6.437a2 2 0 0 1 .063.5V15c0 .69.56 1.25 1.25 1.25m2.75-1.5V15c0 .45-.108.875-.3 1.25h5.3a.75.75 0 0 0 .75-.75v-.75zm-6.5-9a.5.5 0 0 1 .498-.5H4.5a.5.5 0 0 1 .5.5v3H4z"
    />
  </svg>
);
export default SvgContract;
