import * as React from "react";
import type { SVGProps } from "react";
const SvgPackageReturned = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 10.75V8H5v6.75c0 .138.112.25.25.25h4a.75.75 0 0 1 0 1.5h-4a1.75 1.75 0 0 1-1.75-1.75V7.887c0-.57.177-1.125.506-1.59l1.309-1.848A2.25 2.25 0 0 1 7.151 3.5h5.796c.753 0 1.455.376 1.872 1.002l1.22 1.828c.3.452.461.983.461 1.526v2.894a.75.75 0 0 1-1.5 0M6.539 5.316A.75.75 0 0 1 7.151 5H9.25v1.5H5.7zm7.81 1.184H10.75V5h2.197c.251 0 .485.125.624.334z"
    />
    <path
      fillRule="evenodd"
      d="M6 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1.5.5v2h3v-2z"
    />
    <path d="M17.5 12.75a.75.75 0 0 0-1.5 0v.5A1.75 1.75 0 0 1 14.25 15h-.94l.22-.22a.749.749 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.749.749 0 1 0 1.06-1.06l-.22-.22h.94a3.25 3.25 0 0 0 3.25-3.25z" />
  </svg>
);
export default SvgPackageReturned;
