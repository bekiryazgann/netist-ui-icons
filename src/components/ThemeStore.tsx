import * as React from "react";
import type { SVGProps } from "react";
const SvgThemeStore = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.25 3.5A3.75 3.75 0 0 0 3.5 7.25v5.5a3.75 3.75 0 0 0 3.75 3.75h4a.75.75 0 0 0 .75-.75V5h.75A2.25 2.25 0 0 1 15 7.25v1a.75.75 0 0 0 1.5 0v-1a3.75 3.75 0 0 0-3.75-3.75zm3.25 6V15H7.25A2.25 2.25 0 0 1 5 12.75V9.5zm0-4.5v3H5v-.75A2.25 2.25 0 0 1 7.25 5z"
    />
    <path d="M14 11.107a1.876 1.876 0 0 0 .625 3.643h.75a.375.375 0 0 1 0 .75H13.5a.75.75 0 0 0 0 1.5h.5v.25a.75.75 0 0 0 1.5 0v-.254a1.875 1.875 0 0 0-.125-3.746h-.75a.375.375 0 0 1 0-.75H16.5a.75.75 0 0 0 0-1.5h-1v-.25a.75.75 0 0 0-1.5 0z" />
  </svg>
);
export default SvgThemeStore;
