import * as React from "react";
import type { SVGProps } from "react";
const SvgCollectionReference = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13 2.5A.75.75 0 0 1 13 4H9.971c-.468 0-.917.188-1.245.521L4.034 9.277a.749.749 0 1 1-1.068-1.053l4.692-4.756A3.25 3.25 0 0 1 9.971 2.5z" />
    <path d="M11.419 5a3.75 3.75 0 0 0-2.652 1.098L4.884 9.981a2.75 2.75 0 0 0 0 3.89l3.058 3.057c.763.764 2 .764 2.764 0a.749.749 0 1 0-1.06-1.06.456.456 0 0 1-.643 0L5.945 12.81a1.25 1.25 0 0 1 0-1.768l3.883-3.883a2.25 2.25 0 0 1 1.59-.659H13.5c.69 0 1.25.56 1.25 1.25v3.324a.75.75 0 0 0 1.5 0V7.75A2.75 2.75 0 0 0 13.5 5z" />
    <path d="M13.75 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3.28 7.97a.749.749 0 1 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-1.19z" />
  </svg>
);
export default SvgCollectionReference;
