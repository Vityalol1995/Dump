<template>
  <div class="main_container">
    <header>
      <div class="header_left">
        <div class="header_icon">
          <router-link tag="div" to="/" class="header_left-img">
            <!--          <img src="../../assets/icon/header_home.svg" alt="">-->
          </router-link>
        </div>
        <div class="mobile" @click="burger"></div>
        <div class="header_menu" :class="{ active: mobile }">
          <div class="close_menu" @click="closeMenu"></div>
          <a class="mobile_button" href="##">
            <ComplaintButton/>
          </a>
          <router-link tag="div" to="/Dumps" class="header_left-item">Свалки</router-link>
          <router-link tag="div" to="/MapDump" class="header_left-item">Карта свалок</router-link>
          <router-link tag="div" to="/About" class="header_left-item">О проекте</router-link>
          <router-link tag="div" to="/Subbotniks" class="header_left-item">Субботники</router-link>
          <router-link tag="div" to="/AllNews" class="header_left-item">Новости</router-link>
          <router-link tag="div" to="/OurHeroes" class="header_left-item">Наши герои</router-link>
          <router-link tag="div" to="/Regulations" class="header_left-item">Мусорный ликбез</router-link>
          <router-link tag="div" to="/Contacts" class="header_left-item">Контакты</router-link>
        </div>
      </div>
      <div class="header_right">
        <div class="header_social">
          <div class="header_social-icon">
            <img src="../../assets/icon/insta.svg" alt="">
          </div>
          <div class="header_social-icon">
            <img src="../../assets/icon/fb.svg" alt="">
          </div>
          <div class="header_social-icon">
            <img src="../../assets/icon/vk.svg" alt="">
          </div>
        </div>
        <div class="header_old-web">
          <strong>Старый <br> сайт</strong>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import ComplaintButton from "components/ComplaintButton";
export default {
  name: "Header",
  components: {ComplaintButton},
  data () {
    return {
      mobile: false
    }
  },
  methods: {
    closeMenu () {
      this.mobile = false
    },
    burger() {
      this.mobile = true
    }
  },
  watch: {
    $route () {
      this.mobile = false
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 20px;

  .header_left {
    display: flex;
    .header_icon {
      .header_left-img {
        display: block;
        height: 40px;
        width: 40px;
        background-image: url('../../assets/home.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 14px 14px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        s-webkit-transition-duration: 0.5s;
        -o-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        transition-duration: 0.5s;
        cursor: pointer;
        margin-top: 15px;
      }

      .router-link-exact-active {
        background-image: url('../../assets/icon/header_home.svg');
        margin-top: 0;
        padding-top: 54px;
        background-position: 50% 65%;
        background-color: #E40000;
        border-radius: 0 0 4px 4px;
      }
    }
    .mobile {
      background-image: url('../../assets/icon/mobilemenu.svg');
      background-size: 32px 32px;
      background-repeat: no-repeat;
      background-position: center center;
      display: none;
      height: 32px;
      width: 32px;
      cursor: pointer;
      margin-top: 22px;
      position: relative;
      margin-left: 20px;
      float: left;
    }

    .header_menu {
      display: flex;
      .close_menu {
        background-image: url('../../assets/icon/close.png');
        background-repeat: no-repeat;
        background-position: center center;
        border-top-width: 0px;
        border-right-width: 0px;
        border-bottom-width: 0px;
        border-left-width: 0px;
        border-top-style: none;
        border-right-style: none;
        border-bottom-style: none;
        border-left-style: none;
        display: none;
        float: right;
        height: 20px;
        width: 20px;
        cursor: pointer;
        margin-right: 0px;
        margin-top: 0px;
        background-color: transparent;
      }
      .mobile_button {
        display: none;
        text-decoration: none;
      }
      .header_left-item {
        font-size: 16px;
        line-height: 16px;
        font-weight: 400;
        text-transform: uppercase;
        list-style-type: none;
        padding: 12px 10px 12px 10px;
        //margin-top: 12px;
        padding: 27px 10px 12px 10px;
        cursor: pointer;
        transition: all .5s;
        white-space: nowrap;

        &:hover {
          background-color: #ececec;
        }
      }

      .router-link-exact-active {
        background-color: #E40000;
        color: #fff;
        display: block;
        float: left;
        margin-right: 1px;
        margin-left: 1px;
        -webkit-border-radius: 0 0 4px 4px;
        border-radius: 0 0 4px 4px;

        &:hover {
          background-color: #E40000;
        }
      }
    }
  }

  .header_right {
    display: flex;
    align-items: center;

    .header_social {
      display: flex;
      margin-right: 30px;

      .header_social-icon {
        margin-left: 3px;
        margin-right: 3px;
        height: 30px;
        width: 30px;
        transition: all 0.4s;
        cursor: pointer;

        img {
          width: 100%;
          border-radius: 5px;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .header_old-web {
      background-image: url("../../assets/icon/brush-oldsite.svg");
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      color: #FFF;
      font-weight: normal;
      display: block;
      float: right;
      height: 65px;
      width: 113px;
      background-size: 113px 65px;
      margin-top: 5px;
      text-decoration: none;
      text-align: right;
      opacity: 0.75;
      transition: all 0.3s;
      cursor: pointer;

      strong {
        display: block;
        margin-top: 16px;
        margin-right: 35px;
      }

      &:hover {
        opacity: 1;
        color: #fff;
      }
    }
  }
}
@media (max-width: 1300px) {
  header {
    .header_left {
      .header_menu {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        color: #fff;
        background: #000;
        height: 100%;
        width: 250px;
        z-index: 1001;
        padding: 23px;
        transform: translateX(-251px);
        transition: all 0.5s;
        &.active {
          transform: translateX(0);
        }
      }
      .mobile {
        display: block;
      }
      .header_menu {
        .close_menu {
          display: block;
        }
        .mobile_button {
          display: block;
        }
        .header_left-item {
          float: none;
          &:hover {
            background-color: transparent;
            color: #E40000;
          }
        }
        .router-link-exact-active {
          background-color: transparent;
          color: #E40000;
          border-radius: 0;
          float: none;

          &:hover {
            background-color: transparent;
            color: #E40000;
          }
        }
      }
    }
  }
}
@media (max-width: 500px) {
  header {
    .header_right {
      .header_old-web {
        display: none;
      }
      .header_social {
        margin-top: 22px;
        margin-right: 0;
      }
    }
  }
}
</style>
