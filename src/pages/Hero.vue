<template>
<div class="main_container">
  <div class="Hero">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-5">
          <div class="Hero_img">
            <img :src="heroes.img" alt="">
          </div>
        </div>
        <div class="col-sm-12 col-md-7">
          <div class="Hero_text">
            <h1>{{heroes.name}}</h1>
            <br>
            <b>{{heroes.text}}</b>
            <br><br>
            <p>{{heroes.descriptions}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import getHeroes from "src/api/Heroes";

export default {
  name: "Hero",
  data () {
    return {
      heroes: {}
    }
  },
  mounted () {
    const heroes = getHeroes()
    this.heroes = heroes.find(o => o.id === parseInt(this.$route.params.id)) || {}
  }
}
</script>

<style lang="scss" scoped>
.Hero {
  .Hero_img {
    display: inline-block;
    float: left;
    margin-bottom: 80px;
    img {
      border-radius: 100% !important;
      overflow: hidden !important;
    }
  }
  .Hero_text {
    display: inline-block;
    float: right;
    margin-bottom: 30px;
  }
}
@media (max-width: 500px) {
  .Hero {
    .Hero_img {
      margin-bottom: 30px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
