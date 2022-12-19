<template>
  <div>
    <div class="dashboard-row">
      <div class="info-plate">
        <div class="plate-header">
          <div class="icon-container">
            <span style="font-size: 14px; color: #fff">
              <i class="fa-sharp fa-solid fa-key-skeleton"></i>
            </span>
          </div>
          <span class="plate-title">Количество ключей</span>
        </div>
        <div class="result">
          <div v-if="downloadingInProcess" class="downloader-wrapper">
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>
            <span class="circle circle-4"></span>
            <span class="circle circle-5"></span>
            <span class="circle circle-6"></span>
            <span class="circle circle-7"></span>
            <span class="circle circle-8"></span>
          </div>
          <div v-if="!downloadingInProcess" class="main-number">
            {{ keysQty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
          </div>
        </div>
      </div>
      <div class="info-plate">
        <div class="plate-header">
          <div class="icon-container">
            <span style="font-size: 14px; color: #fff">
              <i class="fa-sharp fa-solid fa-eye"></i>
            </span>
          </div>
          <span class="plate-title">Видимость ядра</span>
        </div>
        <div class="result">
          <div v-if="downloadingInProcess" class="downloader-wrapper">
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>
            <span class="circle circle-4"></span>
            <span class="circle circle-5"></span>
            <span class="circle circle-6"></span>
            <span class="circle circle-7"></span>
            <span class="circle circle-8"></span>
          </div>
          <div v-if="!downloadingInProcess" class="main-number">
            {{ visibility.now }}%
          </div>
          <div v-if="!downloadingInProcess" class="trend">
            <span style="font-size: 14px" :class="visibilityTextStyle"
              >{{ visibility.diff > 0 ? "+" : "" }}{{ visibility.diff }}%</span
            >
            <div :class="visibilityArrow"></div>
          </div>
        </div>
      </div>
      <div class="info-plate">
        <div class="plate-header">
          <div class="icon-container">
            <span style="font-size: 14px; color: #fff">
              <i class="fa-solid fa-ranking-star"></i>
            </span>
          </div>
          <span class="plate-title">Ср. позиция ключей</span>
        </div>
        <div class="result">
          <div v-if="downloadingInProcess" class="downloader-wrapper">
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>
            <span class="circle circle-4"></span>
            <span class="circle circle-5"></span>
            <span class="circle circle-6"></span>
            <span class="circle circle-7"></span>
            <span class="circle circle-8"></span>
          </div>

          <div v-if="!downloadingInProcess" class="main-number">
            {{ position.now }}
          </div>
          <div v-if="!downloadingInProcess" class="trend">
            <span style="font-size: 14px" :class="positionTextStyle"
              >{{ position.diff > 0 ? "+" : "" }}{{ position.diff }}</span
            >
            <div :class="positionArrow"></div>
          </div>
        </div>
      </div>
      <div class="info-plate">
        <div class="plate-header">
          <div class="icon-container">
            <span style="font-size: 14px; color: #fff">
              <i class="fa-sharp fa-solid fa-chart-waterfall"></i>
            </span>
          </div>
          <span class="plate-title">Тренд</span>
        </div>
        <div class="result">
          <div v-if="downloadingInProcess" class="downloader-wrapper">
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>
            <span class="circle circle-4"></span>
            <span class="circle circle-5"></span>
            <span class="circle circle-6"></span>
            <span class="circle circle-7"></span>
            <span class="circle circle-8"></span>
          </div>
          <div
            v-if="!downloadingInProcess"
            :class="[trendStyle, 'main-number']"
          >
            {{ trend > 0 ? "+" : "" }}{{ trend }}
          </div>
          <div v-if="!downloadingInProcess" :class="trendArrow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState([
      "keysQty",
      "visibility",
      "position",
      "trend",
      "downloadingInProcess",
    ]),
    visibilityTextStyle() {
      if (this.visibility.diff > 0) {
        return "green-text";
      } else if (this.visibility.diff < 0) {
        return "red-text";
      } else {
        return "grey-text";
      }
    },
    visibilityArrow() {
      if (this.visibility.diff > 0) {
        return "small-green-arrow";
      } else if (this.visibility.diff < 0) {
        return "small-red-arrow";
      } else {
        return "";
      }
    },
    positionTextStyle() {
      if (this.position.diff > 0) {
        return "green-text";
      } else if (this.position.diff < 0) {
        return "red-text";
      } else {
        return "grey-text";
      }
    },
    positionArrow() {
      if (this.position.diff > 0) {
        return "small-green-arrow";
      } else if (this.position.diff < 0) {
        return "small-red-arrow";
      } else {
        return "";
      }
    },
    trendStyle() {
      if (this.trend > 0) {
        return "green-text";
      } else if (this.trend < 0) {
        return "red-text";
      } else {
        return "";
      }
    },

    trendArrow() {
      if (this.trend > 0) {
        return "big-green-arrow";
      } else if (this.trend < 0) {
        return "big-red-arrow";
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapActions(["getDataFromServer"]),
  },
  created() {
    // Загружаем основную информацию по проекту
    // Проверяем, не внутренний ли это переход по вкладкам проекта и если нет, получаем акутальные данные

    if (this.$nuxt.context.from) {
      if (
        this.$nuxt.context.from.name != "dashboard-id-project-history" &&
        this.$nuxt.context.from.name != "dashboard-id-project-competitors" &&
        this.$nuxt.context.from.name != "dashboard-id-project-pages" &&
        this.$nuxt.context.from.name != "dashboard-id-project-settings"
      ) {
        this.getDataFromServer();
      }
    } else {
      this.getDataFromServer();
    }
  },
};
</script>

