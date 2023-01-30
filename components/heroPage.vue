<template>
  <div>
    <div class="md:grid md:grid-cols-2">
      <div class="border flex flex-col justify-center items-start">
        <p class="text-xl font-medium py-4">
          Hello, <span class="text-primary">I'm</span>
        </p>
        <h1 class="text-6xl font-bold text-primary">Kingsley Etukudo</h1>
        <h2 class="text-3xl font-bold py-4">Frontend Developer</h2>
        <p class="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nobis
          harum, officia incidunt laudantium atque molestias in illo dolore nemo
          voluptatum quidem dicta! Tempore sunt cum veritatis iure aut
          accusantium!
        </p>

        <button class="btn px-6 py-2 rounded-xl text-white my-10">
          Let's Talk
        </button>

        <div>
          <p>Check out my:</p>
        </div>
      </div>
      <div class="border relative">
        <div class="hexagon">
          <img src="../images/kingsley-pic.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hexagon {
  width: 50%;
  height: 50%;
  background: orange;
  position: relative;
}

.hexagon:before {
  content: "";
  position: absolute;
  top: -25px;
  left: 0;
  width: 50%;
  height: 50%;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 25px solid orange;
}
.hexagon:after {
  content: "";
  position: absolute;
  bottom: -25px;
  left: 0;
  width: 50%;
  height: 50;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 25px solid orange;
}
</style>
