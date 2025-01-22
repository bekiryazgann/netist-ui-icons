import * as React from "react";
import type { SVGProps } from "react";
const SvgPlane = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.745 2.813a2.483 2.483 0 0 1 3.58 3.442l-2.78 2.91c-.217.228-.326.342-.393.475q-.09.179-.104.38c-.01.148.025.302.096.61l1.728 7.487c.072.315.109.473.097.626a1 1 0 0 1-.11.386c-.072.136-.186.25-.415.479l-.37.37c-.607.607-.91.91-1.22.965a1 1 0 0 1-.77-.182c-.253-.188-.389-.594-.66-1.408l-2.01-6.029-3.345 3.345c-.2.2-.3.3-.366.418a1 1 0 0 0-.118.336c-.022.134-.006.274.025.555l.184 1.653c.03.28.046.42.025.554a1 1 0 0 1-.118.337c-.067.117-.166.217-.366.417l-.198.198c-.473.473-.71.71-.972.778a1 1 0 0 1-.69-.069c-.244-.118-.43-.397-.8-.953L6.106 18.54a2 2 0 0 0-.138-.194 1 1 0 0 0-.111-.112c-.045-.038-.095-.071-.194-.138L3.31 16.528c-.556-.371-.835-.557-.954-.8a1 1 0 0 1-.068-.69c.069-.263.305-.5.778-.973l.198-.197c.2-.2.3-.3.417-.366q.158-.09.336-.118c.134-.022.274-.006.555.025l1.653.184c.281.03.421.046.555.025a1 1 0 0 0 .336-.118c.118-.067.218-.166.417-.366l3.346-3.345-6.03-2.01c-.813-.271-1.22-.407-1.407-.66a1 1 0 0 1-.182-.77c.055-.31.358-.613.964-1.22l.37-.37c.23-.23.344-.344.48-.414a1 1 0 0 1 .386-.111c.153-.012.31.024.626.097l7.459 1.721c.31.072.465.108.615.097a1 1 0 0 0 .411-.122c.132-.072.242-.186.464-.415z"
    />
  </svg>
);
export default SvgPlane;
