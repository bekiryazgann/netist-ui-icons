import * as React from "react";
import type { SVGProps } from "react";
const SvgMeasurementSize = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11.75 5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5zm4 1.5c-.414 0-.75-.336-.75-.75S14.664 5 14.25 5a.75.75 0 0 1 0-1.5 2.25 2.25 0 0 1 2.25 2.25.75.75 0 0 1-.75.75m0 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75M6.25 12a.75.75 0 0 1-.75-.75V6.06l-.97.97a.749.749 0 1 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.749.749 0 1 1-1.06 1.06L7 6.06v5.19a.75.75 0 0 1-.75.75m2.5 1a.75.75 0 0 0 0 1.5h5.19l-.97.97a.749.749 0 1 0 1.06 1.06l2.25-2.25a.75.75 0 0 0 0-1.06l-2.25-2.25a.749.749 0 1 0-1.06 1.06l.97.97z" />
  </svg>
);
export default SvgMeasurementSize;
