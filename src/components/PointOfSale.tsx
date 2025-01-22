import * as React from "react";
import type { SVGProps } from "react";
const SvgPointOfSale = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M9.5 13.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M4.604 4.907A1.75 1.75 0 0 1 6.32 3.5h7.36a1.75 1.75 0 0 1 1.716 1.407l.6 3A1.75 1.75 0 0 1 14.28 10h-1.272l.688 1.722.011.028H15c.966 0 1.75.784 1.75 1.75V15A1.75 1.75 0 0 1 15 16.75H5A1.75 1.75 0 0 1 3.25 15v-1.5c0-.966.784-1.75 1.75-1.75h1.293l.01-.028.69-1.722H5.72a1.75 1.75 0 0 1-1.716-2.093zm7.488 6.843H7.908l.7-1.75h2.784zM6.32 5a.25.25 0 0 0-.245.201l-.6 3a.25.25 0 0 0 .245.299h8.56a.25.25 0 0 0 .245-.299l-.6-3A.25.25 0 0 0 13.68 5zM5 13.25a.25.25 0 0 0-.25.25V15c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z"
    />
  </svg>
);
export default SvgPointOfSale;
