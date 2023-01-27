<template>
  <div class="container mx-auto border font-bodyFont">
    <nav class="flex justify-between items-center p-4 pt-7">
      <div class="profile flex items-center">
        <img
          src="../images/kingsley-logo.png"
          alt="profile-logo"
          class="w-20" />
      </div>
      <ul class="flex gap-6 p-4 text-xl">
        <li class="menuTrans" ref="changeColor1">Home</li>
        <li class="menuTrans" ref="changeColor2">Projects</li>
        <li class="menuTrans" ref="changeColor3">About</li>
        <li class="menuTrans" ref="changeColor4">Contact</li>
      </ul>

      <div class="flex flex-col gap-4">
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

        <div
          class="search-box border-bgcolor border border-1 flex items-center bg-primary">
          <i class="material-icons p-2 text-bgcolor">search</i>
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

onMounted(() => {
  console.log(changeColor);
});

const handleToggle = () => {
  let body = document.body;
  if (
    body.classList.contains("dark") &&
    changeColor1.value.classList.contains("menuDark") &&
    changeColor2.value.classList.contains("menuDark") &&
    changeColor3.value.classList.contains("menuDark") &&
    changeColor4.value.classList.contains("menuDark")
  ) {
    body.classList.remove("dark");
    changeColor1.value.classList.remove("menuDark");
    changeColor2.value.classList.remove("menuDark");
    changeColor3.value.classList.remove("menuDark");
    changeColor4.value.classList.remove("menuDark");
  } else {
    body.classList.add("dark");
    changeColor1.value.classList.add("menuDark");
    changeColor2.value.classList.add("menuDark");
    changeColor3.value.classList.add("menuDark");
    changeColor4.value.classList.add("menuDark");
  }

  changeColor.classList;
};
const handleDarkMode = () => {
  let body = document.body;
  body.classList.remove("dark");
};
const handleLightMode = () => {
  let body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
};
</script>

<style scoped></style>
