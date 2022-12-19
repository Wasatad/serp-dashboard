<template>
  <div class="charts-container">
    <h3 class="charts-title">Доля ключей в топе</h3>
    <div class="charts-row">
      <div class="chart-inner">
        <div class="chart-doghnut top-3">
          <DonutChart :chartData="topThree.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#3</span>
        </div>
        <div class="chart-center-info">
          {{ topThree.chartJS.datasets[0].data[0] }}%
          <hr />
          {{
            topThree.keysTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-5">
          <DonutChart :chartData="topFive.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#5</span>
        </div>
        <div class="chart-center-info">
          {{ topFive.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topFive.percentDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ topFive.percentDiff > 0 ? "(+" : ""
            }}{{ topFive.percentDiff < 0 ? "(" : ""
            }}{{ topFive.percentDiff != 0 ? topFive.percentDiff + "%)" : "%" }}
          </span>

          <hr />
          {{
            topFive.keysTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[
              topFive.keysDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ topFive.keysDiff > 0 ? "(+" : ""
            }}{{ topFive.keysDiff < 0 ? "(" : ""
            }}{{ topFive.keysDiff != 0 ? topFive.keysDiff + ")" : "" }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-10">
          <DonutChart :chartData="topTen.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#10</span>
        </div>
        <div class="chart-center-info">
          {{ topTen.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topTen.percentDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ topTen.percentDiff > 0 ? "(+" : ""
            }}{{ topTen.percentDiff < 0 ? "(" : ""
            }}{{ topTen.percentDiff != 0 ? topTen.percentDiff + "%)" : "%" }}
          </span>

          <hr />
          {{
            topTen.keysTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[topTen.keysDiff < 0 ? 'fall-indicator' : 'grow-indicator']"
            >{{ topTen.keysDiff > 0 ? "(+" : ""
            }}{{ topTen.keysDiff < 0 ? "(" : ""
            }}{{ topTen.keysDiff != 0 ? topTen.keysDiff + ")" : "" }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-30">
          <DonutChart :chartData="topThirty.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#30</span>
        </div>
        <div class="chart-center-info">
          {{ topThirty.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topThirty.percentDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ topThirty.percentDiff > 0 ? "(+" : ""
            }}{{ topThirty.percentDiff < 0 ? "(" : ""
            }}{{
              topThirty.percentDiff != 0 ? topThirty.percentDiff + "%)" : "%"
            }}
          </span>

          <hr />
          {{
            topThirty.keysTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[
              topThirty.keysDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ topThirty.keysDiff > 0 ? "(+" : ""
            }}{{ topThirty.keysDiff < 0 ? "(" : ""
            }}{{ topThirty.keysDiff != 0 ? topThirty.keysDiff + ")" : "" }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-50">
          <DonutChart :chartData="topFifty.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#50</span>
        </div>
        <div class="chart-center-info">
          {{ topFifty.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topFifty.percentDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ topFifty.percentDiff > 0 ? "(+" : ""
            }}{{ topFifty.percentDiff < 0 ? "(" : ""
            }}{{
              topFifty.percentDiff != 0 ? topFifty.percentDiff + "%)" : "%"
            }}
          </span>

          <hr />
          {{
            topFifty.keysTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[
              topFifty.keysDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ topFifty.keysDiff > 0 ? "(+" : ""
            }}{{ topFifty.keysDiff < 0 ? "(" : ""
            }}{{ topFifty.keysDiff != 0 ? topFifty.keysDiff + ")" : "" }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut top-100">
          <DonutChart :chartData="topHundred.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">#100</span>
        </div>
        <div class="chart-center-info">
          {{ topHundred.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              topHundred.percentDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ topHundred.percentDiff > 0 ? "(+" : ""
            }}{{ topHundred.percentDiff < 0 ? "(" : ""
            }}{{
              topHundred.percentDiff != 0 ? topHundred.percentDiff + "%)" : "%"
            }}
          </span>

          <hr />
          {{
            topHundred.keysTotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[
              topHundred.keysDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ topHundred.keysDiff > 0 ? "(+" : ""
            }}{{ topHundred.keysDiff < 0 ? "(" : ""
            }}{{ topHundred.keysDiff != 0 ? topHundred.keysDiff + ")" : "" }}
          </span>
        </div>
      </div>
      <div class="chart-inner">
        <div class="chart-doghnut up-100">
          <DonutChart :chartData="upHundred.chartJS" />
        </div>
        <div class="top-label">
          <span style="color: #969fa8; font-weight: 400">ТОП </span
          ><span style="color: #0d0f14; font-weight: 700">>100</span>
        </div>
        <div class="chart-center-info">
          {{ upHundred.chartJS.datasets[0].data[0] }}%
          <span
            :class="[
              upHundred.percentDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ upHundred.percentDiff > 0 ? "(+" : ""
            }}{{ upHundred.percentDiff < 0 ? "(" : ""
            }}{{
              upHundred.percentDiff != 0 ? upHundred.percentDiff + "%)" : "%"
            }}
          </span>

          <hr />
          {{
            upHundred.keysTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          <span
            :class="[
              upHundred.keysDiff < 0 ? 'fall-indicator' : 'grow-indicator',
            ]"
            >{{ upHundred.keysDiff > 0 ? "(+" : ""
            }}{{ upHundred.keysDiff < 0 ? "(" : ""
            }}{{ upHundred.keysDiff != 0 ? upHundred.keysDiff + ")" : "" }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DonutChart from "@/components/charts/DonutChart.vue";
import { mapState } from "vuex";
export default {
  components: { DonutChart },
  data() {
    return {
      topThree: {},
      topFive: {},
      topTen: {},
      topThirty: {},
      topFifty: {},
      topHundred: {},
      upHundred: {},
    };
  },
  computed: {
    ...mapState([
      "topThreeData",
      "topFiveData",
      "topTenData",
      "topThirtyData",
      "topFiftyData",
      "topHundredData",
      "upHundredData",
    ]),
  },
  created() {
    this.topThree = this.topThreeData;
    this.topFive = this.topFiveData;
    this.topTen = this.topTenData;
    this.topThirty = this.topThirtyData;
    this.topFifty = this.topFiftyData;
    this.topHundred = this.topHundredData;
    this.upHundred = this.upHundredData;
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
