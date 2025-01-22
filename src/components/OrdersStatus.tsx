import * as React from "react";
import type { SVGProps } from "react";
const SvgOrdersStatus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="m8.579 5.615-.867 1.409a1 1 0 0 1-.852.476H5A.75.75 0 1 1 5 6h1.58l1.428-2.32c.486-.79 1.693-.55 1.84.367l.59 3.694.864-1.296A1 1 0 0 1 12.134 6H15a.75.75 0 0 1 0 1.5h-2.599l-1.423 2.135c-.505.757-1.676.501-1.82-.397l-.58-3.623Z" />
    <path
      fillRule="evenodd"
      d="m5.156 10 .132-.89a.75.75 0 1 0-1.484-.22l-.21 1.417a9 9 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66q0-.645-.095-1.283l-.21-1.417a.75.75 0 0 0-1.483.22l.132.89H12.36a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171H9.221a.25.25 0 0 1-.237-.17l-.159-.475A1.25 1.25 0 0 0 7.64 10zm-.155 1.5L5 11.59v1.66c0 .967.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 15 13.25V11.5h-2.46l-.1.303A1.75 1.75 0 0 1 10.78 13H9.22a1.75 1.75 0 0 1-1.66-1.197l-.1-.303H5Z"
    />
  </svg>
);
export default SvgOrdersStatus;
