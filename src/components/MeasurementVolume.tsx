import * as React from "react";
import type { SVGProps } from "react";
const SvgMeasurementVolume = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 5v3.042a3 3 0 0 0 .137.895l1.552 4.966a2 2 0 0 1-1.91 2.597H6.72a2 2 0 0 1-1.909-2.597l1.552-4.966a3 3 0 0 0 .137-.895V5H6a.75.75 0 0 1 0-1.5h8A.75.75 0 0 1 14 5zM8 8.042V5h4v2.25h-.75a.75.75 0 0 0 0 1.5h.806q.051.322.149.634l.27.866h-4.95l.27-.866A4.5 4.5 0 0 0 8 8.042m-.944 3.708h5.888l.813 2.6a.5.5 0 0 1-.477.65H6.72a.5.5 0 0 1-.477-.65z"
    />
  </svg>
);
export default SvgMeasurementVolume;
