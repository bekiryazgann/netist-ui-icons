import * as React from "react";
import type { SVGProps } from "react";
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7.252 14.424-2.446-.281c-1.855-.213-2.38-2.659-.778-3.616l.065-.038A2.89 2.89 0 0 0 5.5 8.009V7.5a4.5 4.5 0 0 1 9 0v.51c0 1.016.535 1.958 1.408 2.479l.065.038c1.602.957 1.076 3.403-.778 3.616l-2.543.292v.365a2.7 2.7 0 0 1-5.4 0zm3.9.076h-2.4v.3a1.2 1.2 0 0 0 2.4 0zM8 13h4l3.024-.348a.452.452 0 0 0 .18-.837l-.065-.038a4.4 4.4 0 0 1-.747-.562A4.4 4.4 0 0 1 13 8.01V7.5a3 3 0 0 0-6 0v.51a4.39 4.39 0 0 1-2.138 3.767l-.065.038a.452.452 0 0 0 .18.838z"
    />
  </svg>
);
export default SvgNotification;
