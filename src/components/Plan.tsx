import * as React from "react";
import type { SVGProps } from "react";
const SvgPlan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="m14.208 4.688 1.533-2.3A.25.25 0 0 0 15.533 2h-3.066a.25.25 0 0 0-.208.389l1.533 2.299a.25.25 0 0 0 .416 0" />
    <path
      fillRule="evenodd"
      d="M11.25 7c0-.69.56-1.25 1.25-1.25h3.25c.69 0 1.25.56 1.25 1.25v8.75c0 .69-.56 1.25-1.25 1.25H4.25C3.56 17 3 16.44 3 15.75V13c0-.69.56-1.25 1.25-1.25H7V10c0-.69.56-1.25 1.25-1.25h3zm2.25 2.5V7.25h2v8.25H5.25v-2.25H8.5a.75.75 0 0 0 .75-.75v-2.25h3.5a.75.75 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgPlan;
