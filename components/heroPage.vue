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
      <div class="border border-gray-800 w-full relative">
        <div
          class="profileImage absolute animate-wiggle border border-gray-700"></div>
        <!-- <img src="../images/kingsley-pic.png" alt="" />
        <div class="border w-80 h-80 border-gray-900"></div> -->
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.profileImage {
  border-radius: 30% 70% 70% 30% / 21% 40% 60% 79%;
  background-color: aqua;
  width: 50px;
  height: 50px;
}
</style>
