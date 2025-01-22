import * as React from "react";
import type { SVGProps } from "react";
const SvgMerge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 17a.75.75 0 0 1-.75-.75v-1.695a3.75 3.75 0 0 1 1.587-3.064l2.134-1.506a1.25 1.25 0 0 0 .529-1.021V4.963L7.259 6.801a.75.75 0 1 1-1.018-1.102l3.25-3a.75.75 0 0 1 1.018 0l3.25 3a.75.75 0 1 1-1.018 1.102L10.75 4.963v4a2.75 2.75 0 0 1-1.164 2.247l-2.134 1.506a2.25 2.25 0 0 0-.952 1.839v1.695a.75.75 0 0 1-.75.75m8.5 0a.75.75 0 0 1-.75-.75v-1.695a2.25 2.25 0 0 0-.953-1.839l-.854-.603a.75.75 0 1 1 .864-1.226l.856.604A3.75 3.75 0 0 1 15 14.555v1.695a.75.75 0 0 1-.75.75"
    />
  </svg>
);
export default SvgMerge;
