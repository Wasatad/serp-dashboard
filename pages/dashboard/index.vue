<template>
  <dashboard-header></dashboard-header>
</template>

<script>
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
export default {
  components: { DashboardHeader },
  name: "IndexPage",

  //Демо заглушка (редирект на рандомный id проекта)
  beforeCreate() {
    this.$router.push({ path: "/dashboard/226321/main-data" });
  },
  // created() {
  //   console.log(this.$router.history.current.path);
  // },
};
</script>
