import * as React from "react";
import type { SVGProps } from "react";
const SvgBlog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M15.747 2.354a.5.5 0 0 1 .707 0l1.06 1.06a.5.5 0 0 1 0 .707l-.956.957-1.768-1.767zM14.083 4.018l1.768 1.768-2.831 2.83a2 2 0 0 1-1.348.585l-.772.025a.25.25 0 0 1-.258-.258l.026-.772c.016-.507.225-.989.584-1.348l2.83-2.83Z" />
    <path d="M5.5 5.75c0-.69.56-1.25 1.25-1.25h4.5a.75.75 0 0 0 0-1.5h-4.5A2.75 2.75 0 0 0 4 5.75v8.5A2.75 2.75 0 0 0 6.75 17h6.5A2.75 2.75 0 0 0 16 14.25v-4.5a.75.75 0 0 0-1.5 0v4.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25z" />
    <path d="M7.75 12.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM7 10.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75" />
  </svg>
);
export default SvgBlog;
