<template>
  <div class="container mx-auto border">
    <nav class="flex justify-between items-center">
      <img src="../images/logo.jpg" alt="logo" class="w-20" />
      <ul class="flex gap-4 border p-4">
        <li v-if="isActive">Home</li>
        <li>About</li>
        <li>Contact</li>

        {{
          name
        }}
      </ul>

      <div>
        <input type="checkbox" class="checkbox" id="chk" />
        <label class="label" for="chk">
          <i class="material-icons text-yellow-600"> nightlight_round </i>
          <i class="material-icons text-yellow-400"> light_mode </i>
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
  name.value = "etukudo";
  isActive.value = true;
  console.log("clicked");
  let body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
};
</script>

<style scoped></style>
