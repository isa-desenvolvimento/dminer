<template>
  <g class="modal">
    <polygon
      class="st0"
      points="118.48,48.36 118.48,332.69 470.54,332.69 489.38,307.28 489.38,205.63 496.36,205.63 496.36,48.36 "
    />
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1="248.2701"
      y1="2.3"
      x2="249.6415"
      y2="42.7578"
    >
      <stop offset="0" style="stop-color: #ebfcd0" />
      <stop offset="0.5" style="stop-color: #cafc88" />
      <stop offset="0.9988" style="stop-color: #aaff48" />
    </linearGradient>
    <polygon
      class="st1"
      points="462.6,3.72 363.01,3.72 337,21.12 46.41,22.26 22.37,48.36 23.69,175.71 11.73,186.4 11.73,307.96 
	36.79,332.69 118.48,332.69 118.48,48.36 496.36,48.36 496.36,37.37 "
    />
    <circle class="st2" cx="30.56" cy="169.64" r="2.31" />
    <circle class="st2" cx="3.63" cy="183.41" r="2.31" />
    <circle class="st2" cx="335.13" cy="22.95" r="2.81" />
    <circle class="st2" cx="350.1" cy="4.81" r="2.81" />
    <circle class="st2" cx="496.36" cy="205.63" r="2.31" />
    <circle class="st2" cx="489.38" cy="168.2" r="2.31" />
    <polygon
      class="st2"
      points="311.51,332.69 311.51,347.11 459.85,347.11 470.54,332.69 "
    />
    <polyline
      class="st3"
      points="337,21.12 363.01,3.72 462.6,3.72 496.36,37.37 496.36,203.32 "
    />
    <polyline
      class="st3"
      points="489.38,170.51 489.38,307.28 459.85,347.11 311.51,347.11 311.51,332.69 "
    />
    <line class="st3" x1="44.35" y1="339.8" x2="311.51" y2="340.14" />
    <polyline
      class="st3"
      points="28.99,171.22 11.73,186.4 11.73,307.96 36.79,332.69 470.54,332.69 "
    />
    <polyline
      class="st3"
      points="5.45,181.89 23.62,168.2 22.37,48.36 46.41,22.26 322.95,21.18 347.78,6.47 "
    />
    <circle class="st2" cx="44.14" cy="339.65" r="2.31" />
    <g>
      <foreignObject y="0" x="0" width="100%" height="90%">
        <slot />
      </foreignObject>
    </g>
  </g>
</template>

<style scoped>
.modal > .st0 {
  fill: #ffffff;
  stroke-width: 1;
}
.modal > .st1 {
  fill: url(#SVGID_1_);
  stroke-width: 1;
}
.modal > .st2 {
  fill: #aaff48;
  stroke: #231f20;
  stroke-width: 0.4905;
  stroke-miterlimit: 10;
}
.modal > .st3 {
  fill: none;
  stroke: #231f20;
  stroke-width: 0.981;
  stroke-miterlimit: 10;
}
</style>
