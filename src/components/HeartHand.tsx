import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartHand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 20.087h2.61c.34 0 .679.04 1.009.122l2.758.67c.598.146 1.222.16 1.826.042l3.05-.593a4.2 4.2 0 0 0 2.127-1.107l2.158-2.1a1.503 1.503 0 0 0 0-2.168 1.61 1.61 0 0 0-2.06-.143l-2.515 1.835c-.36.263-.799.405-1.25.405h-2.427 1.545c.871 0 1.577-.687 1.577-1.534v-.307c0-.703-.492-1.317-1.194-1.487l-2.385-.58A5 5 0 0 0 11.643 13c-.965 0-2.711.799-2.711.799L6 15.025M2 14.6v5.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 22 3.04 22 3.6 22h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C6 21.24 6 20.96 6 20.4v-5.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C5.24 13 4.96 13 4.4 13h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 13.76 2 14.04 2 14.6M17.191 3.592c-.596-1.249-1.972-1.91-3.31-1.272-1.339.639-1.909 2.153-1.348 3.483.346.821 1.338 2.417 2.045 3.516.261.406.392.61.583.728.164.102.369.157.561.15.225-.007.44-.118.87-.339 1.161-.598 2.818-1.483 3.529-2.022a2.66 2.66 0 0 0 .574-3.69c-.861-1.217-2.362-1.337-3.504-.554"
    />
  </svg>
);
export default SvgHeartHand;
