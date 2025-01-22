import * as React from "react";
import type { SVGProps } from "react";
const SvgRollerBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 4.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C17.197 7 16.965 7 16.5 7h-11c-.465 0-.697 0-.89-.038A2 2 0 0 1 3.038 5.39C3 5.197 3 4.965 3 4.5s0-.697.038-.89A2 2 0 0 1 4.61 2.038C4.803 2 5.035 2 5.5 2h11c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89m0 0c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 6.102 22 6.568 22 7.5v.3c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 11 19.92 11 18.8 11h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C12 12.52 12 13.08 12 14.2v.8m-.4 7h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 21.24 14 20.96 14 20.4v-3.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C13.24 15 12.96 15 12.4 15h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 15.76 10 16.04 10 16.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C10.76 22 11.04 22 11.6 22"
    />
  </svg>
);
export default SvgRollerBrush;
