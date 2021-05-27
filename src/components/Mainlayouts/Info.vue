<template>
  <div class="main_container">
    <div class="info">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 flex items-center">
            <div class="info_statistics">
              <div class="statistics">
                <span>СВАЛОК ОБНАРУЖЕНО: <strong class="red">1612</strong></span>
                <span>СВАЛОК ОБЖАЛОВАНО: <strong class="blue">1347</strong></span>
                <span>СВАЛОК ЛИКВИДИРОВАНО: <strong class="green">698</strong></span>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="block-counter">
              <div class="clearfix">
                <div class="info-counter">
                  <strong>До следующего субботника осталось</strong>
                  <div class="redarrow"></div>
                </div>
                <router-link tag="div" to="##" class="info_detail">Подробнее о наших субботниках</router-link>
              </div>
              <div class="info_counter-wrapper">
                <q-circular-progress
                  show-value
                  font-size="12px"
                  :value="days"
                  size="90px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="m10"
                  style="text-align: center; text-transform: uppercase;"
                >
                  <strong class="number-progress">{{ days }}</strong><span>Дней</span>
                </q-circular-progress>
                <q-circular-progress
                  :max="24"
                  show-value
                  font-size="12px"
                  :value="hours"
                  size="90px"
                  :thickness="0.22"
                  color="primary"
                  track-color="grey-3"
                  class="m10"
                  style="text-align: center; text-transform: uppercase;"
                >
                  <strong class="number-progress">{{ hours }}</strong><span>Часов</span>
                </q-circular-progress>
                <q-circular-progress
                  :max="60"
                  show-value
                  font-size="12px"
                  :value="minutes"
                  size="90px"
                  :thickness="0.22"
                  color="purple"
                  track-color="grey-3"
                  class="m10"
                  style="text-align: center; text-transform: uppercase;"
                >
                  <strong class="number-progress">{{ minutes }}</strong><span>Минут</span>
                </q-circular-progress>
                <q-circular-progress
                  :max="60"
                  show-value
                  font-size="12px"
                  :value="seconds"
                  size="90px"
                  :thickness="0.22"
                  color="orange"
                  track-color="grey-3"
                  class="m10"
                  style="text-align: center; text-transform: uppercase;"
                >
                  <strong class="number-progress">{{ seconds }}</strong><span>Секунд</span>
                </q-circular-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="statistics_intro">
        <router-link to="##" tag="div" class="info_statistics-img">
          <img src="../../assets/icon/Logo.png" alt="">
        </router-link>
        <div class="info_statistics-button">
          <ComplaintButton/>
        </div>
      </div>
    </div>
    <div class="info_search">
      <form action="">
        <input placeholder="Поиск свалок" class="search" type="text">
        <button class="search-button" type="submit"></button>
      </form>
    </div>
  </div>
</template>

<script>
import ComplaintButton from "components/ComplaintButton";

export default {
  name: "Info",
  components: {ComplaintButton},
  data() {
    return {
      days: 100,
      hours: 14,
      minutes: 48,
      seconds: 55
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  .statistics_intro {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info_statistics-img {
      float: left;
      max-width: 277px;
      display: block;
      clear: both;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }

  .info_statistics {
    .statistics {
      background-image: url("../../assets/icon/stat-icon.svg");
      background-repeat: no-repeat;
      background-position: left top;
      background-size: 20px 20px;
      display: flex;
      flex-direction: column;
      float: left;
      padding-left: 30px;
      text-transform: uppercase;
      font-weight: 300;
      margin-right: 30px;
      margin-top: 15px;

      span {
        font-size: 14px;
        line-height: 16px;
        padding: 2px 0;
      }
    }
  }

  .block-counter {
    display: flex;
    flex-direction: column;

    .clearfix {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: auto;

      .info-counter {
        font-family: 'Oswald', sans-serif;
        display: block;
        float: left;
        font-size: 11px;
        line-height: 11px;
        text-transform: uppercase;
        color: #FFF;
        margin-right: 10px;
        margin-left: 2%;

        strong {
          color: #FFF;
          background-color: #E40000;
          display: block;
          padding: 8px;
          -webkit-border-radius: 4px;
          border-radius: 4px;
          font-size: 10px;
        }

        .redarrow {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 4.5px 0 4.5px;
          border-color: #e40000 transparent transparent transparent;
          margin-left: 18%;
        }
      }
    }

    .info_detail {
      text-transform: uppercase;
      color: #333;
      text-decoration: underline;
      display: block;
      float: left;
      font-size: 10px;
      line-height: 11px;
      padding: 8px;
    }

    .info_counter-wrapper {
      display: flex;
      justify-content: flex-end;
    }
  }
}

.info_search {
  margin-bottom: 30px;

  .search {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 14px;
    color: #000;
    background-color: #e7e7e7;
    padding: 13px 2% 13px 2%;
    width: 100%;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
  }

  .search-button {
    background-color: transparent;
    background-image: url('../../assets/icon/search.svg');
    background-repeat: no-repeat;
    background-position: center center;
    padding: 0px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    cursor: pointer;
    display: block;
    height: 43px;
    width: 5%;
    margin: 0 0 0 -5%;
    position: relative;
    float: right;
    background-size: 16px 16px;
    opacity: 0.5;
    outline: none;
  }
}

@media (max-width: 1300px) {
  .info {
    .statistics_intro {
      .info_statistics-img {
        margin: 0 auto;
      }
      .info_statistics-button {
        display: none;
      }
    }
  }
}

@media (max-width: 1023px) {
  .info {
    .block-counter {
      margin: 20px 0;

      .clearfix {
        justify-content: unset;

        .info-counter {
          margin-left: 7%;

          strong {
            text-transform: capitalize;
          }
        }
      }

      .info_counter-wrapper {
        justify-content: unset;

        .q-circular-progress {
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .info {
    .block-counter {
      .clearfix {
        .info-counter {
          .redarrow {
            margin-left: 8%;
          }
        }

        .info_detail {
          display: none;
        }
      }

      .info_counter-wrapper {
        justify-content: unset;

        .q-circular-progress {
          margin: 10px 5px;
        }
      }
    }

    .statistics_intro {
      justify-content: center;
      padding: 0 0 20px 0;

      .info_statistics-img {
        max-width: 290px;
        padding: 0 15px;
      }
    }
  }
}

@media (max-width: 375px) {
  .info {
    .block-counter {
      .info_counter-wrapper {
        .q-circular-progress {
          div {
            strong {
              font-size: 12px;
            }
            span {
              font-size: 10px !important;
              text-transform: capitalize;
            }
          }
        }
      }
    }
  }
}
</style>
