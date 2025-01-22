import * as React from "react";
import type { SVGProps } from "react";
const SvgChat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 15v-2.291A3 3 0 0 1 4.5 9.75V8.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v1.25a3 3 0 0 1-3 3h-2.461zm3.534-.75H12.5a4.5 4.5 0 0 0 4.5-4.5V8.5A4.5 4.5 0 0 0 12.5 4h-5A4.5 4.5 0 0 0 3 8.5v1.25a4.5 4.5 0 0 0 2.5 4.032V15a1.5 1.5 0 0 0 2.393 1.206l2.64-1.956ZM6 7.75A.75.75 0 0 1 6.75 7h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 6 7.75m.75 2a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);
export default SvgChat;
