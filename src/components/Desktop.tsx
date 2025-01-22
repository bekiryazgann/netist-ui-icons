import * as React from "react";
import type { SVGProps } from "react";
const SvgDesktop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 6.25A2.75 2.75 0 0 1 6.25 3.5h7.5a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-2.75 2.75H12.5V15h.75a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h.75v-1.5H6.25a2.75 2.75 0 0 1-2.75-2.75zM9 13.5h2V15H9zM6.25 5C5.56 5 5 5.56 5 6.25V9.5h10V6.25C15 5.56 14.44 5 13.75 5zm8.725 6c-.116.57-.62 1-1.225 1h-7.5a1.25 1.25 0 0 1-1.225-1z"
    />
  </svg>
);
export default SvgDesktop;
