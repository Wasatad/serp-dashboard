<template>
  <div>
    <dashboard-header></dashboard-header>
    <main-info></main-info>
    <main-filters></main-filters>
    <data-table></data-table>
    <info-charts></info-charts>
  </div>
</template>

<script>
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import MainInfo from "@/components/dashboard/MainInfo.vue";
import MainFilters from "@/components/dashboard/MainFilters.vue";
import DataTable from "@/components/dashboard/DataTable.vue";
import InfoCharts from "@/components/dashboard/InfoCharts.vue";
export default {
  components: { DashboardHeader, MainInfo, MainFilters, DataTable, InfoCharts },

  async asyncData({ params, query }) {
    const slug = params.slug;
    const param1 = query.param1;
    return { slug, param1 };
  },

  data() {
    return {};
  },

  methods: {},
  mounted() {
    console.log(this.$route.path.split("/")[3]);
  },
};
</script>

<style lang="scss"></style>
