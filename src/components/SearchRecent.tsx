import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchRecent = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9.75 6.5a.75.75 0 0 0-1.5 0V9c0 .284.16.544.415.67l1.5.75a.75.75 0 1 0 .67-1.34L9.75 8.536z" />
    <path
      fillRule="evenodd"
      d="M9 14.5c1.248 0 2.4-.416 3.323-1.117l2.897 2.897a.75.75 0 1 0 1.06-1.06l-2.897-2.897A5.5 5.5 0 1 0 9 14.5M9 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
    />
  </svg>
);
export default SvgSearchRecent;
