import * as React from "react";
import type { SVGProps } from "react";
const SvgMetaobject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16 6.5V5a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1v1.5H11a1 1 0 0 0-1 1V11H8.5V9.5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1V11h-.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-4q0-.13-.032-.25a1 1 0 0 0 .032-.25v-4a1 1 0 0 0-1-1zm-1.5 0v-1H13v1zM16 8v3h-4.5V8zM5.5 11H7v-1H5.5zM4 12.5v3h12v-3z"
    />
  </svg>
);
export default SvgMetaobject;
