import * as React from "react";
import type { SVGProps } from "react";
const SvgView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
    <path
      fillRule="evenodd"
      d="M10 4C7.524 4 5.652 5.23 4.423 6.532a9.3 9.3 0 0 0-1.4 1.922 6 6 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922C5.652 14.77 7.523 16 10 16s4.348-1.23 5.577-2.532a9.3 9.3 0 0 0 1.4-1.922 6 6 0 0 0 .37-.818c.082-.227.153-.488.153-.728s-.071-.501-.152-.728a6 6 0 0 0-.371-.818 9.3 9.3 0 0 0-1.4-1.922C14.348 5.23 12.477 4 10 4m-5.999 6.002v-.004c.004-.02.017-.09.064-.223a4.5 4.5 0 0 1 .278-.608 7.8 7.8 0 0 1 1.17-1.605C6.555 6.458 8.058 5.5 10 5.5s3.445.958 4.486 2.062a7.8 7.8 0 0 1 1.17 1.605c.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223a4.5 4.5 0 0 1-.278.608 7.8 7.8 0 0 1-1.17 1.605C13.445 13.542 11.942 14.5 10 14.5s-3.445-.958-4.486-2.062a7.8 7.8 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223"
    />
  </svg>
);
export default SvgView;
