import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldCheckMark = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8.28 8.683a.75.75 0 0 0-1.06 1.06l1.548 1.548a.75.75 0 0 0 1.06 0l2.963-2.962a.75.75 0 0 0-1.06-1.06L9.298 9.7z" />
    <path
      fillRule="evenodd"
      d="M11.093 2.914a1.75 1.75 0 0 0-2.186 0l-.317.253a15.3 15.3 0 0 1-3.217 1.976l-.847.384a1.71 1.71 0 0 0-1.01 1.628c.28 6.25 4.38 9.048 5.732 9.802.47.262 1.034.262 1.503 0 1.352-.753 5.454-3.55 5.734-9.783a1.71 1.71 0 0 0-1.002-1.623l-.9-.416a15.3 15.3 0 0 1-3.136-1.938zm-1.25 1.171a.25.25 0 0 1 .313 0l.354.283a16.8 16.8 0 0 0 3.445 2.129l.9.415a.21.21 0 0 1 .131.195c-.246 5.489-3.827 7.906-4.965 8.54a.04.04 0 0 1-.02.006q-.007.002-.022-.006c-1.136-.634-4.718-3.053-4.965-8.56-.003-.066.037-.15.133-.194l.846-.385a16.8 16.8 0 0 0 3.534-2.17l.317-.253Z"
    />
  </svg>
);
export default SvgShieldCheckMark;
