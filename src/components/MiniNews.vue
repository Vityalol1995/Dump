<template>
  <div class="news">
    <h2>Наши новости</h2>
    <router-link :to="'/New/' + n.id" tag="a" class="news_item" v-for="n in news.slice(0, 3)" :key="n.id" :name="n.id">
      <div class="news_title">{{n.title}}</div>
      <img :src="n.img" alt="">
      <div class="news_text">{{n.text}}</div>
    </router-link>
  </div>
</template>

<script>
import getNews from "src/api/News";

export default {
  name: "MiniNews",
  data () {
    return {
      news: null
    }
  },
  mounted () {
    this.news = getNews()
  },
}
</script>

<style lang="scss" scoped>
.news {
  .news_item {
    display: inline-block;
    width: 100%;
    margin-bottom: 35px;
    font-size: 14px;
    line-height: 16px;
    color: #000;
    text-decoration: none;
    .news_title {
      font-family: 'Oswald', sans-serif;
      font-size: 17px;
      line-height: 19px;
      text-transform: uppercase;
      color: #506c9e;
      text-decoration: none;
      font-weight: 500;
      margin-bottom: 7px;
    }
    .news_text {
      color: #000;
    }
    img {
      width: 100%;
      margin-bottom: 10px;
      height: 270px;
      object-fit: cover;
      border-radius: 6px;
    }
  }
}
@media (max-width: 500px) {
  .news {
    .news_item {
      .news_title {
        font-size: 14px;
      }
      img {
        height: 180px;
      }
      .news_text {
        font-size: 12px;
      }
    }
  }
}
</style>
