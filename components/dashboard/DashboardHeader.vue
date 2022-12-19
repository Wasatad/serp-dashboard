<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <div class="project-title">
        <div class="project-name">
          <h1>Carparts</h1>
          <el-popover
            placement="right"
            width="200"
            trigger="hover"
            content="Редактировать проект"
          >
            <el-button class="info-icon" slot="reference">
              <i class="fa-regular fa-pen"></i>
            </el-button>
          </el-popover>
        </div>
        <div class="project-site">
          <span style="font-size: 14px; color: #969fa8; margin-right: 4px">
            <i class="fa-regular fa-globe"></i>
          </span>
          <a class="project-site" target="blank" href="https://clck.ru/3vyXS"
            >https://car-parts.ru</a
          >
        </div>
      </div>
      <div class="project-controls">
        <el-tooltip
          class="download-btn"
          effect="light"
          content="Скачать отчет"
          placement="left"
        >
          <el-button
            ><i class="fa-regular fa-arrow-down-to-line"></i
          ></el-button>
        </el-tooltip>

        <button @click="getDataFromServer" class="refresh-btn">
          <span class="arrows">
            <i class="fa-regular fa-arrows-rotate"></i>
          </span>
          <span style="position: relative; bottom: 1px">Обновить позиции</span>
        </button>
      </div>
    </div>
    <div class="project-nav">
      <el-menu
        router
        :default-active="$route.path"
        background-color="#F8F8FA"
        class="project-tab-menu-horizontal"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item
          :index="'/dashboard/' + this.$route.params.id + '/' + 'main-data'"
          >Основные данные</el-menu-item
        >
        <el-menu-item
          :index="
            '/dashboard/' + this.$route.params.id + '/' + 'project-history'
          "
          >История</el-menu-item
        >
        <el-menu-item
          :index="
            '/dashboard/' + this.$route.params.id + '/' + 'project-competitors'
          "
          >Конкуренты</el-menu-item
        >
        <el-menu-item
          :index="'/dashboard/' + this.$route.params.id + '/' + 'project-pages'"
          >Страницы</el-menu-item
        >
        <el-menu-item
          :index="
            '/dashboard/' + this.$route.params.id + '/' + 'project-settings'
          "
          >Параметры</el-menu-item
        >
      </el-menu>
      <el-menu
        router
        :default-active="$route.path"
        class="project-tab-menu-vertical"
        @select="handleSelect"
      >
        <el-menu-item
          :index="'/dashboard/' + this.$route.params.id + '/' + 'main-data'"
          >Основные данные</el-menu-item
        >
        <el-menu-item
          :index="
            '/dashboard/' + this.$route.params.id + '/' + 'project-history'
          "
          >История</el-menu-item
        >
        <el-menu-item
          :index="
            '/dashboard/' + this.$route.params.id + '/' + 'project-competitors'
          "
          >Конкуренты</el-menu-item
        >
        <el-menu-item
          :index="'/dashboard/' + this.$route.params.id + '/' + 'project-pages'"
          >Страницы</el-menu-item
        >
        <el-menu-item
          :index="
            '/dashboard/' + this.$route.params.id + '/' + 'project-settings'
          "
          >Параметры</el-menu-item
        >
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    handleSelect() {},
    ...mapActions(["getDataFromServer"]),
  },
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding-top: 44px;

  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-bottom: 40px;

    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .project-name {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      .info-icon {
        background: none;
        margin-left: -6px;
        border: none;
        color: $mainRed;
        &:hover {
          color: $mainRed;
        }

        @media (max-width: 500px) {
          margin-left: -10px;
          margin-top: -3px;
        }
      }
    }

    .project-site {
      font-size: 14px;
      color: #969fa8;
      padding-top: 14px;

      @media (max-width: 500px) {
        padding-top: 6px;
      }

      .project-site-link {
        text-decoration: none !important;
        color: $darkGrey;
      }
    }
    .project-controls {
      .download-btn {
        font-size: 16px;
        padding: 16px 18px;
        border-radius: 6px;
        color: $darkGrey;
        background: rgba(227, 245, 255, 0);
        &:hover {
          background: rgba(227, 245, 255, 0.6);
        }
      }
      .refresh-btn {
        background-color: rgba(72, 191, 132, 0.1);
        color: rgba(64, 156, 90, 1);
        font-size: 14px;
        border: none;
        border-radius: 6px;
        padding: 14px 18px;
        height: 50px;
        cursor: pointer;

        .arrows {
          font-size: 18px;
          color: #409c5a;
          margin-right: 10px;
          padding-right: 12px;
          border-right: 1px solid rgba(64, 156, 90, 0.29);
          transition: 0.3s ease-in-out;
        }
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: $green;
          color: #fff;
          .arrows {
            border-right: 1px solid rgba(129, 228, 157, 1);
            color: #fff;
          }
        }
      }
    }
  }
  .project-nav {
    .project-tab-menu-horizontal {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 35px;

      @media (max-width: 800px) {
        display: none;
      }

      .el-menu-item {
        font-weight: 400;
        font-size: 13px;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: $darkGrey;
        padding: 0 24px;
        margin-right: 56px;

        @media (max-width: 1200px) {
          margin-right: 32px;
        }
        @media (max-width: 1100px) {
          padding: 0 16px;
        }
        @media (max-width: 1000px) {
          font-size: 12px;
          margin-right: 12px;
        }

        &:hover {
          background-color: rgba(243, 243, 248, 1) !important;
        }
      }
      .is-active {
        color: $mainRed;
        border-bottom: 2px solid $mainRed;
      }
    }

    .project-tab-menu-vertical {
      background-color: #f8f8fa;

      border-top: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      border-right: none;

      margin-bottom: 32px;
      padding: 24px 0;
      width: 250px;

      @media (min-width: 800px) {
        display: none;
      }
      .el-menu-item {
        height: 32px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
}
</style>
