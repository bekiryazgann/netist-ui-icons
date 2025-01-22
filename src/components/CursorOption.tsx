import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorOption = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 7.25V11a.75.75 0 0 0 1.5 0V7.25a3.75 3.75 0 0 0-3.75-3.75h-5.5A3.75 3.75 0 0 0 3.5 7.25v5.5a3.75 3.75 0 0 0 3.75 3.75H11a.75.75 0 0 0 0-1.5H7.25A2.25 2.25 0 0 1 5 12.75v-5.5A2.25 2.25 0 0 1 7.25 5h5.5A2.25 2.25 0 0 1 15 7.25" />
    <path d="M8.5 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2-3.75a.75.75 0 0 0 0 1.5h2.25a.75.75 0 0 0 0-1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H10.5a.75.75 0 0 1-.75-.75m2.466 1.466a.5.5 0 0 1 .474-.132l4.51 1.122a.5.5 0 0 1 .233.838l-1.164 1.165.841.84a.5.5 0 0 1 0 .708l-.353.353a.5.5 0 0 1-.707 0l-.841-.84-1.165 1.164a.5.5 0 0 1-.838-.233l-1.122-4.51a.5.5 0 0 1 .132-.475" />
  </svg>
);
export default SvgCursorOption;