<style lang="scss">
.dashboard-row {
  background-color: #fff;
  width: 100%;
  padding: 32px;
  border-radius: 8px;
  margin-bottom: 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px 30px;

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }

  .info-plate {
    padding: 26px 20px;
    border-radius: 12px;
    min-width: 214px;
    height: 118px;

    .plate-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      margin-bottom: 12px;
      .icon-container {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .result {
      margin-left: 28px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      position: relative;
      .main-number {
        font-weight: 700;
        font-size: 26px;
      }

      .green-text {
        color: $green;
      }
      .red-text {
        color: $mainRed;
      }

      .grey-text {
        color: $darkGrey;
      }

      .trend {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2px;
      }

      .big-green-arrow {
        width: 24px;
        height: 24px;
        background: url("@/assets/img/icons/positive-trend-arrow-big.svg");
      }
      .big-red-arrow {
        width: 24px;
        height: 24px;
        background: url("@/assets/img/icons/negative-trend-arrow-big.svg");
      }

      .small-green-arrow {
        width: 18px;
        height: 18px;
        background: url("@/assets/img/icons/arrow-rise-small.svg");
      }
      .small-red-arrow {
        width: 18px;
        height: 18px;
        background: url("@/assets/img/icons/arrow-fall-small.svg");
      }
    }

    &:nth-child(odd) {
      background-color: rgba(227, 245, 255, 0.6);
      .icon-container {
        background-color: rgba(147, 202, 232, 1);
      }
    }
    &:nth-child(even) {
      background-color: rgba(229, 236, 246, 0.6);
      .icon-container {
        background-color: rgba(177, 208, 246, 1);
      }
    }
  }
}

.downloader-wrapper {
  position: absolute;
  top: 20%;
  left: 30%;
  transform: translate(-50%, -50%);
}
.circle {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #4e93e7;
  border-radius: 50%;
  animation: loading 1.5s cubic-bezier(0.8, 0.5, 0.2, 1.4) infinite;
  transform-origin: bottom center;
  position: relative;
}
@keyframes loading {
  0% {
    transform: translateY(0px);
    background-color: #4e93e7;
  }
  50% {
    transform: translateY(20px);
    background-color: #e6eef8;
  }
  100% {
    transform: translateY(0px);
    background-color: #4e93e7;
  }
}
.circle-1 {
  animation-delay: 0.1s;
}
.circle-2 {
  animation-delay: 0.2s;
}
.circle-3 {
  animation-delay: 0.3s;
}
.circle-4 {
  animation-delay: 0.4s;
}
.circle-5 {
  animation-delay: 0.5s;
}
.circle-6 {
  animation-delay: 0.6s;
}
.circle-7 {
  animation-delay: 0.7s;
}
.circle-8 {
  animation-delay: 0.8s;
}
</style>
