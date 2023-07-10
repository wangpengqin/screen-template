<!-- 横向滚动的容器 -->
<template>
    <div class="horizontal-roll" :id="idname">
      <div class="horizontal-roll-container">
        <slot></slot>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
      idname: {
        type: String,
      },
    },
    mounted() {
      this.listRoll();
    },
    methods: {
      listRoll() {
        let vm = this;
        var list = document.querySelector("#" + this.idname);
        var listbox = document.querySelector(
          `#${this.idname} .horizontal-roll-container`
        );
        var speed = 0;
        var roll = function () {
          speed += 1;
          if (speed > listbox.offsetWidth - list.offsetWidth) {
            speed = 0;
          }
          listbox.style.left = -speed + "px";
        };
        //内容超出才滚动
        if (listbox.offsetWidth > list.offsetWidth) {
          var timer = setInterval(roll, 100);
          list.onmouseover = function () {
            clearInterval(timer);
          };
          list.onmouseout = function () {
            timer = setInterval(roll, 100);
          };
        }
      },
    },
  };
  </script>
  <style lang="scss" scoped>
  .horizontal-roll {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }
    .horizontal-roll-container {
      width: auto;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  </style>