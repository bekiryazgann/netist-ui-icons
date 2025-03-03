import * as React from "react";
import type { SVGProps } from "react";
const SvgPaymentCapture = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.75 3.25a.75.75 0 0 0-1.5 0v2.097l-.756-.661a.75.75 0 1 0-.988 1.128l2 1.75a.75.75 0 0 0 .988 0l2-1.75a.75.75 0 0 0-.988-1.128l-.756.661zm1.682 4.781a2.27 2.27 0 0 1 4.115 1.917l-1.528 3.333a4.75 4.75 0 0 1-2.194 2.27l-2.24 1.12a.75.75 0 0 1-.67-1.342l2.24-1.12a3.25 3.25 0 0 0 1.5-1.553l1.528-3.333a.77.77 0 0 0-1.396-.65l-1.002 2.116a3.75 3.75 0 0 1-1.656 1.72q-.293.18-.641.267l-1.806.452-.013.003-.987.247a.75.75 0 0 1-.364-1.456l2.624-.656q.232-.058.444-.162a.827.827 0 0 0-.557-1.506l-.822.095a4.25 4.25 0 0 0-3.733 3.715l-.28 2.331a.75.75 0 1 1-1.489-.178l.28-2.331a5.75 5.75 0 0 1 5.05-5.027l.822-.095a2.33 2.33 0 0 1 2.206 1.025z"
    />
  </svg>
);
export default SvgPaymentCapture;
