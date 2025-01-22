import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-3.5 2a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m10.25 3a.75.75 0 0 1 .75.75V12H12a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1v-1.75a2.25 2.25 0 0 0-4.5 0 .75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75m-2.25 4v2h4v-2zm-7.193-.153a5.24 5.24 0 0 0-1.718 2.16h5.724a.75.75 0 1 1 0 1.5h-5.93c-.407 0-.804-.167-1.073-.478a1.26 1.26 0 0 1-.24-1.243c.322-.96 1.094-2.246 2.361-3.157 1.298-.932 3.084-1.445 5.33-.854a.75.75 0 1 1-.382 1.45c-1.798-.473-3.126-.058-4.072.622"
    />
  </svg>
);
export default SvgPersonLock;
