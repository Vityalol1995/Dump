<template>
  <div class="Chart_block">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 col-sm-12 Chart_item">
          <div class="info-counter">
            <strong>Статистика с 2012 года по текущее время</strong>
            <div class="redarrow"></div>
          </div>
          <div id="chartdiv1"></div>
        </div>
        <div class="col-md-6 col-lg-3 col-sm-12 Chart_item">
          <div class="info-counter">
            <strong>Статистика с начала 2021 года</strong>
            <div class="redarrow"></div>
          </div>
          <div id="chartdiv2"></div>
        </div>
        <div class="col-md-6 col-lg-3 col-sm-12 Chart_item">
          <div class="info-counter">
            <strong>Статистика за прошлый месяц</strong>
            <div class="redarrow"></div>
          </div>
          <div id="chartdiv3"></div>
        </div>
        <div class="col-md-6 col-lg-3 col-sm-12 Chart_item">
          <div class="info-counter">
            <strong>Статистика за текущий месяц</strong>
            <div class="redarrow"></div>
          </div>
          <div id="chartdiv4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export default {
  name: "ChartBlock",
  mounted() {
    var chart = am4core.create("chartdiv1", am4charts.PieChart);

// Add data
    chart.data = [{
      "country": "СВАЛОК ОБНАРУЖЕНО:",
      "litres": 1614
    }, {
      "country": "СВАЛОК ОБЖАЛОВАНО:",
      "litres": 1349
    }, {
      "country": "СВАЛОК ЛИКВИДИРОВАНО:",
      "litres": 698
    }];

    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    chart.legend = new am4charts.Legend();

    //////////////////////////////////////////
    var chart = am4core.create("chartdiv2", am4charts.PieChart);

// Add data
    chart.data = [{
      "country": "СВАЛОК ОБНАРУЖЕНО:",
      "litres": 23
    }, {
      "country": "СВАЛОК ОБЖАЛОВАНО:",
      "litres": 20
    }, {
      "country": "СВАЛОК ЛИКВИДИРОВАНО:",
      "litres": 2
    }];

// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    chart.legend = new am4charts.Legend();

    /////////////////////////////////////////
    var chart = am4core.create("chartdiv3", am4charts.PieChart);

// Add data
    chart.data = [{
      "country": "СВАЛОК ОБНАРУЖЕНО:",
      "litres": 3
    }, {
      "country": "СВАЛОК ОБЖАЛОВАНО:",
      "litres": 2
    }, {
      "country": "СВАЛОК ЛИКВИДИРОВАНО:",
      "litres": 0
    }];

// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    chart.legend = new am4charts.Legend();

    ///////////////////////////////////////////

    var chart = am4core.create("chartdiv4", am4charts.PieChart);

// Add data
    chart.data = [{
      "country": "СВАЛОК ОБНАРУЖЕНО:",
      "litres": 2
    }, {
      "country": "СВАЛОК ОБЖАЛОВАНО:",
      "litres": 2
    }, {
      "country": "СВАЛОК ЛИКВИДИРОВАНО:",
      "litres": 0
    }];

// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    chart.legend = new am4charts.Legend();
  }
}
</script>

<style lang="scss" scoped>
.Chart_block {
  margin-bottom: 50px;
  .Chart_item {
    .info-counter {
      width: 244px;
      float: none;
      font-size: 9px;
      line-height: 9px;
      margin: auto;
      margin-bottom: 8px;
      strong {
        color: #FFF;
        background-color: #E40000;
        display: block;
        padding: 8px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        font-size: 11px;
        text-align: center;
      }
      .redarrow {
        margin-left: 115.5px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 4.5px 0 4.5px;
        border-color: #e40000 transparent transparent transparent;
      }
    }
  }
}
#chartdiv1, #chartdiv2, #chartdiv3, #chartdiv4 {
  width: 100%;
  height: 360px;
  font-size: 12px;
}
@media (max-width: 1430px) {
  .Chart_block {
    .Chart_item {
      margin-bottom: 25px;
      width: 100%;
    }
  }
}
</style>
