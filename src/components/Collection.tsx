import * as React from "react";
import type { SVGProps } from "react";
const SvgCollection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M13.75 3.25A.75.75 0 0 0 13 2.5H9.971c-.87 0-1.703.348-2.313.968L2.966 8.223a.75.75 0 0 0 1.067 1.054l4.693-4.756A1.75 1.75 0 0 1 9.971 4H13a.75.75 0 0 0 .75-.75M12.75 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      fillRule="evenodd"
      d="M8.767 6.098A3.75 3.75 0 0 1 11.419 5H13.5a2.75 2.75 0 0 1 2.75 2.75v2.289a3.25 3.25 0 0 1-.952 2.298l-4.206 4.206a2.5 2.5 0 0 1-3.536 0l-2.672-2.672a2.75 2.75 0 0 1 0-3.89zm2.652.402c-.597 0-1.17.237-1.591.659l-3.883 3.883a1.25 1.25 0 0 0 0 1.768l2.672 2.672a1 1 0 0 0 1.414 0l4.206-4.206c.329-.328.513-.773.513-1.237V7.75c0-.69-.56-1.25-1.25-1.25z"
    />
  </svg>
);
export default SvgCollection;
