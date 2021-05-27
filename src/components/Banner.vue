<template>
  <div class="Banner">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-8 Banner_mobile-block">
          <q-carousel
            animated
            v-model="slide"
            navigation-size="5px"
            infinite
            :autoplay="autoplay"
            arrows
            control-type="regular"
            control-color="red"
            control-text-color="grey-8"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            class="Banner_slider-wrapper"
          >
            <q-carousel-slide class="Banner_slider" :name="photo.id" v-for="photo in photos" :key="photo.id"
                              :img-src='photo.img'>
              <div class="Banner_slider-text">{{ photo.text }}</div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="Banner_right">
            <router-link to="/OurHeroes" tag="div" class="Banner_right-item Banner_right-item-1">
              <img src="../assets/Banner-right-1.jpg" alt="">
              <span>
                  Герои<br>
                  мусорного<br>
                  фронта
				          <strong>Познакомьтесь<br>с нашими активистами</strong>
			          </span>
            </router-link>
            <router-link to="/Subbotniks" tag="div" class="Banner_right-item Banner_right-item-2">
              <img src="../assets/Banner-right-2.jpg" alt="">
              <span>
                  Субботники<br>
                  ЧИСТОКРЫМ
                  <strong>Мы расскажем вам о том, как мы проводим<br>субботники и что нужно для участия</strong>
                </span>
            </router-link>
            <router-link to="/Regulations" tag="div" class="Banner_right-item Banner_right-item-1">
              <img src="../assets/Banner-right-3.jpg" alt="">
              <span>
                  Мусорный<br>
                  ликбез
                  <strong>Узнайте о своих правах,<br> обязанностях и ответственности</strong>
                </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      slide: 1,
      autoplay: true,
      photos: [
        {
          id: 1,
          img: require('../assets/Banner_1.jpg'),
          text: 'Ура! Сегодня мы провели 103-й субботник ЧИСТОКРЫМ'
        },
        {
          id: 2,
          img: require('../assets/Banner_2.jpg'),
          text: 'Севсвалки приглашают на субботник у пещерного монастыря XIV века!'
        },
        {
          id: 3,
          img: require('../assets/Banner_3.jpg'),
          text: 'Сегодня, 27 марта 2021 года мы провели 102-й субботник общественного движения ЧИСТОКРЫМ!'
        },
        {
          id: 4,
          img: require('../assets/Banner_4.jpg'),
          text: '102-й субботник ЧИСТОКРЫМ пройдет 27 марта в Стрелецкой бухте!'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Banner {
  margin-bottom: 50px;

  .Banner_slider-wrapper {
    height: 566px;

    .Banner_slider {
      display: flex;
      align-items: flex-end;
      padding: 0;
      border-radius: 5px;

      .Banner_slider-text {
        font-family: 'Oswald', sans-serif;
        color: #FFF;
        background: rgba(0, 0, 0, 0.5);
        text-decoration: none;
        display: block;
        font-size: 17px;
        //font-weight: 600;
        line-height: 22px;
        text-transform: uppercase;
        padding: 30px 20px 40px 20px;
        width: 100%;
        letter-spacing: -1px;
      }
    }
  }

  .Banner_right {
    margin-left: 20px;

    .Banner_right-item {
      margin-bottom: 10px;
      height: 182px;
      position: relative;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }

    .Banner_right-item-1 {
      span {
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        color: #FFF;
        font-weight: 400;
        font-size: 26px;
        line-height: 28px;
        display: block;
        padding: 20px;
        position: absolute;
        top: 0;

        strong {
          font-size: 14px;
          line-height: 16px;
          display: block;
          font-weight: normal;
          margin-top: 10px;
        }
      }
    }

    .Banner_right-item-2 {
      span {
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        color: #FFF;
        font-weight: 400;
        font-size: 26px;
        line-height: 28px;
        display: block;
        padding: 20px;
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;

        strong {
          font-size: 14px;
          line-height: 16px;
          display: block;
          font-weight: normal;
          margin-top: 10px;
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .Banner {
    .Banner_slider-wrapper {
      height: 470px;
      margin-bottom: 15px;

      .Banner_slider {
      }
    }

    .Banner_right {
      margin-left: 0;

      .Banner_right-item {
        img {
          object-fit: cover;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .Banner {
    .Banner_mobile-block {
      width: 100%;
      .Banner_slider-wrapper {
        height: 300px;

        .Banner_slider {
          .Banner_slider-text {
            font-size: 12px;
            line-height: 17px;
            padding: 20px 10px 30px 10px;
          }
        }
      }
    }
  }
}
@media (max-width: 415px) {
  .Banner {
    .Banner_mobile-block {
      .Banner_slider-wrapper {
        height: 201px;
        .Banner_slider {
          .Banner_slider-text {
            padding: 20px 10px 10px 10px;
            font-size: 11px;
          }
        }
      }
    }
  }
}
</style>
