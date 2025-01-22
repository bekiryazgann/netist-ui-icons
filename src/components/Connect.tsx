import * as React from "react";
import type { SVGProps } from "react";
const SvgConnect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M10.95 11a1.5 1.5 0 1 1 0 1.5h-4.7A2.75 2.75 0 0 1 3.5 9.75v-3.5A2.75 2.75 0 0 1 6.25 3.5h5.5a.75.75 0 0 1 0 1.5h-5.5C5.56 5 5 5.56 5 6.25v3.5c0 .69.56 1.25 1.25 1.25z" />
    <path d="M14 16.25a2.75 2.75 0 0 0 2.75-2.75V10A2.75 2.75 0 0 0 14 7.25H9.3a1.5 1.5 0 1 0 0 1.5H14c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25H8.5a.75.75 0 0 0 0 1.5z" />
  </svg>
);
export default SvgConnect;
