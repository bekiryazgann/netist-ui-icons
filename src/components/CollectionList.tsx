import * as React from "react";
import type { SVGProps } from "react";
const SvgCollectionList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16 5.5a.75.75 0 0 1 .75.75v2.964a3.25 3.25 0 0 1-.952 2.299l-.018.017a.749.749 0 1 1-1.06-1.06l.017-.018c.329-.328.513-.773.513-1.238V6.25A.75.75 0 0 1 16 5.5M6.767 4.098A3.75 3.75 0 0 1 9.419 3H11.5a2.75 2.75 0 0 1 2.75 2.75v2.289a3.25 3.25 0 0 1-.952 2.298l-4.206 4.206a2.5 2.5 0 0 1-3.536 0l-2.672-2.672a2.75 2.75 0 0 1 0-3.89zm2.652.402c-.597 0-1.17.237-1.591.659L3.945 9.042a1.25 1.25 0 0 0 0 1.768l2.672 2.672a1 1 0 0 0 1.414 0l4.206-4.206c.329-.328.513-.773.513-1.237V5.75c0-.69-.56-1.25-1.25-1.25z"
    />
    <path d="M11.75 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11.5 13.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M11.5 16.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75" />
  </svg>
);
export default SvgCollectionList;
