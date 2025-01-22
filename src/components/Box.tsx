import * as React from "react";
import type { SVGProps } from "react";
const SvgBox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.5 8v8.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.22 21 17.38 21 15.7 21H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.72 3.5 17.88 3.5 16.2V8m.1-5h16.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C22 3.76 22 4.04 22 4.6v1.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C21.24 8 20.96 8 20.4 8H3.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C2 7.24 2 6.96 2 6.4V4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C2.76 3 3.04 3 3.6 3m6 8.5h4.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C16 12.26 16 12.54 16 13.1v.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H9.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C8 14.74 8 14.46 8 13.9v-.8c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C8.76 11.5 9.04 11.5 9.6 11.5"
    />
  </svg>
);
export default SvgBox;
