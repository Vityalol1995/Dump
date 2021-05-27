<template>
  <div class="main_info">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <div class="heroes">
            <h2>Герои мусорного фронта</h2>
            <router-link v-for="hero in heroes.slice(0, 4)" :key="hero.id" :to="'/Hero/' + hero.id" tag="div" class="heroes_item">
              <div class="heroesblock-left">
                <img :src="hero.img" alt="">
              </div>
              <div class="heroesblock-right">
                <p>{{hero.name}}</p>
                <span>{{hero.text}}</span>
              </div>
            </router-link>
          </div>
          <MiniNews/>
        </div>
        <div class="col-sm-12 col-md-8">
          <div class="svalki">
            <h2>Последние обновления</h2>
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="svalki_buttons">
                    <router-link to="##" tag="div" class="green_button svalki_button">Показать ликвидированные свалки</router-link>
                    <router-link to="##" tag="div" class="red_button svalki_button">Показать новые свалки</router-link>
                    <router-link to="##" tag="div" class="blue_button svalki_button">Показать ликвидированные свалки</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="svalki_block">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-6" v-for="svalka in svalki" :key="svalka.id" :name="svalka.id">
                    <div class="svalki_item">
                      <div class="photo-left">
                        <router-link :to="'/Dump/' + svalka.id" tag="a">
                          <img :src="svalka.img" alt="">
                        </router-link>
                      </div>
                      <div class="info-right">
                        <p>{{svalka.address}}</p>
                        <span>{{svalka.district}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getHeroes from '../api/Heroes'
import getSvalki from '../api/Svalki'
import MiniNews from "components/MiniNews";
export default {
  name: "MainInfo",
  components: {MiniNews},
  data () {
    return {
      heroes: null,
      svalki: null
    }
  },
  mounted () {
    this.heroes = getHeroes()
    this.svalki = getSvalki()
  }
}
</script>

<style lang="scss" scoped>
.main_info {
  .heroes {
    background-color: #626262;
    display: inline-block;
    padding: 4%;
    margin-bottom: 70px;
    h2 {
      color: #fff;
    }
    .heroes_item {
      display: inline-block;
      margin-bottom: 30px;
      color: #FFF;
      text-decoration: none;
      .heroesblock-left {
        display: block;
        float: left;
        width: 40%;
        margin-left: -48px;
        img {
          border-radius: 100% !important;
          overflow: hidden !important;
          border: 5px solid #FFF;
          height: auto;
          width: 100%;
        }
      }
      .heroesblock-right {
        display: block;
        float: right;
        width: 62%;
        color: #FFF;
        p {
          font-family: 'Oswald', sans-serif;
          font-size: 21px;
          line-height: 23px;
          font-weight: 500;
          color: #FFF;
          text-decoration: none;
          text-transform: uppercase;
          display: block;
          margin-bottom: 10px;
        }
      }
    }
  }
  .svalki {
    padding-left: 30px;
    .svalki_buttons {
      margin-bottom: 10px;
    }
    .svalki_block {
      margin-top: 15px;
      .svalki_item {
        display: inline-block;
        float: left;
        height: 200px;
        margin: 5px 0;
        .photo-left {
          display: inline-block;
          float: left;
          width: 36%;
          a {
            img {
              border-radius: 5px;
              width: 100%;
            }
          }
        }
        .info-right {
          display: inline-block;
          float: right;
          width: 62%;
          p {
            font-family: 'Oswald', sans-serif;
            font-size: 14px;
            letter-spacing: -1px;
            line-height: 16px;
            font-weight: 500;
            text-transform: uppercase;
            color: #000;
            text-decoration: none;
            display: block;
            margin-bottom: 5px;
          }
          span {
            font-size: 12px;
            line-height: 14px;
            color: #000;
            text-decoration: none;
            display: block;
            margin-bottom: 22px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .main_info {
    .heroes {
      .heroes_item {
        .heroesblock-left {
          width: 30%;
          margin-left: 0px;
        }
      }
    }
    .svalki {
      padding-left: 0px;
    }
  }
}
@media (max-width: 500px) {
  .main_info {
    .heroes {
      margin-bottom: 20px;
      .heroes_item {
        .heroesblock-right {
          p {
            font-size: 16px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
    .svalki {
      .svalki_block {
        .svalki_item {
          height: auto;
          margin: 10px 0;
          .info-right {
            p {
              text-transform: capitalize;
            }
          }
        }
      }
    }
  }
}
</style>
