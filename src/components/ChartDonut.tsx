import * as React from "react";
import type { SVGProps } from "react";
const SvgChartDonut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.938 9.003c.068.547-.386.997-.938.997a7 7 0 1 1-7-7v1.5a5.5 5.5 0 1 0 5.5 5.5H13a3 3 0 1 1-3-3V3c0-.552.45-1.007.997-.938a8 8 0 0 1 6.94 6.94ZM16.325 8.5A6.5 6.5 0 0 0 11.5 3.675v3.612A3.1 3.1 0 0 1 12.713 8.5zM10 11.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
    />
  </svg>
);
export default SvgChartDonut;
