<template>
<div class="main_container">
  <div class="Dumps">
    <h1>БАЗА ДАННЫХ СВАЛОК СЕВАСТОПОЛЯ</h1>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6" v-for="svalka in svalki" :key="svalka.id" :name="svalka.id">
          <router-link tag="div" :to="'/Dump/' + svalka.id" class="Dumps_item">
            <div class="photo-left">
              <div>
                <img :src="svalka.img" alt="">
              </div>
            </div>
            <div class="info-right">
              <p>{{svalka.address}}</p>
              <span>{{svalka.district}}</span>
              <span class="info-right_data">Опубликована: {{svalka.published}}</span>
              <span class="info-right_data">Обновлена: {{svalka.updated}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import getSvalki from "src/api/Svalki";

export default {
  name: "Dumps",
  data () {
    return {
      svalki: null
    }
  },
  mounted () {
    this.svalki = getSvalki()
  }
}
</script>

<style lang="scss" scoped>
.Dumps {
  margin-bottom: 50px;
  .Dumps_item {
    display: inline-block;
    float: left;
    height: 200px;
    margin: 25px 0;
    .photo-left {
      display: inline-block;
      float: left;
      width: 33%;
      div {
        img {
          border-radius: 5px;
          width: 100%;
        }
      }
    }
    .info-right {
      display: inline-block;
      float: right;
      width: 64%;
      padding-top: 10px;
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
      .info-right_data {
        margin-bottom: 5px;
      }
    }
  }
}
@media (max-width: 600px) {
  .Dumps {
    .Dumps_item {
      margin: 10px 0;
      height: auto;
      display: flex;
      flex-direction: column;
      width: 100%;
      .photo-left {
        width: 100%;
      }
      .info-right {
        width: 100%;
        span {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
