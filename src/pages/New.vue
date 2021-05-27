<template>
<div class="main_container">
  <div class="New">
    <div class="container">
      <div class="row">
        <div class="col-4 mobile_none">
          <MiniNews/>
        </div>
        <div class="col-sm-12 col-md-8">
          <div class="New_inner">
            <h1>{{news.title}}</h1>
            <br>
            <p class="New_inner-subtitle">{{news.text}}</p>
            <div class="New_inner-img">
              <img :src="news.img" alt="">
            </div>
            <p class="New_inner-text">{{news.descriptions}}</p>
            <Gallery/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import getNews from "src/api/News";
import MiniNews from "components/MiniNews";
import Gallery from "components/Gallery"

export default {
  name: "New",
  components: {MiniNews, Gallery},
  data () {
    return {
      news: null,
    }
  },
  mounted () {
    const news = getNews()
    this.news = news.find(o => o.id === parseInt(this.$route.params.id)) || {}
  },
}
</script>

<style lang="scss" scoped>
.New {
  .New_inner {
    padding: 0 0 0 35px;

    .New_inner-img {
      img {
        width: 100%;
      }
    }

    .New_inner-subtitle {
      font-weight: 600;
    }

    .New_inner-text {
      white-space: break-spaces;
      margin-top: 20px;
      font-size: 16px;
    }
  }
}
@media (max-width: 1023px) {
  .New {
    .mobile_none {
      display: none;
    }
    .New_inner {
      padding: 0;
    }
  }
}
@media (max-width: 500px) {
  .New {
    .New_inner {
      p {
        font-size: 12px;
      }
      .New_inner-text {
        font-size: 12px;
      }
    }
  }
}
</style>
