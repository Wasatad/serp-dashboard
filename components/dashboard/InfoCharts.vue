<template>
  <div class="charts-container">
    <h3 class="charts-title">Доля ключей в топе</h3>
    <div class="charts-row">
      <div class="chart-inner">
        <div class="chart-doghnut top-3">
          <DonutChart :chartData="topThreeData.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#3</span>
        </div>
        <div class="chart-center-info">
          {{ topThreeData.chartJS.datasets[0].data[0] }}%
          <hr />
          {{
            topThreeData.keysTotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-5">
          <DonutChart :chartData="topFiveData.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#5</span>
        </div>
        <div class="chart-center-info">
          {{ topFiveData.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topFiveData.percentDiff < 0 ? fallIndicator : growIndicator,
            ]"
            >{{ topFiveData.percentDiff > 0 ? "(+" : ""
            }}{{ topFiveData.percentDiff < 0 ? "(" : ""
            }}{{
              topFiveData.percentDiff != 0
                ? topFiveData.percentDiff + "%)"
                : "%"
            }}
          </span>

          <hr />
          {{
            topFiveData.keysTotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[topFiveData.keysDiff < 0 ? fallIndicator : growIndicator]"
            >{{ topFiveData.keysDiff > 0 ? "(+" : ""
            }}{{ topFiveData.keysDiff < 0 ? "(" : ""
            }}{{ topFiveData.keysDiff != 0 ? topFiveData.keysDiff + ")" : "" }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-10">
          <DonutChart :chartData="topTenData.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#10</span>
        </div>
        <div class="chart-center-info">
          {{ topTenData.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topTenData.percentDiff < 0 ? fallIndicator : growIndicator,
            ]"
            >{{ topTenData.percentDiff > 0 ? "(+" : ""
            }}{{ topTenData.percentDiff < 0 ? "(" : ""
            }}{{
              topTenData.percentDiff != 0 ? topTenData.percentDiff + "%)" : "%"
            }}
          </span>

          <hr />
          {{
            topTenData.keysTotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[topTenData.keysDiff < 0 ? fallIndicator : growIndicator]"
            >{{ topTenData.keysDiff > 0 ? "(+" : ""
            }}{{ topTenData.keysDiff < 0 ? "(" : ""
            }}{{ topTenData.keysDiff != 0 ? topTenData.keysDiff + ")" : "" }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-30">
          <DonutChart :chartData="topThirtyData.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#30</span>
        </div>
        <div class="chart-center-info">
          {{ topThirtyData.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topThirtyData.percentDiff < 0 ? fallIndicator : growIndicator,
            ]"
            >{{ topThirtyData.percentDiff > 0 ? "(+" : ""
            }}{{ topThirtyData.percentDiff < 0 ? "(" : ""
            }}{{
              topThirtyData.percentDiff != 0
                ? topThirtyData.percentDiff + "%)"
                : "%"
            }}
          </span>

          <hr />
          {{
            topThirtyData.keysTotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[
              topThirtyData.keysDiff < 0 ? fallIndicator : growIndicator,
            ]"
            >{{ topThirtyData.keysDiff > 0 ? "(+" : ""
            }}{{ topThirtyData.keysDiff < 0 ? "(" : ""
            }}{{
              topThirtyData.keysDiff != 0 ? topThirtyData.keysDiff + ")" : ""
            }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-50">
          <DonutChart :chartData="topFiftyData.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#50</span>
        </div>
        <div class="chart-center-info">
          {{ topFiftyData.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topFiftyData.percentDiff < 0 ? fallIndicator : growIndicator,
            ]"
            >{{ topFiftyData.percentDiff > 0 ? "(+" : ""
            }}{{ topFiftyData.percentDiff < 0 ? "(" : ""
            }}{{
              topFiftyData.percentDiff != 0
                ? topFiftyData.percentDiff + "%)"
                : "%"
            }}
          </span>

          <hr />
          {{
            topFiftyData.keysTotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[topFiftyData.keysDiff < 0 ? fallIndicator : growIndicator]"
            >{{ topFiftyData.keysDiff > 0 ? "(+" : ""
            }}{{ topFiftyData.keysDiff < 0 ? "(" : ""
            }}{{
              topFiftyData.keysDiff != 0 ? topFiftyData.keysDiff + ")" : ""
            }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-100">
          <DonutChart :chartData="topHundredData.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#100</span>
        </div>
        <div class="chart-center-info">
          {{ topHundredData.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topHundredData.percentDiff < 0 ? fallIndicator : growIndicator,
            ]"
            >{{ topHundredData.percentDiff > 0 ? "(+" : ""
            }}{{ topHundredData.percentDiff < 0 ? "(" : ""
            }}{{
              topHundredData.percentDiff != 0
                ? topHundredData.percentDiff + "%)"
                : "%"
            }}
          </span>

          <hr />
          {{
            topHundredData.keysTotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[
              topHundredData.keysDiff < 0 ? fallIndicator : growIndicator,
            ]"
            >{{ topHundredData.keysDiff > 0 ? "(+" : ""
            }}{{ topHundredData.keysDiff < 0 ? "(" : ""
            }}{{
              topHundredData.keysDiff != 0 ? topHundredData.keysDiff + ")" : ""
            }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut up-100">
          <DonutChart :chartData="upHundredData.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">>100</span>
        </div>
        <div class="chart-center-info">
          {{ upHundredData.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              upHundredData.percentDiff < 0 ? fallIndicator : growIndicator,
            ]"
            >{{ upHundredData.percentDiff > 0 ? "(+" : ""
            }}{{ upHundredData.percentDiff < 0 ? "(" : ""
            }}{{
              upHundredData.percentDiff != 0
                ? upHundredData.percentDiff + "%)"
                : "%"
            }}
          </span>

          <hr />
          {{
            upHundredData.keysTotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[
              upHundredData.keysDiff < 0 ? fallIndicator : growIndicator,
            ]"
            >{{ upHundredData.keysDiff > 0 ? "(+" : ""
            }}{{ upHundredData.keysDiff < 0 ? "(" : ""
            }}{{
              upHundredData.keysDiff != 0 ? upHundredData.keysDiff + ")" : ""
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DonutChart from "@/components/charts/DonutChart.vue";
export default {
  components: { DonutChart },
  data() {
    return {
      // Данные для графиков

      chartData: {
        labels: ["30", "70"],
        datasets: [
          {
            data: [30, 70],
            backgroundColor: ["#FF0035", "#EEEEEE"],
          },
        ],
      },
      topThreeData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [30, 70],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 2399,
        keysDiff: "",
        percentDiff: "",
      },
      topFiveData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [27, 73],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 2399,
        keysDiff: 25,
        percentDiff: 1.5,
      },
      topTenData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [28, 72],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 10343,
        keysDiff: -25,
        percentDiff: -1.5,
      },

      topThirtyData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [35, 65],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 122993,
        keysDiff: -2000,
        percentDiff: -2,
      },
      topFiftyData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [15, 85],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 11393,
        keysDiff: 230,
        percentDiff: 4,
      },
      topHundredData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [50, 50],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 443,
        keysDiff: -556,
        percentDiff: -150,
      },
      upHundredData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [25, 75],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 123553,
        keysDiff: 1004,
        percentDiff: 16,
      },

      // Стили
      fallIndicator: "fall-indicator",
      growIndicator: "grow-indicator",
    };
  },
};
</script>

<style lang="scss">
.charts-container {
  margin-bottom: 150px;

  .charts-title {
    margin-bottom: 40px;
    @media (max-width: 600px) {
      text-align: center;
    }
  }

  .charts-row {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 120px 32px;
    @media (max-width: 600px) {
      justify-content: center;
      align-items: center;
    }
    .chart-inner {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      .chart-doghnut {
        width: 170px;
        width: 170px;
        margin-bottom: 20px;
      }

      .top-label {
        font-size: 14px;
        text-align: center;
      }
      .chart-center-info {
        margin-top: -145px;
        text-align: center;
        font-size: 14px;
        hr {
          width: 90px;
          border: 1px solid #eeeeee;
        }

        .fall-indicator {
          color: $mainRed;
          font-size: 12px;
        }
        .grow-indicator {
          color: $green;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
