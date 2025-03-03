import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmClockOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 5.142a8 8 0 0 1 9.358 9.358m-1.722 3.634A8 8 0 1 1 6.862 6.869M4 4 2 6m20 0-3-3M6 19l-2 2m17 0L3 3"
    />
  </svg>
);
export default SvgAlarmClockOff;
