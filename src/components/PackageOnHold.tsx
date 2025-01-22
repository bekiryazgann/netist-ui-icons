import * as React from "react";
import type { SVGProps } from "react";
const SvgPackageOnHold = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 8v2.75a.75.75 0 0 0 1.5 0V7.856a2.75 2.75 0 0 0-.462-1.526l-1.219-1.828A2.25 2.25 0 0 0 12.947 3.5H7.151a2.25 2.25 0 0 0-1.836.95l-1.31 1.847a2.75 2.75 0 0 0-.505 1.59v6.863c0 .966.784 1.75 1.75 1.75h6a.75.75 0 0 0 0-1.5h-6a.25.25 0 0 1-.25-.25V8zM7.15 5a.75.75 0 0 0-.611.316L5.7 6.5h3.55V5zm3.6 1.5h3.599l-.778-1.166A.75.75 0 0 0 12.947 5H10.75z"
    />
    <path
      fillRule="evenodd"
      d="M7 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm.5 3.5v-2h3v2z"
    />
    <path d="M16.75 12.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-2.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" />
  </svg>
);
export default SvgPackageOnHold;
