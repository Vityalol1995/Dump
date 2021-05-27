<template>
<div class="main_container">
  <div class="Dump">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 mobile_width">
          <div>
            <q-carousel
              animated
              v-model="slide"
              arrows
              navigation
              infinite
              autoplay
              style="position: relative; z-index: 1000"
            >
              <q-carousel-slide :name="index" :key="index" v-for="(src, index) in images" :img-src="src"></q-carousel-slide>
            </q-carousel>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="Dump_info">
            <h1 class="Dump_info-title">{{svalki.address}}</h1>
            <h6>{{svalki.district}}</h6>
            <span>Опубликовал: <strong>{{svalki.name}}</strong></span>
            <div class="coordsdiv">
              Координаты свалки: <strong><a :href="svalki.coordinates" target="_blank">{{svalki.coordinates}}</a></strong>
            </div>
            <div class="Dump_button">
            <router-link tag="div" to="##">
              Свалки уже нет?
              <span>Сообщите нам об этом</span>
            </router-link>
            </div>
            <div class="Dump_map">
            <iframe width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" :src="svalki.map" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import getSvalki from "src/api/Svalki";

export default {
  name: "Dump",
  data () {
    return {
      svalki: null,
      images: [],
      slide: 1
    }
  },
  mounted () {
    const svalki = getSvalki()
    this.svalki = svalki.find(o => o.id === parseInt(this.$route.params.id)) || {}
    this.images = this.svalki.photos
  },
}
</script>

<style lang="scss" scoped>
.Dump {
  margin-bottom: 50px;
  .Dump_info {
    padding: 0 0 0 40px;
    iframe {
      margin: 20px 0;
    }
    .coordsdiv {
      margin: 20px 0;
    }
    .Dump_button {
      div {
        font-family: 'Oswald', sans-serif;
        font-size: 18px;
        line-height: 18px;
        font-weight: 500;
        text-transform: uppercase;
        color: #FFF;
        text-decoration: none;
        background-color: #506C9E;
        cursor: pointer;
        background-size: 28px 28px;
        padding: 16px 23px 16px 60px;
        background-image: url("../assets/send.svg");
        background-repeat: no-repeat;
        background-position: 14px center;
        display: block;
        float: left;
        margin-top: 0px;
        margin-bottom: 30px;
        s-webkit-transition-duration: 0.5s;
        -o-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        transition-duration: 0.5s;
        span {
          display: block;
          font-size: 12px;
          line-height: 12px;
          font-weight: normal;
          margin-top: 3px;
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .Dump {
    .Dump_info {
      padding-left: 0;
      margin-top: 20px;
    }
    iframe {
      width: 100%;
    }
  }
}
@media (max-width: 600px) {
  .Dump {
    .mobile_width {
      width: 100%;
      .q-carousel {
        height: 250px;
      }
    }
    iframe {
      height: 250px;
    }
  }
}
</style>
