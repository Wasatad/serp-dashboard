<template>
  <div>
    <dashboard-header></dashboard-header>
    <el-empty description="История"></el-empty>
  </div>
</template>

<script>
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
export default {
  components: { DashboardHeader },
  name: "IndexPage",
  // created() {
  //   console.log(this.$router.history.current.path);
  // },
};
</script>
