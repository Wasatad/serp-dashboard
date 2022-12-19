<template>
  <div>
    <div class="burger-menu">
      <img src="@/assets/img/serp-logo-min.svg" alt="" />
      <span
        @click="switchMobileMenu"
        v-if="!mobileMenuVisible"
        style="color: #fff; font-size: 32px"
        ><i class="fa-sharp fa-solid fa-bars"></i
      ></span>
      <span
        @click="switchMobileMenu"
        v-if="mobileMenuVisible"
        style="color: #fff; font-size: 32px"
        ><i class="fa-sharp fa-solid fa-xmark"></i
      ></span>
    </div>
    <div v-if="mobileMenuVisible" class="mobile-header">
      <div class="mobile-inner">
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
          <el-menu-item @click="switchMobileMenu" index="/dashboard">
            <i class="fa-regular fa-desktop"></i>
            <span>Общая информация</span>
          </el-menu-item>
          <el-menu-item @click="switchMobileMenu" index="/positions">
            <i class="fa-regular fa-list-ol"></i>
            <span>Мониторинг позиций</span>
          </el-menu-item>
          <el-menu-item @click="switchMobileMenu" index="/competitors">
            <i class="fa-regular fa-window-restore"></i>
            <span>Анализ конкурентов</span>
          </el-menu-item>
          <el-menu-item @click="switchMobileMenu" index="/seo">
            <i class="fa-regular fa-laptop-code"></i>
            <span>SEO-аудит сайтов</span>
          </el-menu-item>
          <el-menu-item @click="switchMobileMenu" index="/social">
            <i class="fa-regular fa-hashtag"></i>
            <span>Упоминания в соцсетях</span>
          </el-menu-item>
        </el-menu>
        <div ref="supportBtn" class="support-container">
          <div class="el-menu-vertical-bottom">
            <div class="support-tab">
              <i class="fa-regular fa-life-ring"></i>
              <span>Поддержка</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-container">
      <div class="breadcrumbs">
        <span style="font-size: 16px; color: #969fa8">
          <i class="fa-regular fa-house"></i>
        </span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/dashboard' }"
            >Общая информация</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/dashboard' }"
            >Проекты</el-breadcrumb-item
          >
          <el-breadcrumb-item>Carparts</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="profile-info">
        <div class="wallet">
          <span>Оплата</span>
          <img src="@/assets/img/icons/wallet.svg" alt="" />
        </div>
        <div class="profile">
          <span class="user-email">ivan-ivanovich@yandex.ru</span>
          <img src="@/assets/img/icons/avatar.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuVisible: false,
    };
  },
  methods: {
    switchMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible;
      if (!document.body.classList.contains("no-scroll")) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
  },
};
</script>

<style lang="scss">
.burger-menu {
  background-color: #0d0f14;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 102;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  @media (min-width: 700px) {
    display: none;
  }
}

.mobile-inner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
}
.mobile-header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  background-color: #0d0f14;

  .el-menu {
    margin-top: 56px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .is-active {
      color: $mainRed !important;
    }
  }
  @media (min-width: 700px) {
    display: none;
  }

  .support-container {
    width: 100%;
    height: 68px;
    margin: 0 auto;
    position: absolute;
    bottom: 0px;
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
      justify-content: center;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #191b21;
      }

      .support-tab {
        display: flex;
        align-items: center;
        justify-content: flex-start;

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
}
.header-container {
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  @media (max-width: 700px) {
    margin-top: 70px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    height: auto;
  }

  .el-breadcrumb {
    line-height: 1.4 !important;
  }

  .breadcrumbs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    .is-link:hover {
      color: $mainRed !important;
    }
  }

  .profile-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    .wallet {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: $darkGrey;
      gap: 8px;
      border-right: 1px solid #e0e0e0;

      img {
        margin-right: 18px;
      }
    }
    .profile {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      @media (max-width: 500px) {
        img {
          display: none;
        }
      }
    }
  }
}
</style>
