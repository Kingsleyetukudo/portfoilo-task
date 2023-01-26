<template>
  <div class="container mx-auto border">
    <nav class="flex justify-between items-center">
      <img src="../images/kingsley-logo.png" alt="profile-logo" class="w-20" />
      <ul class="flex gap-4 border p-4">
        <li v-if="isActive">Home</li>
        <li>About</li>
        <li>Contact</li>

        {{
          name
        }}
      </ul>

      <div
        class="search-box border-emerald-400 border flex items-center bg-primary">
        <i class="material-icons p-2 text-white">search</i>
        <input
          type="text"
          class="outline-0 bg-transparent text-white"
          placeholder="search..." />
        <button class="btn p-2">Search</button>
      </div>

      <div>
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
    </nav>

    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup>
const name = ref("kingsley");
const isActive = ref(false);

const handleToggle = () => {
  let body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
};
const handleDarkMode = () => {
  let body = document.body;
  body.classList.add("dark");
};
const handleLightMode = () => {
  let body = document.body;
  body.classList.remove("dark");
};
</script>

<style scoped></style>
