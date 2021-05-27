<template>
  <div class="main_container">
    <Banner/>
    <DumpMap/>
    <ChartBlock/>
    <MainInfo/>
  </div>
</template>

<script>
import Banner from "components/Banner";
import DumpMap from "components/DumpMap";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ChartBlock from "components/ChartBlock";
import MainInfo from "components/MainInfo";

am4core.useTheme(am4themes_animated);
export default {
  name: "Home",
  components: {MainInfo, ChartBlock, DumpMap, Banner}
}
</script>

<style lang="scss" scoped>

</style>
