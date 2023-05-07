<template>
  <svg :class="`w-${size} h-${size} ${classes}`" viewBox="0 0 24 24">
    <path :class="fill" fill-rule="evenodd" clip-rule="evenodd" d="..."></path>
  </svg>
</template>

<script>
export default {
  name: "FontAwesomeIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "6",
    },
    fill: {
      type: String,
      default: "text-gray-700 dark:text-gray-400",
    },
    classes: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
