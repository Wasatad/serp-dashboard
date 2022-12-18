<template>
  <DoughnutElem :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

export default {
  name: "DonutChart",
  components: { DoughnutElem: Doughnut },
  props: {
    chartId: {
      type: String,
      default: "area-chart",
    },
    chartData: {
      type: Object,
      default() {
        return {
          labels: ["50", "20", "33", "12"],
          datasets: [{ data: [50, 20, 33, 12] }],
        };
      },
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,

        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },

        backgroundColor: "#FF0035",
        borderColor: "#E4E4E4",
        cutout: "80%",
        borderWidth: "1",
      },
    };
  },
  mounted() {},
};
</script>
