<template>
    <div class="download">
        <div class="top">
            <i class="back"></i>
            <span>下载叮叮学府</span>
        </div>
        <div class="main">
            <div class="download_share">
                <img :src="imgs" alt="aa" width="160" height="160">
                <p>{{name}}</p>
                <p>分享邀请码：
                    <span>{{code}}</span>
                </p>
            </div>
            <div class="download_btnbox">
                <img src="/static/image/ic_download_page_logo@2x.png" alt="" width="85" height="77">
                <p>叮叮学府</p>
                <div class="download_btn" @click="download"></div>
            </div>
            <div class="download_summary">
                <p>叮叮学府 “一站式” 大型综合培训城是广州市仲元教育管理有限公司在广州市番禺仲元实验学校取得优异成绩的基础上创建的又一优质品牌。</p>
                <p>叮叮学府现有五个教学点，其中总部面积近1万平方米，武汉汉阳分校面积近6千平方米，大石锦绣银湾分校面积近3千平米，子品牌云艺教育两个教学点面积也有4千平方米。五个教学点均采取统一管理和经营，所有人员均通过一卡通刷卡进出。 叮叮学府为19个月婴幼儿至16岁青少年开设早教班、1至9年级文化课同步辅导和晚辅班、一对一同步辅导，以及100多个项目的兴趣班课程。兴趣班课程涵盖艺术、体育、舞蹈、武术、书法、科技、棋等。</p>
                <p>叮叮学府教育培训城以 "民办青少宫"为创办目标，以良好的教育资源取信于民， 以亲民的课程收费标准服务于民，用完善高配的设施设备辅助教学， 旨在为19个月到16岁的孩子提供全方位的优质教育。 只要孩子年满6岁，报读叮叮学府任何课程即可享受价 6000元的一年免费托管（早8:00-晚21:00)服务。总部配套有120平方米同时容纳40多人的电子阅览室、200多平方米藏书5000余册的图书馆、80平方米的乐思构乐高积木基地、150平方米的外教英语体验中心、250平方米的叮叮主题餐厅、70平方米的叮叮主题文具店， 标准的室外篮球场、室外网球场和足球场等各种场室免费使用。家长再也不用为放学后和周末频繁穿梭于各培训机构接送孩子而烦心费力了。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "download",
  data() {
    return {
      name: "叮小晨",
      code: "422855",
      imgs: "/static/image/u836.png"
    };
  },
  methods: {
    download: function() {
      //window.location.href = "http://www.baidu.com";
      this.$router.push("/");
    }
  }
};
</script>

<style >
.download {
  overflow: hidden;
  background-color: #fff;
}
.top {
  position: relative;
  height: 40px;
  background-color: #ffffff;
  text-align: center;
  vertical-align: middle;
}
.top .back {
  position: absolute;
  left: 17px;
  top: 10px;
  width: 11px;
  height: 18px;
  background-image: url(/static/image/btn_return_gray.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.top span {
  font-size: 17px;
  font-family: PingFangSC-Regular;
  color: rgba(0, 0, 0, 1);
  line-height: 40px;
}

.download_share {
  height: 151px;
  font-size: 15px;
  font-family: PingFangSC-Regular;
  color: rgba(51, 51, 51, 1);
  padding-top: 20px;
  background-image: url(/static/image/bg_download_page_yellow@2x.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
.download_share img {
  display: inline-block;
  width: 48px;
  height: 48px;
  position: absolute;
  top: 22px;
  left: 20px;
}
.download_share p {
  line-height: 25px;
  margin-left: 86px;
}
.download_share p span {
  font-weight: bold;
}
.download_btnbox {
  text-align: center;
  margin-top: -70px;
  position: relative;
}
.download_btnbox p {
  font-size: 16px;
  font-family: PingFangSC-Regular;
  color: rgba(0, 0, 0, 1);
  line-height: 40px;
}
.download_btnbox .download_btn {
  width: 202px;
  height: 65px;
  margin: 0 auto;
  display: inline-block;
  background-image: url(/static/image/btn_download_yellow@2x.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.download_summary {
  margin: 14px 21px 28px;
}
.download_summary p {
  font-size: 14px;
  font-family: PingFangSC-Regular;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  text-indent: 2em;
}
</style>
