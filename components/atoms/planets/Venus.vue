<template functional>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 138 138"
    preserveAspectRatio="xMinYMin meet"
    class="a-planet -venus"
  >
    <defs>
      <filter
        id="7splggbpya"
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
        id="snom5fjpzb"
        d="M108 54c0 29.82-24.179 54-54.001 54C24.174 108 0 83.82 0 54 0 24.175 24.174 0 53.999 0 83.82 0 108 24.175 108 54z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(15 15)" class="a-planet__shape">
        <use fill="#000" filter="url(#7splggbpya)" xlink:href="#snom5fjpzb" />
        <use fill="#E6E9ED" xlink:href="#snom5fjpzb" />
      </g>
      <g class="a-planet__hallmarks">
        <path
          d="M14.435 3.326c.735.751 6.879 6.759 20.893 12.735 8.506 3.626 18.216 6.513 28.852 8.579 12.9 2.507 27.215 3.81 42.575 3.879-.33-1.53-.726-3.033-1.187-4.51-14.51-.124-28.034-1.376-40.238-3.73-10.294-1.98-19.676-4.742-27.886-8.21C30.15 8.991 25.15 5.913 22.24 3.876 19.109 1.684 17.662.191 17.632.16c-.023.019-.043.04-.065.061l-1.543 1.468c-.54.533-1.07 1.081-1.589 1.638zM69.482 47.318c12.87 2.747 24.78 6.355 35.453 10.736.493-1.413.936-2.858 1.319-4.322-10.819-4.414-22.855-8.044-35.835-10.813-11.207-2.39-23.138-4.144-35.46-5.211C17.615 36.202 4.294 36.495.106 36.647.036 37.78 0 38.923 0 40.077c0 .36.003.719.01 1.076 3.7-.143 17.006-.485 34.56 1.038 12.139 1.05 23.885 2.777 34.912 5.127zM64.694 74.351c-8.158-.797-16.73-.962-25.484-.495-12.749.686-22.01 2.493-24.692 3.063 1.252 1.339 2.57 2.614 3.948 3.819 4.219-.757 11.747-1.898 21.084-2.392 8.516-.452 16.848-.288 24.768.487 7.93.779 15.455 2.176 22.45 4.162 1.43-1.087 2.795-2.247 4.1-3.47-8.069-2.523-16.86-4.268-26.174-5.174z"
          transform="translate(15 28.922)"
        />
      </g>
    </g>
  </svg>
</template>
