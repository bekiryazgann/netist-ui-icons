import * as React from "react";
import type { SVGProps } from "react";
const SvgNote = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6.55 7.25a.7.7 0 0 1 .7-.7h5.5a.7.7 0 0 1 0 1.4h-5.5a.7.7 0 0 1-.7-.7M7 9.05a.7.7 0 0 0 0 1.4h2.25a.7.7 0 1 0 0-1.4z" />
    <path
      fillRule="evenodd"
      d="M3.5 6.25A2.75 2.75 0 0 1 6.25 3.5h7.5a2.75 2.75 0 0 1 2.75 2.75v5.5a.75.75 0 0 1-.22.53l-4 4a.75.75 0 0 1-.53.22h-5.5a2.75 2.75 0 0 1-2.75-2.75zM6.25 5C5.56 5 5 5.56 5 6.25v7.5c0 .69.56 1.25 1.25 1.25H11v-2.25c0-.966.784-1.75 1.75-1.75H15V6.25C15 5.56 14.44 5 13.75 5zm7.69 7.5h-1.19a.25.25 0 0 0-.25.25v1.19z"
    />
  </svg>
);
export default SvgNote;
