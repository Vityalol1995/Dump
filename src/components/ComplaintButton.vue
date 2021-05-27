<template>
<router-link tag="div" to="##" class="ComplaintButton">
  <span>Подать жалобу<br>на незаконную свалку</span>
</router-link>
</template>

<script>
export default {
  name: "ComplaintButton"
}
</script>

<style lang="scss" scoped>
.ComplaintButton {
  background-image: url('../assets/brush1-red.svg');
  background-repeat: no-repeat;
  background-position: center center;
  display: block;
  float: left;
  height: 75px;
  width: 257px;
  background-size: 257px 75px;
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
  transition: all 0.5s;
  color: #FFF;
  &:hover {
    background-image: url('../assets/brush1-green.svg');
    transform: scale(1.05);
    text-decoration: none;
    color: #FFF;
  }
  span {
    background-image: url("../assets/lightning.svg");
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 13px 27px;
    padding-top: 10px;
    padding-left: 30px;
    display: block;
    margin-left: 45px;
    padding-bottom: 10px;
    margin-top: 13px;
    cursor: pointer;
    text-transform: uppercase;
  }
}
@media (max-width: 1300px) {
  .ComplaintButton {
    height: 83px;
    width: 210px;
    background-size: 211px 75px;
    font-size: 10px;
    float: none !important;
    span {
      background-size: 12px 25px;
      padding-top: 27px;
      padding-left: 23px;
      display: block;
      margin-left: 39px;
      padding-bottom: 22px;
      margin-top: 22px;
    }
  }
}
</style>
