import * as React from "react";
import type { SVGProps } from "react";
const SvgFlower = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.749 11.957c2.545-.294 4.501-2.066 4.501-4.207 0-2.347-2.35-4.25-5.25-4.25S4.75 5.403 4.75 7.75c0 2.141 1.956 3.913 4.501 4.207L9.25 12v4.25a.75.75 0 0 0 1.5 0V12zM10 10.5c2.383 0 3.75-1.512 3.75-2.75S12.383 5 10 5 6.25 6.512 6.25 7.75 7.617 10.5 10 10.5"
    />
    <path
      fillRule="evenodd"
      d="M8.5 15c0 .446-.083.872-.235 1.265a3.5 3.5 0 0 1-4.53-4.53A3.5 3.5 0 0 1 8.5 15M5 13a2 2 0 0 1 2 2 2 2 0 0 1-2-2m6.5 2c0 .446.083.872.235 1.265a3.5 3.5 0 0 0 4.53-4.53A3.5 3.5 0 0 0 11.5 15m3.5-2a2 2 0 0 0-2 2 2 2 0 0 0 2-2"
    />
  </svg>
);
export default SvgFlower;
