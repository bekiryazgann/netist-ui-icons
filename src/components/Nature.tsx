import * as React from "react";
import type { SVGProps } from "react";
const SvgNature = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 3a1 1 0 0 0-1 1v4.25A6.75 6.75 0 0 0 9.75 15v1.25a.75.75 0 0 0 1.5 0v-1.293A6.5 6.5 0 0 0 17 8.5V6.98a.98.98 0 0 0-.98-.98c-1.99 0-3.762.926-4.91 2.371A6.75 6.75 0 0 0 4.5 3zm8.035 10.26A5 5 0 0 0 15.5 8.5v-.972a4.77 4.77 0 0 0-4.227 4.275l1.387-1.766a.75.75 0 1 1 1.18.926zM6.13 8.922l3.104 4.553A5.25 5.25 0 0 1 4.5 8.25V4.5c2.9 0 5.25 2.35 5.25 5.25v1.819L7.37 8.077a.75.75 0 1 0-1.24.845"
    />
  </svg>
);
export default SvgNature;
