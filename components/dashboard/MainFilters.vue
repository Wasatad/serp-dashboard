<template>
  <div>
    <div class="filters-container">
      <div iv class="filters-row">
        <div class="input-container">
          <label for="searchService">Поисковая система</label>
          <el-select
            v-model="searchService"
            placeholder="Выбор"
            id="searchService"
          >
            <el-option
              v-for="item in searchServicesOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="input-container">
          <label for="device">Тип устройства</label>
          <el-select v-model="device" placeholder="Выбор" id="device">
            <el-option
              v-for="item in devicesOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="input-container">
          <label for="device">Регион</label>
          <el-select v-model="location" placeholder="Выбор" id="location">
            <el-option
              v-for="item in locationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <el-collapse>
        <el-collapse-item>
          <template slot="title">
            <div @click="updateCollapseName">
              <span style="font-size: 14px; color: #ff0035; margin-right: 6px"
                ><i class="fa-light fa-sliders"></i
              ></span>
              {{ collapsedFiltersName }}
            </div>
            <div v-if="this.activeFiltersQty > 0" class="filters-bage">
              <span>{{ activeFiltersQty }}</span>
            </div>
          </template>
          <div class="filters-row first-row">
            <div class="input-container">
              <div class="label">Позиция</div>
              <div class="small-input-container">
                <el-input-number
                  ref="minPosition"
                  @change="newFilters = true"
                  controls-position="right"
                  v-model="minPosition"
                  placeholder="от 1"
                  :min="1"
                  :max="maxDinamicPosition"
                ></el-input-number>
                <el-input-number
                  ref="maxPosition"
                  @change="newFilters = true"
                  controls-position="right"
                  v-model="maxPosition"
                  placeholder="до 100"
                  :min="minDinamicPosition"
                  :max="100"
                ></el-input-number>
              </div>
            </div>
            <div class="input-container">
              <div class="label">Частотность</div>
              <div class="small-input-container">
                <el-input-number
                  ref="minFrequency"
                  @change="newFilters = true"
                  controls-position="right"
                  v-model="minFrequency"
                  placeholder="min"
                  :min="0"
                  :max="maxDinamicFrequency"
                ></el-input-number>
                <el-input-number
                  ref="maxFrequency"
                  @change="newFilters = true"
                  controls-position="right"
                  v-model="maxFrequency"
                  placeholder="max"
                  :min="minDinamicFrequency"
                ></el-input-number>
              </div>
            </div>
            <button
              @click="updateData"
              :class="[newFilters ? 'active-filters' : '', 'apply-filters']"
            >
              Применить
            </button>
          </div>
          <div class="urls-row">
            <div class="input-container urls">
              <div class="label">
                Релевантный URL
                <el-popover
                  placement="top"
                  width="400"
                  trigger="hover"
                  content="Показать фразы с заданным URL, найденные ботом в процессе сканирования"
                >
                  <el-button class="info-icon" slot="reference"
                    ><i class="fa-sharp fa-solid fa-circle-info"></i
                  ></el-button>
                </el-popover>
              </div>
            </div>
            <div class="urls-container">
              <el-tag
                :key="url"
                v-for="url in chosenURLs"
                closable
                :disable-transitions="false"
                @close="handleCloseUrl(url)"
              >
                {{ url }}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="urlInputVisible"
                v-model="urlInputValue"
                ref="saveUrlInput"
                size="default"
                @keyup.enter.native="handleUrlConfirm"
                @blur="handleUrlConfirm"
              >
              </el-input>
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="showUrlInput"
                >+ Добавить URL</el-button
              >
            </div>
          </div>
          <div class="filters-row">
            <div class="illustrated-filters">
              <div class="illustrated-filters-container">
                <div @click="setIllustratedFilter" class="illustrated-filter">
                  <div class="filter-icon top10-up"></div>
                  <div class="filter-description">Вошли в топ 10</div>
                </div>
                <div @click="setIllustratedFilter" class="illustrated-filter">
                  <div class="filter-icon top10-down"></div>
                  <div class="filter-description">Вышли из топ 10</div>
                </div>
              </div>
              <div class="illustrated-filters-container">
                <div @click="setIllustratedFilter" class="illustrated-filter">
                  <div class="filter-icon top100-up"></div>
                  <div class="filter-description">Вошли в топ 100</div>
                </div>
                <div @click="setIllustratedFilter" class="illustrated-filter">
                  <div class="filter-icon top100-down"></div>
                  <div class="filter-description">Вышли из топ 100</div>
                </div>
              </div>
              <div class="illustrated-filters-container">
                <div @click="setIllustratedFilter" class="illustrated-filter">
                  <div class="filter-icon grow-up"></div>
                  <div class="filter-description">Позиции повысились</div>
                </div>
                <div @click="setIllustratedFilter" class="illustrated-filter">
                  <div class="filter-icon fall-down"></div>
                  <div class="filter-description">Позиции<br />упали</div>
                </div>
              </div>
              <div class="illustrated-filters-container">
                <div @click="setIllustratedFilter" class="illustrated-filter">
                  <div class="filter-icon alarm"></div>
                  <div class="filter-description">Сильное<br />падение</div>
                </div>
              </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsedFiltersName: "Показать фильтры",
      searchServicesOptions: [
        {
          value: "yandex",
          label: "Yandex",
        },
        {
          value: "google",
          label: "Google",
        },
      ],
      searchService: "yandex",

      devicesOptions: [
        {
          value: "pc",
          label: "ПК",
        },
        {
          value: "phone",
          label: "Смартфон",
        },
        {
          value: "tablet",
          label: "Планшет",
        },
      ],
      device: "pc",

      locationOptions: [
        {
          value: "moscow",
          label: "Москва",
        },
        {
          value: "st-peter",
          label: "Санкт-Петербург",
        },
      ],
      location: "moscow",

      // Параметры фильтра по позиции, по умолчанию undefined, чтобы отображались плеэйсхолдеры
      minPosition: undefined,
      maxPosition: undefined,
      minFrequency: undefined,
      maxFrequency: undefined,

      // Проверка, изменились фильтры частотности и позиции
      newFilters: false,

      // Выбор url
      chosenURLs: [],
      urlInputVisible: false,
      urlInputValue: "",

      // Бейджик с количеством выбранных фильтров
      activeFiltersQty: 0,
      // Проверка раскрыты ли дополнительные фильтры
      filtersPanelOpened: false,
    };
  },
  computed: {
    // Регулирование парных инпутов ("от" должен всегда быть меньше "до")
    maxDinamicPosition() {
      if (this.maxPosition < 100) {
        return this.maxPosition - 1;
      } else {
        return 100;
      }
    },
    minDinamicPosition() {
      if (this.minPosition >= 1) {
        return this.minPosition + 1;
      } else {
        return 1;
      }
    },
    maxDinamicFrequency() {
      if (this.maxFrequency) {
        return this.maxFrequency - 1;
      } else {
        return undefined;
      }
    },
    minDinamicFrequency() {
      if (this.minFrequency >= 1) {
        return this.minFrequency + 1;
      } else {
        return 1;
      }
    },
  },
  methods: {
    // Имитация запроса на сервер, обновление данных
    updateData() {
      // console.log(this.oldMinPositon);

      let allAppliedFIlters = 0;
      if (this.minPosition != undefined && this.minPosition != 1) {
        allAppliedFIlters += 1;
      }
      if (this.maxPosition != undefined) {
        allAppliedFIlters += 1;
      }
      if (this.maxFrequency != undefined) {
        allAppliedFIlters += 1;
      }
      if (this.minFrequency != undefined && this.minFrequency != 0) {
        allAppliedFIlters += 1;
      }
      if (this.chosenURLs.length > 0) {
        allAppliedFIlters += 1;
      }
      this.activeFiltersQty = allAppliedFIlters;
      this.newFilters = false;
    },

    // Обновление названия кнопки раскрыавющейся панели с фильтрами
    updateCollapseName(val) {
      let collapseButton = document.querySelector(".el-collapse-item__header");
      if (!collapseButton.classList.contains("is-active")) {
        this.collapsedFiltersName = "Свернуть фильтры";
        this.filtersPanelOpened = true;
      } else {
        this.collapsedFiltersName = "Показать фильтры";
        this.filtersPanelOpened = false;
      }
    },

    // Валидация предельных значений фильтра позиции
    enforceMin(el) {
      console.log(el);
      if (el != "") {
        if (parseInt(el) < parseInt(this.minPosition)) {
          this.positionFrom = this.minPosition;
        }
        if (parseInt(el) > parseInt(this.maxPosition)) {
          this.positionFrom = this.maxPosition;
        }
      }
    },

    // Функционал добавления url
    handleCloseUrl(url) {
      this.chosenURLs.splice(this.chosenURLs.indexOf(url), 1);

      this.newFilters = true;
    },

    showUrlInput() {
      this.urlInputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveUrlInput.$refs.input.focus();
      });
    },

    handleUrlConfirm() {
      let urlInputValue = this.urlInputValue;
      if (urlInputValue) {
        this.chosenURLs.push(urlInputValue);
      }
      this.urlInputVisible = false;
      this.urlInputValue = "";
      this.newFilters = true;
    },
    setIllustratedFilter(e) {
      if (
        e.target.closest(".illustrated-filter").classList.contains("active")
      ) {
        e.target.closest(".illustrated-filter").classList.remove("active");
        console.log(1);
      } else {
        let allIllustratedFilters = document.querySelectorAll(
          ".illustrated-filter"
        );
        for (let i = 0; i < allIllustratedFilters.length; i++) {
          if (allIllustratedFilters[i].classList.contains("active")) {
            allIllustratedFilters[i].classList.remove("active");
          }
        }
        e.target.closest(".illustrated-filter").classList.add("active");
      }
    },
  },
};
</script>

