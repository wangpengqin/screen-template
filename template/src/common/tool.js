var tool={
    /**
     * @description: 复制内容到剪贴板
     * @return {*}
     * @param {String} content 要复制到剪切板的内容
     * eg:copyToClipboard("Hello fatfish")
     */
    copyToClipboard:(content) => navigator.clipboard.writeText(content),

    /**
     * @description: 获取鼠标选择 获取用户选择的内容
     * @return {*}
     */    
    getSelectedText: () => window.getSelection().toString(),

    /**
     * @description: 打乱数组（彩票项目中很常见，但它并不是真正随机的）
     * @return {*}
     * @param {Array} array 要打乱顺序的数组
     * eg：shuffleArray([1, 2,3,4, -1, 0])  // [3, 1, 0, 2, 4, -1]
     */   
    shuffleArray:(array)=>array.sort(()=>Math.random()-0.5),

    /**
     * @description:  将rgba转换为十六进制
     * @return {*}
     * @param {Number} r
     * @param {Number} g
     * @param {Number} b
     * eg:rgbaToHex(0, 0 ,0) // #000000     rgbaToHex(255, 0, 127) //#ff007f
     */    
    rgbaToHex : (r, g, b) => "#" + [r, g, b].map(num => parseInt(num).toString(16).padStart(2, '0')).join(''),

    /**
     * @description:  十六进制转换为rgba
     * @return {*}
     * @param {String} hex 十六进制颜色
     * eg:hexToRgba('#000000') // rgba(0, 0, 0, 1)     hexToRgba('#ff007f') // rgba(255, 0, 127, 1)
     */  
    hexToRgba : hex => {
        const [r, g, b] = hex.match(/\w\w/g).map(val => parseInt(val, 16))
        return `rgba(${r}, ${g}, ${b}, 1)`;
    },

    
    /**
     * @description: 获取多个数的平均值
     * @return {Number} 返回平均值
     * eg:average(0, 1, 2, -1, 9, 10) // 3.5
     */    
    average : (...args) => args.reduce((a, b) => a + b, 0)/args.length,

    /**
     * @description: 删除数组中重复的元素
     * @return {*}
     * @param {Array} arr 要去重的数组
     * eg：uniqueArray([ 1, 1, 2, 3, 4, 5, -1, 0 ]) // [1, 2, 3, 4, 5, -1, 0]
     */
    uniqueArray:(arr) => [...new Set(arr)],

    /**
     * @description: 检查一个对象是否为空对象
     * @return {*}
     * @param {Object} obj 要检验的对象
     * eg：isEmpty({}) // true    isEmpty({ name: 'fatfish' }) // false
     */         
    isEmpty : obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object,

    
    /**
     * @description: 计算两个日期之间的间隔
     * @return {Number} 返回两个时间的时间戳的差值
     * @param {Date} d1 日期一
     * @param {Date} d2 日期二
     * eg：dayDiff(new Date("2023-06-23"), new Date("1997-05-31")) // 9519
     */    
    dayDiff : (d1, d2) => Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000),

    /**
     * @description: 查找该日期是一年中的第几天
     * @return {Number} 第几天
     * @param {Date} d 日期
     * eg：dayInYear(new Date('2023/06/23')) // 174
     */    
    dayInYear : (d) => Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24),


     /**
     * @description: 将字符串的第一个字母大写
     * @return {String}
     * @param {String} str
     * eg：capitalize("hello fatfish")  // Hello fatfish
     */    
    capitalize : str => str.charAt(0).toUpperCase() + str.slice(1),


    /**
     * @description: 生成指定长度的随机字符串
     * @return {*}
     * @param {length} 字符串长度
     * eg：generateRandomString(12) // cysw0gfljoyx   generateRandomString(12) // uoqaugnm8r4s
     */    
    generateRandomString : length => [...Array(length)].map(() => Math.random().toString(36)[2]).join(''),

    /**
     * @description: 获取两个整数之间的随机整数
     * @param {Number} min 范围最小值
     * @param {Number} max 范围最大值
     * @return {Number} 随机整数
     * eg：random(1, 100) // 27   random(1, 100) // 84   random(1, 100) // 55
     */    
    random : (min, max) => Math.floor(Math.random() * (max - min + 1) + min),

    /**
     * @description: 指定数字四舍五入
     * @param {Float} n 要四舍五入的数值
     * @param {Number} d 小数点后几位
     * @return {Number} 随机整数
     * eg：round(3.1415926, 3) //3.142  round(3.1415926, 1) //3.1
     */    
    round:(n, d) => Number(Math.round(n + "e" + d) + "e-" + d),


    /**
     * @description: 判断是否为苹果设备
     * @return {Boolean}
     * eg：round(3.1415926, 3) //3.142  round(3.1415926, 1) //3.1
     */    
    isAppleDevice : () => /Mac|iPod|iPhone|iPad/.test(navigator.platform),


     /**
     * @description: 获取变量的类型
     * @return {String}
     * eg：
     * typeOf('')     // string
     * typeOf(0)      // number
     * typeOf()       // undefined
     * typeOf(null)   // null
     * typeOf({})     // object
     * typeOf([])     // array
     * typeOf(0)      // number
     * typeOf(() => {})  // function
     */    
    typeOf : (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase(),

    /**
     * @description: 检查某个元素是否获得焦点
     * @return {Boolean} 
     */   
    isFocus: (ele) => ele === document.activeElement,

     
    /**
     * @description: 随机IP
     * @return {*}
     * eg：generateRandomIP() // 220.187.184.113
     * generateRandomIP() // 254.24.179.151
     */    
    generateRandomIP :() => {
        return Array.from({length: 4}, () => Math.floor(Math.random() * 256)).join('.');
    }

}