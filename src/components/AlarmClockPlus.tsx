import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmClockPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3 2 6m20 0-3-3M6 19l-2 2m14-2 2 2m-8-5v-6m-3 3h6m-3 8a8 8 0 1 0 0-16.001A8 8 0 0 0 12 21"
    />
  </svg>
);
export default SvgAlarmClockPlus;
