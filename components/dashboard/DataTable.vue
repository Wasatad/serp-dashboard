<template>
  <div class="table-container">
    <div class="table-filters">
      <div class="search-container">
        <el-input
          @keyup.enter.native="fetchData"
          placeholder="Поиск ключевой фразы"
          v-model="searchInput"
          clearable
          class="table-search"
        >
          <el-button
            @click="fetchData"
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </el-input>
      </div>
      <div class="other-filters">
        <el-select
          v-model="activeGroup"
          placeholder="Выбор группы"
          @change="fetchData"
        >
          <el-option
            v-for="item in groups"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="tags-container">
          <el-autocomplete
            class="inline-input"
            v-model="activeTag"
            :fetch-suggestions="tagSearch"
            placeholder="Выберите теги"
            @select="handleTagSelect"
          ></el-autocomplete>
          <div class="tags-row">
            <el-tag
              v-for="tag in chosenTags"
              :key="tag.label"
              closable
              :disable-transitions="false"
              @close="handleDeleteTag(tag)"
            >
              {{ tag.label }}
            </el-tag>
          </div>
        </div>
      </div>
    </div>
    <div class="info-panel">
      <button
        class="delete-keys"
        @click="deleteSelectedKeys"
        v-if="multipleSelection.length > 0"
      >
        <span style="color: #FF0035; margin-right; 6px"
          ><i class="fa-regular fa-trash-can"></i
        ></span>
        Удалить: {{ multipleSelection.length }}
      </button>
    </div>
    <div class="data-table">
      <el-table
        ref="multipleTable"
        :data="table"
        :fit="true"
        v-loading="downloadingInProcess"
        :cell-class-name="brandIconsStyle"
        :header-cell-class-name="freqHeaderStyle"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" min-width="55"> </el-table-column>
        <el-table-column
          sortable
          label="Ключевая фраза"
          prop="phrase"
          min-width="180"
        >
        </el-table-column>
        <el-table-column
          sortable
          label="Позиция"
          prop="position.now"
          min-width="120"
        >
          <template slot-scope="scope">
            {{ scope.row.position.now }}
            <span
              :class="[
                scope.row.position.diff < 0 ? fallIndicator : growIndicator,
              ]"
              >{{ scope.row.position.diff > 0 ? "(+" : ""
              }}{{ scope.row.position.diff < 0 ? "(" : ""
              }}{{
                scope.row.position.diff != 0
                  ? scope.row.position.diff + ")"
                  : ""
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column sortable label="Частота" prop="freq" min-width="160">
          <template slot="header" slot-scope="scope">
            <div style="max-width: 150px">
              <el-select
                v-model="activeFrequency"
                placeholder="Select"
                @change="fetchData()"
              >
                <el-option
                  v-for="(item, index) in frequencyTypes"
                  :key="index"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </div>
          </template>
          <template slot-scope="scope">
            {{
              scope.row.freq.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }}
          </template>
        </el-table-column>
        <el-table-column sortable label="Тренд" prop="trend" min-width="100">
          <template slot-scope="scope">
            <span :class="[scope.row.trend < 0 ? trendGrow : trendFall]"
              >{{ scope.row.trend < 0 ? "" : "+" }}{{ scope.row.trend }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          sortable
          label="Коммерциализ."
          prop="commerce"
          min-width="170"
        >
          <template slot-scope="scope">
            <div>{{ scope.row.commerce }}%</div>
          </template>
        </el-table-column>
        <el-table-column label="Примеси" prop="impurities" min-width="90">
          <template slot-scope="scope">
            <div v-for="(item, id) in scope.row.impurities" :key="id">
              <img :src="transformLinkIntoImages(item)" alt="" />
            </div>
          </template>
        </el-table-column>
        <el-table-column label="URL" prop="url" width="160"> </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[100, 200, 500, 1000]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="table.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      searchInput: "",
      activeGroup: "",
      activeTag: "",
      chosenTags: [],

      // Table
      table: [],

      frequencyTypes: [
        "Частота",
        '"Частота"',
        "!Частота",
        "[Частота]",
        "[!Частота]",
      ],
      activeFrequency: "Частота",

      //Стили таблицы
      multipleSelection: [],
      fallIndicator: "fall-indicator",
      growIndicator: "grow-indicator",
      trendGrow: "trend-grow",
      trendFall: "trend-fall",

      // Пагинация
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(["downloadingInProcess", "tableData", "groups", "tags"]),
  },
  methods: {
    ...mapActions(["getDataFromServer"]),
    fetchData() {
      this.getDataFromServer();
    },

    tagSearch(queryString, cb) {
      var tags = this.tags;
      var results = queryString
        ? tags.filter(this.createFilter(queryString))
        : tags;
      // call callback function to return suggestions
      cb(results);
    },
    createFilter(queryString) {
      return (tag) => {
        return tag.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    },
    handleTagSelect(tag) {
      if (!this.chosenTags.includes(tag)) {
        this.chosenTags.push(tag);
        this.fetchData();
      }
    },
    handleDeleteTag(tag) {
      this.chosenTags = this.chosenTags.filter(
        (storedTag) => storedTag.value != tag.value
      );
      this.fetchData();
    },

    // Таблица
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
    },

    // Преобразуем строку с примесями в картинки
    transformLinkIntoImages(link) {
      if (link.length > 1) {
        return require(`@/assets/img/logo-brands/${link}.svg`);
      } else return "";
    },
    brandIconsStyle({ row, column }) {
      if (column.property == "impurities") {
        return "table-logos";
      } else return "";
    },

    freqHeaderStyle({ row, column }) {
      if (column.label == "Частота") {
        return "table-freq";
      } else return;
    },

    // Удаление ключей
    deleteSelectedKeys() {
      this.table = this.table.filter(
        (item) => !this.multipleSelection.includes(item)
      );
      this.fetchData();
    },

    // Пагинация
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
  },
  created() {
    this.table = this.tableData;
  },
};
</script>

<style lang="scss">
.table-container {
  .table-filters {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 14px 40px;
    margin-bottom: 28px;
    .table-search {
      max-width: 320px;
      @media (max-width: 500px) {
        max-width: 250px;
      }
    }

    .other-filters {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 14px;
      .tags-container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;
        .tags-row {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 6px;

          .el-tag,
          .el-tag__close {
            color: #4e93e7 !important;
          }
        }
      }
    }
  }

  .data-table {
    margin-bottom: 20px;

    .cell {
      line-height: 18px;
    }
    .table-logos {
      .cell {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;
      }

      label.el-checkbox {
        margin-bottom: none !important;
      }
    }

    .el-checkbox__inner {
      width: 18px !important;
      height: 18px !important;
      &:after {
        top: 1px;
        height: 9px;
        left: 6px;
      }
      &:before {
        top: 6px;
        height: 3px;
      }
    }

    thead th {
      background-color: rgba(245, 246, 248, 1);
      border-top: 1px solid rgba(228, 228, 228, 1);
      border-bottom: 1px solid rgba(228, 228, 228, 1) !important;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 400;
    }

    .fall-indicator {
      color: $mainRed;
      font-size: 12px;
    }
    .grow-indicator {
      color: $green;
      font-size: 12px;
    }

    .trend-grow {
      color: $mainRed;
    }
    .trend-fall {
      color: $green;
    }
  }

  .delete-keys {
    background-color: rgba(249, 242, 244, 1);
    color: $mainRed;
    border: none;
    border-radius: 8px;
    padding: 12px;
    font-size: 14px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  .table-freq .cell {
    display: flex !important;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
  }

  .pagination {
    .el-pagination {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 14px 0;
    }

    .el-select .el-input {
      width: 150px;
    }
    button {
      border-radius: 4px;
    }
    margin-bottom: 44px;
    padding-bottom: 64px;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
  }
}
</style>
