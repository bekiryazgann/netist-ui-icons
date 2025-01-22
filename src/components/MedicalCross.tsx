import * as React from "react";
import type { SVGProps } from "react";
const SvgMedicalCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C14.24 3 13.96 3 13.4 3h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C9 3.76 9 4.04 9 4.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C8.24 9 7.96 9 7.4 9H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 9.76 3 10.04 3 10.6v2.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 15 4.04 15 4.6 15h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C9 15.76 9 16.04 9 16.6v2.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C9.76 21 10.04 21 10.6 21h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C15 20.24 15 19.96 15 19.4v-2.8c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C15.76 15 16.04 15 16.6 15h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 14.24 21 13.96 21 13.4v-2.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 9 19.96 9 19.4 9h-2.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C15 8.24 15 7.96 15 7.4z"
    />
  </svg>
);
export default SvgMedicalCross;
