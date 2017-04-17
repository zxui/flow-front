<template>
  <div>
    <div v-for="item of list">
      <form-preview header-label="付款金额" :header-value="'¥'+item.totalPrices" :body-items="item.items"></form-preview>
      <br/>
    </div>
  </div>
</template>

<script>
  import { FormPreview } from 'vux'
  let _d =
    [{
      "orderNo": "4993f881ad614d6084eee491fc3cddc6",
      "state": "0",
      "imsi": "460040090117727",
      "flowProductId": "035b2bb66e14452da4c4b328090d5241",
      "price": 0.01,
      "productNum": 1,
      "totalPrices": 0.01,
      "createTime": 1484204147000,
      "paymentTime": 1484204147000,
      "expiredTime": null,
      "userId": null,
      "paymentOrderNo": "4993f881ad614d6084eee491fc3cddc6",
      "delFlag": "0",
      "type": null,
      "flowNum": 300.0,
      "title": "小终端加油包",
      "payPlatform": "1"
    }, {
      "orderNo": "31b52b56b5754282b14cab27aba75278",
      "state": "0",
      "imsi": "460040090117727",
      "flowProductId": "035b2bb66e14452da4c4b328090d5241",
      "price": 0.01,
      "productNum": 1,
      "totalPrices": 0.01,
      "createTime": 1484191676000,
      "paymentTime": 1484191676000,
      "expiredTime": null,
      "userId": null,
      "paymentOrderNo": "31b52b56b5754282b14cab27aba75278",
      "delFlag": "0",
      "type": null,
      "flowNum": 300.0,
      "title": "小终端加油包",
      "payPlatform": "1"
    }, {
      "orderNo": "6233dfcadd46484bafee4c895318ccba",
      "state": "0",
      "imsi": "460040090117727",
      "flowProductId": "f70a8ceedd43414fab2b8ff1652aa33a",
      "price": 0.01,
      "productNum": 1,
      "totalPrices": 0.01,
      "createTime": 1482977829000,
      "paymentTime": 1482977829000,
      "expiredTime": null,
      "userId": null,
      "paymentOrderNo": "6233dfcadd46484bafee4c895318ccba",
      "delFlag": "0",
      "type": null,
      "flowNum": 20.0,
      "title": "移动加油包10元20M",
      "payPlatform": "1"
    }];
  function timeStampToDateText(timeStamp) {
    var time = new Date(parseInt(timeStamp));
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    if (month < 10) {
      month = "0" + month;
    }
    if (date < 10) {
      date = "0" + date;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes;
  }
  export default {
    components: {
      FormPreview
    },
    methods: {
    initData: function (data) {
      let list = [];
      data.forEach(function (obj) {
        let items = [];
        items.push({
          label: '加油包名称：',
          value: obj.title
        })
        items.push({
          label: '支付状态：',
          value: '0' == obj.state ? '支付完成' : '待支付'
        })
        items.push({
          label: '支付时间：',
          value: timeStampToDateText(obj.paymentTime)
        })
        list.push({
          totalPrices: obj.totalPrices,
          items: items
        })
      })
      return list;
    }
  }
  ,
  data()
  {
    return {
      list: this.initData(_d)
    }
  }
  }
</script>
