<template>
  <div>
    <dashboard-header></dashboard-header>
    <el-empty description="Настройки"></el-empty>
  </div>
</template>

<script>
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
export default {
  components: { DashboardHeader },
  name: "IndexPage",
};
</script>
