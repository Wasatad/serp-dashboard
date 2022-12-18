<template>
  <div ref="appContainer" class="app-container maximized">
    <el-container>
      <div ref="sidebar" class="sidebar-panel sidebar-minimized">
        <div class="sidebar-top">
          <div v-if="!sidebarMinimized" class="logo-container">
            <img src="@/assets/img/serp-logo.svg" alt="" />
          </div>
          <div v-if="sidebarMinimized" class="logo-container">
            <img src="@/assets/img/serp-logo-min.svg" alt="" />
          </div>
          <div class="nav-container">
            <el-menu
              router
              :default-active="'/' + $route.path.split('/')[1]"
              class="el-menu-vertical"
              @open="handleOpen"
              @close="handleClose"
              background-color="#0D0F14"
              text-color="#696B76"
              active-text-color="#fff"
            >
              <el-menu-item index="/dashboard">
                <i class="fa-regular fa-desktop"></i>
                <span>Общая информация</span>
              </el-menu-item>
              <el-menu-item index="/positions">
                <i class="fa-regular fa-list-ol"></i>
                <span>Мониторинг позиций</span>
              </el-menu-item>
              <el-menu-item index="/competitors">
                <i class="fa-regular fa-window-restore"></i>
                <span>Анализ конкурентов</span>
              </el-menu-item>
              <el-menu-item index="/seo">
                <i class="fa-regular fa-laptop-code"></i>
                <span>SEO-аудит сайтов</span>
              </el-menu-item>
              <el-menu-item index="/social">
                <i class="fa-regular fa-hashtag"></i>
                <span>Упоминания в соцсетях</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="sidebar-bottom">
          <div ref="supportBtn" class="support-container">
            <div class="el-menu-vertical-bottom">
              <div class="support-tab">
                <i class="fa-regular fa-life-ring"></i>
                <span>Поддержка</span>
              </div>
            </div>
          </div>
          <div @click="hideSidebar" class="sidebar-bottom-container">
            <div
              :class="[sidebarMinimized ? openSidebar : '']"
              class="collapse-bottom"
            >
              <img src="@/assets/img/icons/collapse-sidebar.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="main-container">
        <TheHeader />
        <Nuxt />
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarMinimized: true,

      //CSS
      openSidebar: "open-sidebar",
    };
  },
  methods: {
    handleOpen() {
      console.log("is opened");
    },
    handleClose() {
      console.log("is closed");
    },
    hideSidebar() {
      // console.log(this.$refs.sidebar.classList.contains("sidebar-minimized"));
      this.sidebarMinimized = !this.sidebarMinimized;
      if (!this.$refs.sidebar.classList.contains("sidebar-minimized")) {
        this.$refs.sidebar.classList.add("sidebar-minimized");
        this.$refs.appContainer.classList.add("maximized");
      } else {
        this.$refs.sidebar.classList.remove("sidebar-minimized");
        this.$refs.appContainer.classList.remove("maximized");
      }
    },
  },
};
</script>

<style lang="scss">
html {
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: "Inter", sans-serif;
}

* {
  box-sizing: border-box;
}

h1 {
  font-weight: 600;
  font-style: normal;
  font-size: 32px;
  color: $black;
  @media (max-width: 500px) {
    font-size: 26px;
  }
}

h2 {
  font-weight: 700;
  font-style: normal;
  font-size: 26px;
  color: $black;
}

h3 {
  font-weight: 600;
  font-style: normal;
  font-size: 22px;
  color: $black;
}

//Сбрасываем CSS
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  background-color: $lightBG;
  color: $black;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */

a {
  text-decoration: none;
}

/* Упрощаем работу с изображениями */
img {
  display: block;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}

button {
  outline: none;
}

textarea:focus,
input:focus {
  outline: none;
}

textarea {
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.no-scroll {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

//Общие стили для форм

label {
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: $darkGray;
  // margin-bottom: 10px;
}

.el-tooltip__popper.is-light {
  background: #fff;
  border: none !important;
  color: #606266 !important;
  font-size: 14px;
}

.popper__arrow {
  border-left-color: rgb(255, 255, 255) !important;
  border-right-color: rgb(255, 255, 255) !important;
}

.el-select-dropdown__item.selected {
  color: $mainRed;
  font-weight: 400;
}
.is-focus .el-input__inner {
  border-color: rgba(201, 201, 201, 1) !important;
}
input:focus {
  border-color: rgba(201, 201, 201, 1) !important;
}

// Настройки дефолтного лейаута

.app-container {
  padding-left: 330px;
  transition: 0.2s ease-in-out;
}

.maximized {
  padding-left: 110px !important;
  @media (max-width: 700px) {
    padding-left: 0 !important;
  }
}

.sidebar-minimized {
  max-width: 94px !important;
  // margin-left: -110px !important;

  .nav-container span {
    visibility: hidden;
  }
  .support-container span {
    visibility: hidden;
  }
}

.sidebar-panel {
  height: 100vh;
  width: 100%;
  // margin-left: -330px;
  max-width: 330px;
  position: fixed;
  left: 0;
  z-index: 100;
  overflow: hidden;
  background-color: $black;
  color: $darkGray;
  text-align: left;
  border-color: $black !important;
  font-weight: 500;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  transition: 0.2s ease-in-out;

  @media (max-width: 700px) {
    display: none;
  }

  .sidebar-top {
    width: 100%;
  }

  .logo-container {
    height: 90px;
    width: 100%;
    border-bottom: 1px solid rgba(30, 35, 49, 1);
    padding-left: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .nav-container {
    padding-top: 50px;
    span {
      transition: 0.1s ease-in-out;
    }
  }

  .el-menu {
    border-right: none;

    .el-menu-item {
      padding-left: 34px !important;
      border-right: 4px solid $black !important;
      font-size: 16px;

      i {
        margin-right: 15px;
        width: 24px;
        text-align: center;
        font-size: 16px;
        vertical-align: middle;
      }
    }

    .el-menu-item:hover {
      background-color: #191b21 !important;
    }

    .is-active {
      border-right: 4px solid red !important;
    }
  }
  .support-container {
    width: 330px;
    height: 68px;
    border-top: 1px solid rgba(30, 35, 49, 1);
    color: rgba(105, 107, 118, 1);

    span {
      transition: 0.1s ease-in-out;
    }

    .el-menu-vertical-bottom {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #191b21;
      }

      .support-tab {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 34px;

        i {
          margin-right: 15px;
          width: 24px;
          text-align: center;
          font-size: 16px;
          vertical-align: middle;
        }
      }
    }
  }

  .open-sidebar img {
    transform: scale(-1, 1);
  }
  .sidebar-bottom-container {
    width: 330px;
    height: 40px;
    border-top: 1px solid rgba(30, 35, 49, 1);
    background-color: rgb(3, 3, 3);
    color: rgba(105, 107, 118, 1);
    @media (max-width: 900px) {
      display: none;
    }
    .collapse-bottom {
      padding-left: 34px;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #191b21;
      }

      img {
        transition: 0.2s ease-in-out;
        width: 24px;
      }
    }
  }
}

.main-container {
  // margin-left: 330px;
  // padding: 0 20px 64px 100px;
  margin: 0 auto;
  padding: 20px 20px;
  // margin-left: 330px;

  width: 100%;
  max-width: 1440px;
  transition: 0.2s ease-in-out;
}
</style>
