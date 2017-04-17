<template>
  <div>
    <div :id="componentId" class="traffic_plot"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts'

  export default {
    props: ['data'],
    data(){
      return {
        componentId: 'area_' + (new Date()).getTime()
      }
    },
    methods: {
      historyFlowDataFormate: function (rt) {
        let now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let deltaTime = 1000 * 60 * 60 * 24;
        let nowTime = now.valueOf();
        let period = [];
        let formateFlow = [];
        let flag = false;
        //生成每日零点时间戳，用来区分定位每天的流量使用情况
        for (let i = 0; i <= 14; i++) {
          period[i] = (nowTime - deltaTime * i);
        }
        //格式化返回的数据
        for (let j = 0; j < 14; j++) {
          formateFlow[j] = {};
          for (let n = 0; n < rt.length; n++) {
            if (rt[n].date < period[j] && rt[n].date >= period[j + 1]) {
              formateFlow[j].date = (new Date(parseInt(rt[n].date))).getDate();
              if (rt[n].useFlow < 0) {
                formateFlow[j].useFlow = 0;
                formateFlow[j].y = 0;
              } else {
                formateFlow[j].useFlow = rt[n].useFlow;
                formateFlow[j].y = rt[n].y;
              }
              flag = true;
              break;
            }
          }
          if (flag == false) {
            formateFlow[j].date = (new Date(parseInt(period[j] - 60 * 60 * 1000))).getDate();
            formateFlow[j].useFlow = 0;
            formateFlow[j].y = 0;
          }
          flag = false;
        }
        //按时间正序排列
        return formateFlow.reverse();
      }
    },
    mounted() {
      let lineData = this.historyFlowDataFormate(this.data);
      const opts = {
        chart: {
          type: 'area',
          backgroundColor: '#fbf9fe'
        },
        title: {
          text: '(MB)',
          style: {
            'font-size': '0.7rem',
            'font-family': 'Microsoft Yahei'
          },
          margin: 45,
          y: 24,
          align: 'left',
          x: 25
        },
        //图例显示关闭
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        xAxis: {
          allowDecimals: false,
          title: {
            text: '',
            enabled: false
          },
          labels: {
            //从date中将“日”信息截取出来并显示在横轴中
            formatter: function () {
              return lineData[this.value - 1].date + "日";
            },
            style: {fontSize: '0.7rem'},
            y: 16,
            startOnTick: true,
          },
          // showFirstLabel:true,
          // showLastLabel:true,
          tickLength: 0,
          //x轴显示的标签
          tickPositions: [2, 4, 6, 8, 10, 12, 14],
          gridLineColor: '#d0d0d0',
          gridLineWidth: 0,
        },
        yAxis: {
          title: {
            text: null,
            align: "high",
            rotation: 0,
            offset: -56,
            y: -14,
            style: {fontSize: '0.7rem'}
          },
          floor: 0,
          labels: {
            style: {fontSize: '0.7rem'},
          },
          allowDecimals: true,
          gridLineColor: '#d0d0d0',
          gridLineWidth: 1

        },
        tooltip: {
          animation: false,
          headerFormat: "",
          followTouchMove: true,
          pointFormatter: function () {
            var index = this.x - 1;
            var date = lineData[index].date;
            return "日期:" + date + "日<br/>使用:" + this.y + "MB";
          },
          enabled: true,
          shadow: false,
          crosshairs: [{
            width: 1, color: '#6a99c5', dashStyle: 'shortdot'
          }]
        },
        plotOptions: {
          area: {
            pointStart: 1,
            fillColor: '#fcc9c8',
            lineColor: '#f64a4a',
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 5,
              states: {
                hover: {enabled: true}
              }
            }
          }
        },
        series: [{
          name: '日期',
          data: lineData
        }]
      };

      opts.series[0].data = lineData;
      let maxFlow = opts.series[0].data[0].y,
        minFlow = opts.series[0].data[0].y,
        deltaFlow = 0,
        ceil = 0,
        floor = 0;
      opts.series[0].data.forEach(function (element) {
        if (element.y > maxFlow) {
          maxFlow = element.y;
        }
        if (element.y < minFlow) {
          minFlow = element.y;
        }
      });
      deltaFlow = maxFlow - minFlow;
      floor = minFlow - deltaFlow / 10;
      floor = floor > 0 ? floor : 0;
      ceil = maxFlow + deltaFlow / 10;

      if (deltaFlow > 1 & deltaFlow <= 10) {
        floor = Math.floor(floor);
        ceil = Math.ceil(ceil);
      } else if (deltaFlow > 10) {
        floor = Math.floor(floor / 10) * 10;
        ceil = Math.ceil(ceil / 10) * 10;
      }

      opts.yAxis.floor = floor;
      opts.yAxis.ceiling = ceil;
      Highcharts.chart(this.componentId, opts);
    }
  };
</script>
<style scoped>
  .traffic_plot {
    height: 14rem;
    margin: 0.4rem;
    text-align: center;
  }
</style>
