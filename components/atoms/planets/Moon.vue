<template functional>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 138 138"
    preserveAspectRatio="xMinYMin meet"
    class="a-planet -moon"
  >
    <defs>
      <filter
        id="ie7n9nv46a"
        width="141.7%"
        height="141.7%"
        x="-20.8%"
        y="-20.8%"
        filterUnits="objectBoundingBox"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="7.5"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0.22 0 0 0 0 0 0.22 0 0 0 0 0 0.22 0 0 0 0 0 0.35 0"
        />
      </filter>
      <path
        id="1ecqc8m4ab"
        d="M108 54c0 29.82-24.178 54-54 54-29.823 0-54-24.18-54-54C0 24.177 24.177 0 54 0c29.822 0 54 24.177 54 54z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(15 15)" class="a-planet__shape">
        <use fill="#000" filter="url(#ie7n9nv46a)" xlink:href="#1ecqc8m4ab" />
        <use fill="#E6E9ED" xlink:href="#1ecqc8m4ab" />
      </g>
      <g class="a-planet__hallmarks">
        <path
          d="M69.96 56.392c0 3.725-3.02 6.75-6.75 6.75-3.729 0-6.75-3.025-6.75-6.75 0-3.73 3.021-6.75 6.75-6.75 3.73 0 6.75 3.02 6.75 6.75zM42.96 6.89c0 3.73-3.021 6.75-6.75 6.75-3.728 0-6.75-3.02-6.75-6.75 0-3.727 3.022-6.75 6.75-6.75 3.729 0 6.75 3.023 6.75 6.75zM72.21 24.89c0 4.97-4.03 9-9 9-4.971 0-9-4.03-9-9s4.029-8.998 9-8.998c4.97 0 9 4.029 9 8.999zM45.21 69.892c0 4.97-4.029 8.998-9 8.998-4.97 0-9-4.027-9-8.998 0-4.973 4.03-9.004 9-9.004 4.971 0 9 4.031 9 9.004zM31.7 38.39c0 8.698-7.052 15.748-15.75 15.748S.2 47.088.2 38.391c0-8.698 7.052-15.75 15.75-15.75s15.75 7.052 15.75 15.75z"
          transform="translate(28.29 30.61)"
        />
      </g>
    </g>
  </svg>
</template>
