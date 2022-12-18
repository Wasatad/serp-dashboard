<template></template>

<script>
export default {
  name: "IndexPage",

  beforeCreate() {
    this.$router.push({ path: "/dashboard" });
  },
};
</script>
