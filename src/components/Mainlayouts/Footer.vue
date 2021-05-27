<template>
  <footer>
    <div class="footerleaf"></div>
    <div class="main_container">
      <div class="footer_left">
        <div class="footer_icon">
          <router-link tag="div" to="/" class="footer_left-img">
            <div></div>
          </router-link>
        </div>
        <div class="mobile" @click="burger = true"></div>
        <div class="footer_menu">
          <router-link tag="div" to="/Dumps" class="footer_left-item">Свалки</router-link>
          <router-link tag="div" to="/MapDump" class="footer_left-item">Карта свалок</router-link>
          <router-link tag="div" to="/About" class="footer_left-item">О проекте</router-link>
          <router-link tag="div" to="/Subbotniks" class="footer_left-item">Субботники</router-link>
          <router-link tag="div" to="/AllNews" class="footer_left-item">Новости</router-link>
          <router-link tag="div" to="/OurHeroes" class="footer_left-item">Наши герои</router-link>
          <router-link tag="div" to="/Regulations" class="footer_left-item">Мусорный ликбез</router-link>
          <router-link tag="div" to="/Contacts" class="footer_left-item">Контакты</router-link>
        </div>
      </div>
      <div class="footer_right">
        <div class="footer_social">
          <div class="footer_social-icon">
            <img src="../../assets/icon/insta.svg" alt="">
          </div>
          <div class="footer_social-icon">
            <img src="../../assets/icon/fb.svg" alt="">
          </div>
          <div class="footer_social-icon">
            <img src="../../assets/icon/vk.svg" alt="">
          </div>
        </div>
      </div>
      <p><strong>© 2012-2021. Региональная общественная организация города Севастополя “Движение за чистый Севастополь”</strong><br>
        Общественное движение Sevsvalki.net (Севсвалки.нет)<br>
        Все права защищены.<br><br>

        Републикация информации с данного сайта в общественных и информационных целях приветствуется.
      </p>
      <p>
        <router-link class="footer_link" to="##" tag="a">Политика в отношении обработки персональных данных</router-link>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      mobile: false
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background-color: #506c9e;
  padding-bottom: 58px;
  font-size: 13px;
  color: #FFF;
  .footerleaf {
    background-image: url('../../assets/leafs-left.png');
    background-repeat: no-repeat;
    background-position: left top;
    display: block;
    height: 554px;
    width: 158px;
    position: absolute;
    left: 0px;
    margin-top: -225px;
    z-index: 0;
  }

  .footer_left {
    display: flex;
    .footer_icon {
      .footer_left-img {
        display: block;
        height: 40px;
        width: 40px;
        background-image: url('../../assets/icon/header_home.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 14px 14px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        s-webkit-transition-duration: 0.5s;
        -o-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        margin-top: 15px;
        transition-duration: 0.5s;
        cursor: pointer;
        &:hover {
          background-color: #3f557d;
        }
      }
      .router-link-exact-active {
        background-image: url('../../assets/home.svg');
        margin-top: 0;
        padding-top: 54px;
        background-position: 50% 65%;
        background-color: #fff;
      }
    }
    .mobile {
      background-image: url('../../assets/icon/mobilemenu2.svg');
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
    .footer_menu {
      display: flex;
      white-space: nowrap;
      .footer_left-item {
        font-size: 16px;
        line-height: 16px;
        font-weight: 400;
        text-transform: uppercase;
        list-style-type: none;
        padding: 27px 10px 12px 10px;
        cursor: pointer;
        transition: all .5s;

        &:hover {
          background-color: #3f557d;
        }
      }
      .router-link-exact-active {
        background-color: #fff;
        color: #000;
        display: block;
        float: left;
        margin-right: 1px;
        margin-left: 1px;
        -webkit-border-radius: 0 0 4px 4px;
        border-radius: 0 0 4px 4px;
        &:hover {
          background-color: #fff;
        }
      }
    }
  }

  .footer_right {
    display: flex;
    align-items: center;

    .footer_social {
      display: flex;
      margin-top: 30px;
      margin-bottom: 40px;

      .footer_social-icon {
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
  }
  .footer_link {
    color: #fff;
  }
}
@media (max-width: 1300px) {
  footer {
    .footerleaf {
      display: none;
    }
    .footer_left {
      .footer_menu {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
  }
}
@media (max-width: 500px) {
  footer {
    p {
      font-size: 12px;
    }
  }
}
</style>
