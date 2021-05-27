<template>
<div class="main_container">
  <div class="OurHeroes">
    <h1>Герои мусорного фронта</h1>
    <p>Представляем вам наших героев, людей без которых город бы не стал чище.</p>
  <div class="OurHeroes_inner">
    <div class="container">
      <div class="row">
        <router-link v-for="hero in heroes" :key="hero.id" :to="'/Hero/' + hero.id" tag="div" class="OurHeroes_item col-sm-12 col-md-4">
          <div class="heroesblock-left">
            <img :src="hero.img" alt="">
          </div>
          <div class="heroesblock-right">
            <p>{{hero.name}}</p>
            <span>{{hero.text}}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import getHeroes from "src/api/Heroes";
export default {
  name: "OurHeroes",
  data () {
    return {
      heroes: null
    }
  },
  mounted () {
    this.heroes = getHeroes()
  }
}
</script>

<style lang="scss" scoped>
.OurHeroes {
  .OurHeroes_inner {
    display: inline-block;
    margin-bottom: 30px;
    color: #FFF;
    text-decoration: none;
    .OurHeroes_item {
      display: inline-block;
      float: left;
      margin-bottom: 30px;
      color: #000;
      text-decoration: none;
      cursor: pointer;
      .heroesblock-left {
        display: block;
        float: left;
        width: 40%;
        margin-left: auto;
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
        float: left;
        width: 50%;
        padding: 15px 0 0 15px;
        color: #000;
        p {
          font-family: 'Oswald', sans-serif;
          font-size: 21px;
          line-height: 23px;
          font-weight: 500;
          color: #000;
          text-decoration: none;
          text-transform: uppercase;
          display: block;
          margin-bottom: 10px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .OurHeroes {
    p {
      font-size: 12px;
    }
    .OurHeroes_inner {
      .OurHeroes_item {
        .heroesblock-right {
          p {
            font-size: 16px;
            margin-bottom: 5px;
          }
          span {
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
