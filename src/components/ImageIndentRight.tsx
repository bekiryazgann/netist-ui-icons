import * as React from "react";
import type { SVGProps } from "react";
const SvgImageIndentRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 4H3m18 16H3M9 9.25H3m6 5.5H3M14.6 16h4.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 15.24 21 14.96 21 14.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 8 19.96 8 19.4 8h-4.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C13 8.76 13 9.04 13 9.6v4.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 16 14.04 16 14.6 16"
    />
  </svg>
);
export default SvgImageIndentRight;
