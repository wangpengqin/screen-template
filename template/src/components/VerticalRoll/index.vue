<!-- 纵向滚动的容器 -->
<template>
    <div
      class="vertical-roll"
      :id="idname"
    >
      <div class="vertical-roll-container">
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
    mounted () {
      this.listRoll();
    },
    methods: {
      listRoll () {
        let vm = this;
        var list = document.querySelector("#" + this.idname);
        var listbox = document.querySelector(
          `#${this.idname} .vertical-roll-container`
        );
  
        var roll = function () {
          if (
            Math.ceil(list.scrollTop) >=
            listbox.offsetHeight - list.offsetHeight
          ) {
            list.scrollTop = 0;
          }
          list.scrollTop++;
          if (Math.ceil(list.scrollTop) == listbox.offsetHeight - list.offsetHeight - 20) {
            vm.$emit("getNewData");
          }
        };
        //内容超出才滚动
        if (listbox.offsetHeight > list.offsetHeight) {
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
  .vertical-roll {
    width: 100%;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .vertical-roll-container {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
    }
  }
  </style>