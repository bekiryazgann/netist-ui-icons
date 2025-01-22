import * as React from "react";
import type { SVGProps } from "react";
const SvgColor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 3a.75.75 0 0 0 0 1.5h2.69L2.677 9.512a1.75 1.75 0 0 0 0 2.475l4.086 4.086a1.75 1.75 0 0 0 2.474 0L15.78 9.53a.75.75 0 0 0 0-1.06l-4.793-4.793-.013-.014-.444-.443A.75.75 0 0 0 10 3zm4.921 1.732.799.798.009.01L14.189 9l-1.69 1.69-1.865-1.867a1.25 1.25 0 0 0-1.768 0l-1.293 1.293a1.25 1.25 0 0 0 0 1.768l1.866 1.866-1.262 1.262a.25.25 0 0 1-.354 0l-4.086-4.085a.25.25 0 0 1 0-.354l5.836-5.836a.25.25 0 0 1 .348-.005m.579 7.957.94-.94-1.69-1.688-.94.939z"
    />
    <path d="M17 15a1.5 1.5 0 1 1-3 0c0-.53.614-2.122 1.057-3.2a.476.476 0 0 1 .886 0C16.386 12.878 17 14.47 17 15" />
  </svg>
);
export default SvgColor;
