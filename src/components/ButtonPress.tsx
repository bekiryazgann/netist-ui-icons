import * as React from "react";
import type { SVGProps } from "react";
const SvgButtonPress = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5.75 2.5A1.75 1.75 0 0 0 4 4.25v3.5c0 .966.784 1.75 1.75 1.75a.75.75 0 0 0 0-1.5.25.25 0 0 1-.25-.25v-3.5A.25.25 0 0 1 5.75 4h8.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-.5a.75.75 0 0 0 0 1.5h.5A1.75 1.75 0 0 0 16 7.75v-3.5a1.75 1.75 0 0 0-1.75-1.75z" />
    <path
      fillRule="evenodd"
      d="M9.75 5A2.25 2.25 0 0 0 7.5 7.25v3.58l-.57-.258a1.75 1.75 0 0 0-2.429 1.216l-.07.312a2.25 2.25 0 0 0 .497 1.962l2.456 2.834a1.75 1.75 0 0 0 1.323.604h4.465a1.75 1.75 0 0 0 1.72-1.423l.67-3.523a1.75 1.75 0 0 0-1.267-2.018L12 9.924V7.25A2.25 2.25 0 0 0 9.75 5M9 7.25a.75.75 0 0 1 1.5 0v3.25c0 .34.229.637.557.725l2.851.76a.25.25 0 0 1 .181.288l-.67 3.524a.25.25 0 0 1-.247.203H8.707a.25.25 0 0 1-.19-.086l-2.456-2.835a.75.75 0 0 1-.165-.654l.07-.312a.25.25 0 0 1 .346-.173l1.63.735A.75.75 0 0 0 9 11.991z"
    />
  </svg>
);
export default SvgButtonPress;
