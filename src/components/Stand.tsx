import * as React from "react";
import type { SVGProps } from "react";
const SvgStand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 17-5 5m11-5 5 5M12 2v2m0 18v-5m-6.8 0h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 15.48 22 14.92 22 13.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 4 19.92 4 18.8 4H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 5.52 2 6.08 2 7.2v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 17 4.08 17 5.2 17"
    />
  </svg>
);
export default SvgStand;
