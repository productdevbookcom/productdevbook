<template>
  <div class="main">
    <div class="background">
      <div class="patterns">
        <img v-for="i in 3" :key="i" class="pattern" src="logo.svg" alt="logo">
      </div>
      <div class="noise" />
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
.main {
  @apply w-full h-full;
}
</style>
