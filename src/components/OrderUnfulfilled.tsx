import * as React from "react";
import type { SVGProps } from "react";
const SvgOrderUnfulfilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12.53 4.78a.75.75 0 0 0-1.06-1.06L10 5.19 8.53 3.72a.75.75 0 0 0-1.06 1.06l1.47 1.47-1.47 1.47a.75.75 0 0 0 1.06 1.06L10 7.31l1.47 1.47a.75.75 0 1 0 1.06-1.06l-1.47-1.47z" />
    <path
      fillRule="evenodd"
      d="m14.844 10-.336-2.265a.75.75 0 1 1 1.484-.22l.413 2.792q.095.638.095 1.282v1.661a3.25 3.25 0 0 1-3.25 3.25h-6.5a3.25 3.25 0 0 1-3.25-3.25v-1.66q0-.645.094-1.283l.414-2.792a.75.75 0 0 1 1.484.22L5.156 10H7.64a1.25 1.25 0 0 1 1.185.855l.159.474a.25.25 0 0 0 .237.171h1.558a.25.25 0 0 0 .237-.17l.159-.475A1.25 1.25 0 0 1 12.36 10zm-9.843 1.5L5 11.59v1.66c0 .967.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 15 13.25V11.5h-2.46l-.1.303A1.75 1.75 0 0 1 10.78 13H9.22a1.75 1.75 0 0 1-1.66-1.197l-.1-.303H5Z"
    />
  </svg>
);
export default SvgOrderUnfulfilled;
