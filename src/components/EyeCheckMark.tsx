import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeCheckMark = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4.779 9.165c-.221.453-.279.753-.279.835s.058.382.279.835c.21.427.533.925.983 1.398C6.652 13.17 8.026 14 10 14a.75.75 0 0 1 0 1.5c-2.444 0-4.196-1.045-5.325-2.233a7.2 7.2 0 0 1-1.243-1.773C3.172 10.962 3 10.418 3 10s.171-.962.432-1.494a7.2 7.2 0 0 1 1.243-1.773C5.805 5.545 7.555 4.5 10 4.5c2.432 0 4.12.972 5.224 2.1 1.083 1.107 1.6 2.355 1.754 2.968a.75.75 0 0 1-1.456.364c-.096-.387-.495-1.389-1.37-2.282C13.299 6.778 11.986 6 10 6c-1.974 0-3.348.83-4.238 1.767-.45.472-.774.971-.983 1.398" />
    <path
      fillRule="evenodd"
      d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 10 11.5"
    />
    <path d="M17.53 13.28a.749.749 0 1 0-1.06-1.06L14 14.69l-.97-.97a.749.749 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0z" />
  </svg>
);
export default SvgEyeCheckMark;
