import * as React from "react";
import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 14.5h2.35l.408 2.856a.75.75 0 0 0 1.485 0l.407-2.856h2.35a2 2 0 0 0 2-2V12a2 2 0 0 0-1.944-2l-.609-2.738A2 2 0 0 0 14 5.5V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v.5a2 2 0 0 0 1.053 1.762l-.609 2.739A2 2 0 0 0 4.5 12v.5a2 2 0 0 0 2 2M7.981 10H9.25a.75.75 0 0 1 0 1.5h-2.5v-.007l-.265.007A.5.5 0 0 0 6 12v.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-.485-.5l-1.17-.032-1.108-4.988.999-.539A.5.5 0 0 0 12.5 5.5V5a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .264.441l1 .539z"
    />
  </svg>
);
export default SvgPin;