<style lang="scss">
.filters-container {
  background-color: #fff;
  width: 100%;
  padding: 32px 32px 16px 32px;
  border-radius: 8px;
  margin-bottom: 74px;

  .filters-row {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 18px 24px;
    width: 100%;
    margin-bottom: 16px;
  }

  .first-row {
    margin-bottom: 20px;
    align-items: flex-end;
  }

  .urls-row {
    padding-bottom: 36px;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
  }

  .el-collapse {
    border: none;

    .el-collapse-item__header {
      border: none;
      color: #ff0035;
      margin-bottom: 8px;

      display: flex;

      .filters-bage {
        order: 1;
        width: 22px;
        height: 22px;
        background-color: $green;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 100%;
        span {
          margin-right: 1px;
        }
      }
    }
    .el-collapse-item__arrow {
      margin: 3px 8px 0 4px;
    }

    .el-collapse-item__wrap {
      border-bottom: none;
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
  }

  .label {
    display: block;
    font-weight: 400;
    font-size: 14px;
    color: $darkGray;
    margin-bottom: 10px;
  }

  .el-input-number {
    width: 130px !important;

    .el-input-number__increase:hover {
      border-color: rgba(201, 201, 201, 1) !important;
    }
  }

  .apply-filters {
    height: 40px;
    font-size: 13px;
    background-color: #f8f8fa;
    color: rgba(13, 15, 20, 0.4);
    outline: none;
    border: 1px solid #f8f8fa;
    padding: 0 36px;
    border-radius: 6px;
    transition: 0.2s ease-in-out;
  }

  .active-filters {
    cursor: pointer;
    background-color: rgba(185, 217, 255, 0.25);
    color: rgba(78, 147, 231, 1);
    &:hover {
      border: 1px solid rgba(78, 147, 231, 1);
    }
  }

  .input-container label {
    margin-bottom: 10px;
  }

  .small-input-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .urls {
    width: 100%;
  }

  .el-tag,
  .el-tag__close {
    color: #4e93e7 !important;
  }

  .urls-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
  }

  .input-new-tag {
    width: 100px;
  }

  .input-new-tag input {
    width: 100px;
    height: 32px;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .info-icon {
    background: none;
    padding: 0;
    border: none;
    color: $darkGray;
    &:hover {
      color: #4e93e7;
    }
  }

  .illustrated-filters {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px 36px;
    padding: 1px;
    flex-wrap: wrap;
    @media (max-width: 600px) {
      justify-content: center;
    }
    .illustrated-filters-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      @media (max-width: 600px) {
        justify-content: center;
      }

      @media (max-width: 400px) {
        width: 100%;
      }
      .illustrated-filter {
        width: 144px;
        height: 110px;
        background-color: rgba(248, 248, 250, 1);
        border-radius: 8px;
        padding: 4px 10px 16px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
        color: $black;
        line-height: 1.2;
        outline: 1px solid rgba(248, 248, 250, 1);
        text-align: center;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        @media (max-width: 400px) {
          width: 100%;
        }

        .filter-icon {
          transition: 0.3s ease-in-out;
        }

        .filter-description {
          opacity: 0.7;
        }

        .filter-icon.alarm {
          background-image: url("@/assets/img/icons/filter/alarm-disabled.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.fall-down {
          background-image: url("@/assets/img/icons/filter/fall-down-disabled.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.grow-up {
          background-image: url("@/assets/img/icons/filter/grow-up-disabled.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.top100-down {
          background-image: url("@/assets/img/icons/filter/top100-down-disabled.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.top100-up {
          background-image: url("@/assets/img/icons/filter/top100-up-disabled.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.top10-down {
          background-image: url("@/assets/img/icons/filter/top10-down-disabled.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.top10-up {
          background-image: url("@/assets/img/icons/filter/top10-up-disabled.svg");
          width: 50px;
          height: 50px;
        }
      }

      .illustrated-filter.active {
        outline: 1px solid #4e93e7;
        .filter-description {
          opacity: 1;
        }
        .filter-icon.alarm {
          background-image: url("@/assets/img/icons/filter/alarm-active.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.fall-down {
          background-image: url("@/assets/img/icons/filter/fall-down-active.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.grow-up {
          background-image: url("@/assets/img/icons/filter/grow-up-active.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.top100-down {
          background-image: url("@/assets/img/icons/filter/top100-down-active.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.top100-up {
          background-image: url("@/assets/img/icons/filter/top100-up-active.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.top10-down {
          background-image: url("@/assets/img/icons/filter/top10-down-active.svg");
          width: 50px;
          height: 50px;
        }
        .filter-icon.top10-up {
          background-image: url("@/assets/img/icons/filter/top10-up-active.svg");
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
