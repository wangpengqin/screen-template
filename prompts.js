// prompts.js 就是用来存放你的问题与提供的选项的；prompts.js 最终需要导出一个数组，这个数组必须是满足Inquirer 问题格式的数组.例如可以提问是否使用element-ui组件库。
module.exports = [
    {
        name: "echarts",
        type: "confirm",
        message: `是否需要使用 echarts`,
        default: false
      },
]