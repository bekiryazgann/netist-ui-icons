import * as React from "react";
import type { SVGProps } from "react";
const SvgTipJar = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9.375 7.25a1.875 1.875 0 0 0 0 3.75h1.25a.375.375 0 0 1 0 .75H8.25a.75.75 0 0 0 0 1.5H9a.75.75 0 0 0 1.5 0h.125a1.875 1.875 0 0 0 0-3.75h-1.25a.375.375 0 1 1 0-.75h2.375a.75.75 0 0 0 0-1.5H11a.75.75 0 0 0-1.5 0z" />
    <path
      fillRule="evenodd"
      d="M5.75 5.77q0-.28.065-.542A1 1 0 0 1 6.5 3.5h7a1 1 0 0 1 .685 1.728q.064.261.065.542a.77.77 0 0 0 .289.6l.055.044A2.42 2.42 0 0 1 15.5 8.3v5.45a2.75 2.75 0 0 1-2.75 2.75h-5.5a2.75 2.75 0 0 1-2.75-2.75V8.3c0-.733.334-1.427.906-1.886l.055-.043a.77.77 0 0 0 .289-.601m1.5 0q0-.143.049-.27h5.402a.8.8 0 0 1 .049.27c0 .69.313 1.341.852 1.772l.054.044A.92.92 0 0 1 14 8.3v5.45c0 .69-.56 1.25-1.25 1.25h-5.5C6.56 15 6 14.44 6 13.75V8.3c0-.278.126-.54.344-.714l.054-.044A2.27 2.27 0 0 0 7.25 5.77"
    />
  </svg>
);
export default SvgTipJar;
