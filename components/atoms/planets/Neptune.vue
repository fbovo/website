<template functional>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 138 138"
    preserveAspectRatio="xMinYMin meet"
    class="a-planet -neptune"
  >
    <defs>
      <filter
        id="f0t3rinnba"
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
        id="2408qeqvfb"
        d="M108 54c0 29.821-24.173 54-54 54-29.824 0-54-24.179-54-54C0 24.175 24.177 0 54 0c29.827 0 54 24.175 54 54z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(15 15)" class="a-planet__shape">
        <use fill="#000" filter="url(#f0t3rinnba)" xlink:href="#2408qeqvfb" />
        <use fill="#E6E9ED" xlink:href="#2408qeqvfb" />
      </g>
      <g class="a-planet__hallmarks">
        <path
          d="M60.75 18.14H7.226c-.843 1.457-1.621 2.96-2.326 4.5H60.75c1.242 0 2.251-1.009 2.251-2.252 0-1.242-1.009-2.247-2.251-2.247zM97.868 76.64H56.252c-1.243 0-2.251 1.008-2.251 2.25 0 1.243 1.008 2.248 2.251 2.248h37.997c1.285-1.43 2.491-2.933 3.619-4.499zM31.5 63.14H3.073c.543 1.532 1.153 3.035 1.825 4.498H31.5c1.242 0 2.25-1.005 2.25-2.247 0-1.243-1.008-2.252-2.25-2.252zM76.502 47.388c0 1.243 1.005 2.252 2.248 2.252h29.065c.125-1.484.184-2.983.184-4.5H78.75c-1.242 0-2.247 1.006-2.247 2.248zM15.752 42.89c0-1.243-1.009-2.252-2.251-2.252H.185c-.122 1.487-.184 2.986-.184 4.503h13.5c1.242 0 2.251-1.009 2.251-2.252zM38.25 4.64c1.242 0 2.25-1.008 2.25-2.25 0-1.243-1.008-2.252-2.25-2.252H24.143c-2.056 1.368-4.014 2.874-5.86 4.503H38.25zM72 47.388c0 3.731-6.042 6.75-13.5 6.75-7.456 0-13.5-3.019-13.5-6.75 0-3.727 6.044-6.75 13.5-6.75 7.458 0 13.5 3.023 13.5 6.75z"
          transform="translate(15 23.86)"
        />
      </g>
    </g>
  </svg>
</template>
