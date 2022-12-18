<template></template>

<script>
export default {
  beforeCreate() {
    this.$router.push({ path: this.$route.path + "/main-data" });
  },
};
</script>

<style></style>
