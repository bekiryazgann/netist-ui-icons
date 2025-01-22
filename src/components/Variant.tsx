import * as React from "react";
import type { SVGProps } from "react";
const SvgVariant = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.01 13.99a2.75 2.75 0 0 0 2.74 2.51h5a2.75 2.75 0 0 0 2.75-2.75v-5a2.75 2.75 0 0 0-2.51-2.74 2.75 2.75 0 0 0-2.74-2.51h-5A2.75 2.75 0 0 0 3.5 6.25v5a2.75 2.75 0 0 0 2.51 2.74M6 8.75A2.75 2.75 0 0 1 8.75 6h3.725c-.116-.57-.62-1-1.225-1h-5C5.56 5 5 5.56 5 6.25v5c0 .605.43 1.11 1 1.225zm1.5 4.836V8.75c0-.69.56-1.25 1.25-1.25h4.836zm7.5.164V8.914L8.914 15h4.836c.69 0 1.25-.56 1.25-1.25"
    />
  </svg>
);
export default SvgVariant;
