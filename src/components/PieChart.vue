<template>
  <div>
    <div :id="componentId" class="traffic_gauge"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts'
  require('highcharts/highcharts-more')(Highcharts);
  require('highcharts/modules/solid-gauge')(Highcharts);

  export default {
    props: ['data'],
    data(){
      return {
        componentId: 'solidgauge_' + (new Date()).getTime()
      }
    },
    mounted() {
      let pieData = this.data;
      const opts = {
        chart: {
          type: 'solidgauge',
          backgroundColor: '#fbf9fe'
        },
        title: null,
        pane: {
          //图中心设置
          center: ['50%', '50%'],
          size: '100%',
          //圆弧起始和终止角度
          startAngle: -180,
          endAngle: 180,
          //圆弧的显示参数
          background: {
            backgroundColor: '#f2f2f2',
            borderWidth: 0,
            innerRadius: '88%',
            outerRadius: '100%',
            shape: 'arc'
          }
        },
        //单击数据点后数据标签是否显示
        tooltip: {
          enabled: false,
        },
        //Y轴格式及数据
        yAxis: [{
          min: 0,
          //Y最大值，即总流量
          max: 100,
          minColor: '#f64a4a',
          maxColor: '#71b1ee',
          tickWidth: 0,
          tickColor: '#72b222',
          minorTickInterval: null,
          borderWidth: 0,
          // 设置guage图中百分号字符串
          labels: {
            formatter: function () {
              if (this.value % 20 == 0 && this.value != 100)
                return this.value + '%';
              else
                return;
            },
            // 设置guage图中字符大小位置格式
            style: {fontSize: '0.6rem'},
            distance: -1.6 * 16,
            y: 0.2 * 16,
          },
          endOnTick: false
        }],
        //蓝色弧显示参数
        plotOptions: {
          solidgauge: {
            //蓝色弧内半径
            innerRadius: '88%',
            dataLabels: {
              enabled: true,
              useHTML: true,
              borderWidth: 0,
              verticalAlign: "center",
              y: -2.0 * 16
            },
            // Y值变化的动画
            animation: true
          }
        },
        credits: {
          enabled: false
        },
        //绘图数据
        series: [{
          //圆弧中间数据
          data: [0],
          dataLabels: {
            //圆弧中间文本
            format: ''
          }
        }]
      }
      opts.yAxis.max = pieData.total;
      let remain = pieData.remain;
      opts.series[0].data[0] = remain / pieData.total * 100;
      if (remain <= 0) {
        remain = 0;
        opts.series[0].data[0] = 0;
      }
      var str1 = '<div style="text-align:center;font-weight:normal;font-family: Microsoft Yahei"><span style="font-size:0.9rem;color:#636363">剩余流量</span><br/>'
        + '<span style="font-size:1.6rem;color:#333333">';
      var str2 = "";
      if (remain > 10000) {
        str2 = (remain / 1000).toFixed(2) + '</span><span style="font-size:1.3rem">GB</span><br/>';
      } else {
        str2 = remain + '</span><span style="font-size:1.3rem">MB</span><br/>';
      }
      var str3 = "";
      if (pieData.total < 1000) {
        str3 = '<br/><span style="font-size:0.8rem;color:#636363">总计' + (parseInt(pieData.total)).toFixed(2) + 'MB</span></div>'
      } else {
        str3 = '<br/><span style="font-size:0.8rem;color:#636363">总计' + (pieData.total / 1000).toFixed(2) + 'GB</span></div>';
      }
      opts.series[0].dataLabels.format = str1 + str2 + str3;
      Highcharts.chart(this.componentId, opts);
    }
  };
</script>
<style scoped>
  .traffic_gauge {
    margin: 0.2rem auto;
    width: 14rem;
    height: 14rem;
    overflow: hidden;
    text-align: center;
  }
</style>
