import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.2 14c.277 0 .416 0 .528.062a.53.53 0 0 1 .22.243c.05.118.037.243.012.494A8 8 0 1 1 9.201 6.04c.251-.025.376-.038.494.012a.53.53 0 0 1 .243.22c.062.113.062.251.062.528v6.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055zM14 2.8c0-.277 0-.415.062-.528a.53.53 0 0 1 .243-.22c.117-.05.243-.037.494-.012A8 8 0 0 1 21.96 9.2c.025.251.038.376-.012.494a.53.53 0 0 1-.22.243c-.113.062-.251.062-.528.062h-6.4c-.28 0-.42 0-.527-.054a.5.5 0 0 1-.218-.219C14 9.62 14 9.48 14 9.2z"
    />
  </svg>
);
export default SvgPieChart02;
