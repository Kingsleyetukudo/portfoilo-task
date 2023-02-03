<template>
  <div class="container mx-auto font-bodyFont flex flex-col p-4 pt-7">
    <div class="self-end">
      <input type="checkbox" class="checkbox" id="chk" />
      <label class="label" for="chk">
        <i class="material-icons text-yellow-600" @click="handleDarkMode">
          nightlight_round
        </i>
        <i class="material-icons text-yellow-400" @click="handleLightMode">
          light_mode
        </i>
        <div class="ball" @click="handleToggle()"></div>
      </label>
    </div>
    <nav class="md:flex justify-between items-center pt-7">
      <div class="profile flex items-center">
        <img
          src="../images/kingsley-logo.png"
          alt="profile-logo"
          class="w-20" />
      </div>
      <ul class="flex gap-6 p-4 text-xl">
        <NuxtLink to="/" class="menuDark" ref="changeColor3">Home</NuxtLink>
        <NuxtLink to="/about" class="menuDark" ref="changeColor3"
          >About</NuxtLink
        >

        <li class="menuDark" ref="changeColor2">Projects</li>
        <!-- <li class="menuTrans" ref="changeColor3">About</li> -->
        <li class="menuDark" ref="changeColor4">Contact</li>
      </ul>

      <div class="flex flex-col gap-4">
        <div class="search-box" ref="borderLine">
          <i class="material-icons p-2">search</i>
          <input
            type="text"
            class="outline-0 bg-transparent text-white"
            placeholder="search..." />
          <button class="btn p-2">Search</button>
        </div>
      </div>
    </nav>

    <div class="container p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const name = ref("kingsley");
const isActive = ref(false);
const changeColor1 = ref(null);
const changeColor2 = ref(null);
const changeColor3 = ref(null);
const changeColor4 = ref(null);
const borderLine = ref(null);

const handleToggle = () => {
  let body = document.body;
  if (
    body.classList.contains("dark") &&
    borderLine.value.classList.contains("darkLine")
  ) {
    body.classList.remove("dark");
    borderLine.value.classList.remove("darkLine");
  } else {
    body.classList.add("dark");
    borderLine.value.classList.add("darkLine");
  }
};
const handleDarkMode = () => {
  let body = document.body;
  body.classList.remove("dark");
  borderLine.value.classList.remove("darkLine");
};
const handleLightMode = () => {
  let body = document.body;
  if (
    body.classList.contains("dark") &&
    borderLine.value.classList.contains("darkLine")
  ) {
    body.classList.remove("dark");
    borderLine.value.classList.remove("darkLine");
  } else {
    body.classList.add("dark");
    borderLine.value.classList.add("darkLine");
  }
};
</script>

<style scoped></style>
