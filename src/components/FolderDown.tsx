import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderDown = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4.5 6.75c0-.69.56-1.25 1.25-1.25h1.514c.473 0 .906.268 1.118.691l.17.342a1.75 1.75 0 0 0 1.566.967h4.132c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 0 0 1.5 0v-.5A2.75 2.75 0 0 0 14.25 6h-4.132a.25.25 0 0 1-.224-.138l-.17-.342A2.75 2.75 0 0 0 7.264 4H5.75A2.75 2.75 0 0 0 3 6.75v6.5A2.75 2.75 0 0 0 5.75 16h5a.75.75 0 0 0 0-1.5h-5c-.69 0-1.25-.56-1.25-1.25z" />
    <path d="M16 11.5a.75.75 0 0 0-1.5 0v2.94l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72z" />
  </svg>
);
export default SvgFolderDown;
