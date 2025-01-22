import * as React from "react";
import type { SVGProps } from "react";
const SvgPageHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 5.25C5.5 4.56 6.06 4 6.75 4H9v3.75c0 .966.784 1.75 1.75 1.75h3.75v.5a.75.75 0 0 0 1.5 0V8.75a.75.75 0 0 0-.22-.53l-5.5-5.5a.75.75 0 0 0-.53-.22h-3A2.75 2.75 0 0 0 4 5.25v9.5a2.75 2.75 0 0 0 2.75 2.75H8A.75.75 0 0 0 8 16H6.75c-.69 0-1.25-.56-1.25-1.25zM13.44 8 10.5 5.06v2.69c0 .138.112.25.25.25z"
    />
    <path
      fillRule="evenodd"
      d="M13.25 12.074a2.265 2.265 0 0 0-3.087.068 2.187 2.187 0 0 0 0 3.137l2.213 2.165a1.25 1.25 0 0 0 1.748 0l2.213-2.165a2.187 2.187 0 0 0 0-3.137 2.265 2.265 0 0 0-3.087-.068m-2.038 1.14a.765.765 0 0 1 1.061 0l.453.442a.75.75 0 0 0 1.048 0l.453-.442a.765.765 0 0 1 1.061 0 .687.687 0 0 1 0 .992l-2.038 1.995-2.038-1.995a.687.687 0 0 1 0-.992"
    />
  </svg>
);
export default SvgPageHeart;
