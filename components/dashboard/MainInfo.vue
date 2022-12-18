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
          <div class="main-number">120 203</div>
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
          <div class="main-number">65%</div>
          <div class="trend">
            <span style="color: #41b562" class="trend-number">+9.15%</span>
            <img
              class="trend-icon"
              src="@/assets/img/icons/arrow-rise-small.svg"
              alt=""
            />
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
          <div class="main-number">20,2</div>
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
          <div style="color: #ff0035" class="main-number">- 12,2</div>
          <div class="trend">
            <img
              class="trend-icon"
              src="@/assets/img/icons/negative-trend-arrow-big.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keys: 120203,
      visibility: {
        now: 65,
        diff: 9.16,
      },
      position: 20.2,
      trend: -12.2,
    };
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
    // height: 120px;
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
      .main-number {
        font-weight: 700;
        font-size: 26px;
      }

      .trend {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2px;

        .trend-icon {
        }
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
</style>
