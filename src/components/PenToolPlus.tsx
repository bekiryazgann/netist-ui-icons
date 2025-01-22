import * as React from "react";
import type { SVGProps } from "react";
const SvgPenToolPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 7 8.834 8.762c-.304.087-.457.13-.583.212a1 1 0 0 0-.282.277c-.084.124-.131.275-.224.578L4 22m0 0 12.17-3.745c.304-.093.455-.14.58-.224a1 1 0 0 0 .276-.282c.082-.126.125-.279.212-.583L19 11M4 22l6.586-6.586M5 8V2M2 5h6m13.869 2.869L18.13 4.13c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668l-.738.738c-.396.396-.594.594-.668.822a1 1 0 0 0 0 .618c.074.228.272.426.668.822l3.738 3.738c.396.396.594.594.822.668a1 1 0 0 0 .618 0c.228-.074.426-.272.822-.668l.738-.738c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.228-.272-.426-.668-.822M12 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
    />
  </svg>
);
export default SvgPenToolPlus;
