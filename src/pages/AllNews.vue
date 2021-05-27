<template>
<div class="main_container">
  <div class="AllNews">
    <h1>Новости</h1>
    <div class="container">
      <div class="row pl-0 pr-0">
        <router-link v-for="n in news" :key="n.id" :to="'/New/' + n.id" tag="div" class="col-sm-12 col-md-4 AllNews_item">
          <div class="AllNews_title">{{n.title}}</div>
          <img :src="n.img" alt="">
          <div class="AllNews_text">{{n.text}}</div>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import getNews from "src/api/News";

export default {
name: "AllNews",
  data () {
    return {
      news: null
    }
  },
  mounted () {
    this.news = getNews()
  }
}
</script>

<style lang="scss" scoped>
.AllNews {
  margin-bottom: 30px;
  .AllNews_item {
    font-size: 14px;
    line-height: 16px;
    color: #000;
    padding: 15px;
    cursor: pointer;
    text-decoration: none;
    .AllNews_title {
      font-family: 'Oswald', sans-serif;
      font-size: 14px;
      line-height: 19px;
      text-transform: uppercase;
      color: #506c9e;
      text-decoration: none;
      font-weight: 500;
      margin-bottom: 7px;
    }
    img {
      border-radius: 4px;
      width: 100%;
      height: 300px;
    }
    .AllNews_text {
      margin-top: 10px;
    }
  }
}
@media (max-width: 1023px) {
  .AllNews {
    .AllNews_item {
      img {
        object-fit: cover;
      }
    }
  }
}
@media (max-width: 500px) {
  .AllNews {
    .AllNews_item {
      .AllNews_title {
        font-size: 12px;
      }
      .AllNews_text {
        font-size: 10px;
      }
      img {
        height: auto;
      }
    }
  }
}
</style>
