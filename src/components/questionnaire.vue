<template>
    <div class="questionnaire">
        <div class="top">
            <i class="back"></i>
            <span>调查问卷</span>
        </div>
        <div class="main">
            <header>
                <p class="title">{{questionnaire.title}}</p>
                <p class="content">{{questionnaire.content}}</p>
            </header>
            <div>
                <form @submit.prevent="submit" action="" class="form">
                    <div class="question" v-for="(item, index) in questionnaireTopicList" :key="index">
                        <div class="question_name">{{index+1}}. {{item.name}}
                            <span v-if="item.type=='2'">[多选]</span>
                        </div>
                        <ul class="question_option" :data-id="item.id">
                            <li v-for="(list, index) in item.questionnaireTopicOptionList" :key="index">
                                <label :for="item.name+' '+list.options+'.'+list.name">
                                    <span>{{list.options}}. {{list.name}}</span>
                                    <input :type="item.type=='1'?'radio':'checkbox'" :name="item.name" :id="item.name+' '+list.options+'.'+list.name" :value="index">
                                    <i></i>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <!-- <input class="submit" type="submit" value="" @click="submit"> -->
                    <div class="submit" @click="submit"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "questionnaire",
  data() {
    return {
      questionnaire: {},
      questionnaireTopicList: [],
      post: {
        questionnaireId: "",
        answerList: []
      }
    };
  },
  created() {
    /* 测试的cookie设置 */
    window.setCookie(
      "rememberMe",
      "z0KJxTjXGaeQzEkvQfOcx7Rjcbsq5zNVh89D7RqJvVwKLJ5l7woPLNIuox/KcI6tIKS5nbZGpmajeDm0ugDvSkWb0hGxcWyMbcWM9Tg53DBq8YTe/r4w7YR4SDyrtQC2oZBiWSGBm4eIrgsuTJkLvXgCo/5rKJx2k8A3FyzJHCPDoqUd/6RP9Sn3Dw0K+uR28uiarkLpQ4TCGzjsQ88gUy5cxRAmOrQUcZvE2CPsW9ge9hCvMzkURYuG2k+Hk1X4IM0jJw+3C5wADdH77pV1PlxSMS4XBma6iK2WwBvNuDFnaU1KHapZ2KgIqtSZiAZ8yIMCybDuNGeFkuQS1t/4zGf0y6+hKBzIP1neVc4M9dSnhPnFYal8Z+eTq5aZ3g/jLaaev6cuhcDuwhuntdOVC2Qsdfd8zV/b00QqBIJlxa6vvU1eSRPx0TjX0Lymp0FJh/8JVFJu9vAonYfcPuU5QZofRe6EWxhrGqUfOZje8Br4bcgHdP7SumrlUtG5dCuwlq7ft7zntidWqA7u/4Q+rVZsVog8grhYlN6QEAkHgMU="
    );
    window.setCookie("JSESSIONID", "C2C38D91FC6B31EB0C6F214553579ADC");
    window.setCookie("id", "6");

    /* 获取cookie中的questionnaireId */
    let questionnaireId = getCookie("id");

    let $this = this;
    this.axios
      .get("/api/questionnaire/detail?id=" + questionnaireId)
      .then(function(res) {
        let data = res.data.data;
        $this.questionnaire = data.questionnaire;
        $this.questionnaireTopicList = data.questionnaireTopicList;
        $this.post.questionnaireId = data.questionnaire.id;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {
    submit: function() {
      let $this = this;
      let topicId = document.getElementsByClassName("question");
      for (let topic of topicId) {
        let ul = topic.getElementsByTagName("ul");
        let id = ul[0].getAttribute("data-id");
        let input = ul[0].getElementsByTagName("input");
        let answerList = {};
        let str = [];
        for (let j = 0; j < input.length; j++) {
          if (input[j].checked) {
            str.push(input[j].value);
          }
        }
        let a = str.join(",");
        answerList.answer = a;
        answerList.topicId = id;
        $this.post.answerList.push(answerList);
      }
      this.axios
        .post("/api/questionnaire/create", $this.post)
        .then(function(res) {
          console.log(res.data);
          let resultstr = JSON.stringify(res.data);
          if (typeof window.app.success != "undefined") {
            window.app.success(resultstr);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};

window.setCookie = function(key, vaule) {
  document.cookie = key + "=" + vaule;
};
window.getCookie = function(key) {
  let strcookie = document.cookie;
  let arrcookie = strcookie.split(";");
  for (let i = 0; i < arrcookie.length; i++) {
    var arr = arrcookie[i].split("=");
    if (arr[0].trim() == key) {
      return arr[1];
    }
  }
  return null;
};
</script>

<style scoped>
.questionnaire {
  overflow: hidden;
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
  background-size: 100%;
}
.top span {
  font-size: 17px;
  font-family: PingFangSC-Regular;
  color: rgba(0, 0, 0, 1);
  line-height: 40px;
}

.main header {
  background-color: #fff;
  padding: 18px 16px;
  box-shadow: 4px 0px 6px rgba(72, 136, 166, 0.1);
}
.title {
  font-size: 16px;
  font-weight: bold;
  font-family: PingFangSC-Medium;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 16px;
}
.content {
  font-size: 13px;
  font-family: PingFangSC-Regular;
  color: rgba(102, 102, 102, 1);
  line-height: 22px;
  letter-spacing: 8;
}
.main form {
  padding: 15px;
}
.form .question {
  font-size: 15px;
  font-family: PingFangSC-Regular;
  color: rgba(51, 51, 51, 1);
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  box-shadow: 5px 0px 12px rgba(56, 79, 134, 0.1);
  margin-bottom: 15px;
  padding-bottom: 10px;
}
.question .question_name {
  height: 45px;
  line-height: 45px;
  padding-left: 21px;
  padding-right: 24px;
  border-bottom: 1px solid #e0e0e0;
}
.question_name span {
  color: rgba(18, 107, 251, 1);
}
.question_option {
  padding-left: 20px;
  padding-right: 24px;
}
.question_option li {
  line-height: 40px;
  position: relative;
}
.question_option span {
  font-size: 15px;
  font-family: PingFangSC-Regular;
  color: rgba(51, 51, 51, 1);
}
.question_option label {
  display: block;
}

.question_option li input,
.question_option label i {
  width: 21px;
  height: 21px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -10px;
}
.question_option li input {
  /* opacity: 0; */
  display: none;
}

.question_option li input[type="radio"] + i {
  background-image: url(/static/image/ic_circle_gray_no_choose_middle@2x.png);
  background-size: contain;
}
.question_option li input[type="checkbox"] + i {
  background-image: url(/static/image/ic_rectangle_gray_no_choose_middle@2x.png);
  background-size: contain;
}
.question_option li input[type="radio"]:checked + i {
  background-image: url(/static/image/ic_circle_yellow_selected_middle@2x.png);
}
.question_option li input[type="checkbox"]:checked + i {
  background-image: url(/static/image/ic_rectangle_yellow_selected_middle@2x.png);
}

.form .submit {
  display: block;
  width: 292px;
  height: 52px;
  margin: 0 auto;
  background-image: url(/static/image/btn_submission_yellow_2@2x.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: none;
}
</style>
