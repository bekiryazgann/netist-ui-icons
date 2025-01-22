import * as React from "react";
import type { SVGProps } from "react";
const SvgIncentive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.966 4.59a.29.29 0 0 0-.417 0L6.134 8.072a.32.32 0 0 0-.068.362c.05.126.15.195.277.195h1.458l1.491 7.118a.31.31 0 0 0 .296.253h.339a.31.31 0 0 0 .295-.253l1.491-7.118h1.46a.29.29 0 0 0 .278-.195.32.32 0 0 0-.069-.362zM8.478 3.54a1.79 1.79 0 0 1 2.56-.001l3.415 3.482c1.108 1.13.353 3.108-1.28 3.108h-.241l-1.242 5.926A1.81 1.81 0 0 1 9.927 17.5h-.34a1.81 1.81 0 0 1-1.763-1.445l-1.241-5.926h-.24c-1.632 0-2.387-1.978-1.28-3.107l3.415-3.483ZM4.53 11.632a.75.75 0 0 1 .937.497l1.316 4.293a.75.75 0 1 1-1.434.44l-1.316-4.293a.75.75 0 0 1 .497-.937m10.399-.012a.75.75 0 0 1 .55.907l-1.053 4.293a.75.75 0 0 1-1.457-.357l1.053-4.293a.75.75 0 0 1 .907-.55"
    />
  </svg>
);
export default SvgIncentive;
