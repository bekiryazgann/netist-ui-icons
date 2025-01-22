import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.106 3.445c-.356-.175-.669-.329-.931-.43-.269-.102-.59-.193-.94-.14a1.76 1.76 0 0 0-1.171.73c-.202.29-.262.619-.288.905-.026.28-.026.628-.026 1.025v8.93c0 .397 0 .745.026 1.025.026.286.086.615.288.905.274.393.698.657 1.172.73.349.053.67-.038.939-.14.262-.1.575-.255.931-.43l9.083-4.461c.442-.217.82-.403 1.103-.575.278-.17.595-.401.769-.765a1.75 1.75 0 0 0 0-1.508c-.174-.364-.49-.595-.77-.765-.282-.172-.66-.357-1.102-.575zM4.301 4.454a.25.25 0 0 1 .15-.094 1 1 0 0 1 .188.057c.19.072.44.195.836.389l9.02 4.431c.484.237.799.393 1.016.525.138.084.19.132.204.146q.017.044.017.092H4.25V5.569c0-.44 0-.72.02-.922a.8.8 0 0 1 .031-.193"
    />
  </svg>
);
export default SvgFlipVertical;
