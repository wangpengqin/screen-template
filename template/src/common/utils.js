/**
 * 工具类：字符串工具类，对象工具类，路径工具类，数组工具类
 */
var stringUtils = {
  /**
   * 字符串拼接方法
   * @param String 拓展参数
   * @return String
   */
  concat: (first, ...args) => {
    args.forEach((s, i) => {
      Object.prototype.toString.call(s).slice(8, -1) === "String" ||
        args[i] === JSON.stringify(s);
    });
    return [first].concat(...args).join("");
  },
  /**
   * 判断字符串是否为空值或者是否为字符串
   * @return Boolean
   */
  isNull: (str) => {
    return (
      str === "" ||
      Object.prototype.toString.call(str).slice(8, -1) === "Undefined" ||
      Object.prototype.toString.call(str).slice(8, -1) === "Null"
    );
  },
};

var objectUtils = {
  /**
   * 判断是否为对象或者空值
   * @retrun Boolean
   */
  isNull: (o) => {
    return (
      Object.prototype.toString.call(o).slice(8, -1) === "Null" ||
      Object.prototype.toString.call(o).slice(8, -1) === "Undefined" ||
      o.toString() === ""
    );
  },
  /**
   * 初始化复制对象的每个属性为空字符串
   */
  init: (o) => {
    for (let _prop in 0) {
      o[_prop] = "";
    }
  },
  /**
   * 对象反射赋值
   * @param o 原对象 Object
   * @param _target 目标对象 Object
   */
  formDataReflector: (o, _target) => {
    if (objectUtils.isNull(o) && objectUtils.isNull(_target)) {
      return;
    }
    for (let _prop in o) {
      if (typeof o[_prop] != "function" && _target.hasOwnProperty(_prop)) {
        _target[_prop] = o[_prop];
      }
    }
  },
};

var arrayUtils = {
  /**
   * 权限按钮双数组取交集
   * @param dataList 当前页面已有权限数据列表 Array[Object]
   * Object{tag,method,url}
   * @param reviceList 当前用户拥有权限列表 Array[Object]
   * Object{method,url,name}
   * 判断依据 url+method
   * tag 匹配页面标记
   * name 按钮显示名称 可后台配置修改
   * @return Array[object]
   * Object{method,url,name,tag}
   */
  authOperateIntersect: (dataList, reviceList) => {
    let list = [];
    reviceList.forEach((e) => {
      dataList.forEach((ele) => {
        if (ele.url == e.url && ele.method == e.method) {
          e.tag = ele.tag;
          list.push(e);
        }
      });
    });
    return list;
  },
};

var urlUtils = {
  /**
   * url路径批量增加参数
   * @return String
   */
  appParam: (url, obj) => {
    url += "?";
    for (let _prop in obj) {
      !stringUtils.isNull(obj[_prop]) &&
        (url = url + _prop + "=" + obj[_prop] + "&");
    }
    return url.slice(0, url.length - 1);
  },
  /**
   * restful url拼接参数
   * @return String
   */
  concat: (url, ...patch) => {
    patch.forEach((e) => (url = url + "/" + e));
    return url;
  },
};

var dateUtils = {
  formatDate: (datetime) => {
    datetime = new Date(Number(datetime));
    // 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
    var year = datetime.getFullYear(),
      month = ("0" + (datetime.getMonth() + 1)).slice(-2),
      date = ("0" + datetime.getDate()).slice(-2),
      hour = ("0" + datetime.getHours()).slice(-2),
      minute = ("0" + datetime.getMinutes()).slice(-2),
      second = ("0" + datetime.getSeconds()).slice(-2);
    // 拼接
    var result =
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hour +
      ":" +
      minute +
      ":" +
      second;
    // 返回
    return result;
  },
};
var timeUtils = {
  hour: () => {
    let date = new Date();
    let hours = date.getHours();
    return hours;
  },
  timeClock: () => {
    let date = new Date();
    let year = date.getFullYear();
    let month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return (
      year +
      "-" +
      month +
      "-" +
      day +
      "  " +
      hours +
      ":" +
      minute +
      ":" +
      second
    );
  },
  timeFormat: (time) => {
    // new Date().getFullYear()
    let month =
      time.getMonth() + 1 < 10
        ? "0" + (time.getMonth() + 1)
        : time.getMonth() + 1;
    let year = time.getFullYear();
    return year + "-" + month;
  },
  yearTime: (time) => {
    // new Date().getFullYear()
    let year = time.getFullYear();
    return year;
  },
  todayStr: () => {
    let date = new Date();
    let year = date.getFullYear();
    let month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let week = "";
    switch (date.getDay()) {
      case 1:
        week = "星期一";
        break;
      case 2:
        week = "星期二";
        break;
      case 3:
        week = "星期三";
        break;
      case 4:
        week = "星期四";
        break;
      case 5:
        week = "星期五";
        break;
      case 6:
        week = "星期六";
        break;
      case 7:
        week = "星期七";
        break;
    }
    return year + "年" + month + "月" + day + "日 " + week;
  },
  dateStr: () => {
    let date = new Date();
    let year = date.getFullYear();
    let month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return year + "-" + month + "-" + day;
  },
  fullTime: (time) => {
    let month =
      time.getMonth() + 1 < 10
        ? "0" + (time.getMonth() + 1)
        : time.getMonth() + 1;
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    let year = time.getFullYear();
    return year + "-" + month + "-" + day;
  },
  scopeStr: (time, sign) => {
    let month = time.getMonth() + 1;
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    let week = "";
    switch (time.getDay()) {
      case 1:
        week = "星期一";
        break;
      case 2:
        week = "星期二";
        break;
      case 3:
        week = "星期三";
        break;
      case 4:
        week = "星期四";
        break;
      case 5:
        week = "星期五";
        break;
      case 6:
        week = "星期六";
        break;
      case 0:
        week = "星期天";
        break;
    }
    week = sign ? sign : week;
    return month + "月" + day + "日 (" + week + ")";
  },
  getSpicelDate: (time, n) => {
    let dates = n ? new Date(n) : new Date();

    dates.setTime(dates.getTime() + 24 * 60 * 60 * 1000 * time);
    return dates;
  },
};
var mapUtils = {
  PI: 3.14159265358979324,
  x_pi: (3.14159265358979324 * 3000.0) / 180.0,
  delta: function (lat, lon) {
    var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
    var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
    var dLat = this.transformLat(lon - 105.0, lat - 35.0);
    var dLon = this.transformLon(lon - 105.0, lat - 35.0);
    var radLat = (lat / 180.0) * this.PI;
    var magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * this.PI);
    dLon = (dLon * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * this.PI);
    return { lat: dLat, lon: dLon };
  },
  //WGS-84 to GCJ-02
  gcj_encrypt: function (wgsLat, wgsLon) {
    if (this.outOfChina(wgsLat, wgsLon)) return { lat: wgsLat, lon: wgsLon };
    var d = this.delta(wgsLat, wgsLon);
    return { lat: wgsLat + d.lat, lon: wgsLon + d.lon };
  },
  //GCJ-02 to WGS-84
  gcj_decrypt: function (gcjLat, gcjLon) {
    if (this.outOfChina(gcjLat, gcjLon)) return { lat: gcjLat, lon: gcjLon };

    var d = this.delta(gcjLat, gcjLon);
    return { lat: gcjLat - d.lat, lon: gcjLon - d.lon };
  },
  //GCJ-02 to WGS-84 exactly
  gcj_decrypt_exact: function (gcjLat, gcjLon) {
    var initDelta = 0.01;
    var threshold = 0.000000001;
    var dLat = initDelta,
      dLon = initDelta;
    var mLat = gcjLat - dLat,
      mLon = gcjLon - dLon;
    var pLat = gcjLat + dLat,
      pLon = gcjLon + dLon;
    var wgsLat,
      wgsLon,
      i = 0;
    while (1) {
      wgsLat = (mLat + pLat) / 2;
      wgsLon = (mLon + pLon) / 2;
      var tmp = this.gcj_encrypt(wgsLat, wgsLon);
      dLat = tmp.lat - gcjLat;
      dLon = tmp.lon - gcjLon;
      if (Math.abs(dLat) < threshold && Math.abs(dLon) < threshold) break;

      if (dLat > 0) pLat = wgsLat;
      else mLat = wgsLat;
      if (dLon > 0) pLon = wgsLon;
      else mLon = wgsLon;

      if (++i > 10000) break;
    }
    return { lat: wgsLat, lon: wgsLon };
  },
  //GCJ-02 to BD-09
  bd_encrypt: function (gcjLat, gcjLon) {
    var x = gcjLon,
      y = gcjLat;
    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.x_pi);
    var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.x_pi);
    var bdLon = z * Math.cos(theta) + 0.0065;
    var bdLat = z * Math.sin(theta) + 0.006;
    return { lat: bdLat, lon: bdLon };
  },
  //BD-09 to GCJ-02
  bd_decrypt: function (bdLat, bdLon) {
    var x = bdLon - 0.0065,
      y = bdLat - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_pi);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_pi);
    var gcjLon = z * Math.cos(theta);
    var gcjLat = z * Math.sin(theta);
    return { lat: gcjLat, lon: gcjLon };
  },
  wgsToBd: function (wgsLat, wgsLon) {
    let gcjCoord = this.gcj_encrypt(wgsLat, wgsLon);
    let bdCoord = this.bd_encrypt(gcjCoord.lat, gcjCoord.lon);
    return { lat: bdCoord.lat, lon: bdCoord.lon };
  },
  //WGS-84 to Web mercator
  //mercatorLat -> y mercatorLon -> x
  mercator_encrypt: function (wgsLat, wgsLon) {
    var x = (wgsLon * 20037508.34) / 180;
    var y =
      Math.log(Math.tan(((90 + wgsLat) * this.PI) / 360)) / (this.PI / 180);
    y = (y * 20037508.34) / 180;
    return { lat: y, lon: x };
  },
  // Web mercator to WGS-84
  // mercatorLat -> y mercatorLon -> x
  mercator_decrypt: function (mercatorLat, mercatorLon) {
    var x = (mercatorLon / 20037508.34) * 180;
    var y = (mercatorLat / 20037508.34) * 180;
    y =
      (180 / this.PI) *
      (2 * Math.atan(Math.exp((y * this.PI) / 180)) - this.PI / 2);
    return { lat: y, lon: x };
  },
  // two point's distance
  distance: function (latA, lonA, latB, lonB) {
    var earthR = 6371000;
    var x =
      Math.cos((latA * this.PI) / 180) *
      Math.cos((latB * this.PI) / 180) *
      Math.cos(((lonA - lonB) * this.PI) / 180);
    var y = Math.sin((latA * this.PI) / 180) * Math.sin((latB * this.PI) / 180);
    var s = x + y;
    if (s > 1) s = 1;
    if (s < -1) s = -1;
    var alpha = Math.acos(s);
    var distance = alpha * earthR;
    return distance;
  },
  outOfChina: function (lat, lon) {
    if (lon < 72.004 || lon > 137.8347) return true;
    if (lat < 0.8293 || lat > 55.8271) return true;
    return false;
  },
  transformLat: function (x, y) {
    var ret =
      -100.0 +
      2.0 * x +
      3.0 * y +
      0.2 * y * y +
      0.1 * x * y +
      0.2 * Math.sqrt(Math.abs(x));
    ret +=
      ((20.0 * Math.sin(6.0 * x * this.PI) +
        20.0 * Math.sin(2.0 * x * this.PI)) *
        2.0) /
      3.0;
    ret +=
      ((20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin((y / 3.0) * this.PI)) *
        2.0) /
      3.0;
    ret +=
      ((160.0 * Math.sin((y / 12.0) * this.PI) +
        320 * Math.sin((y * this.PI) / 30.0)) *
        2.0) /
      3.0;
    return ret;
  },
  transformLon: function (x, y) {
    var ret =
      300.0 +
      x +
      2.0 * y +
      0.1 * x * x +
      0.1 * x * y +
      0.1 * Math.sqrt(Math.abs(x));
    ret +=
      ((20.0 * Math.sin(6.0 * x * this.PI) +
        20.0 * Math.sin(2.0 * x * this.PI)) *
        2.0) /
      3.0;
    ret +=
      ((20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin((x / 3.0) * this.PI)) *
        2.0) /
      3.0;
    ret +=
      ((150.0 * Math.sin((x / 12.0) * this.PI) +
        300.0 * Math.sin((x / 30.0) * this.PI)) *
        2.0) /
      3.0;
    return ret;
  },
  /**
   * @description: 计算点位数组points的中心点位
   * @param {Array} points 参数数组points每一项包含每一个点的：经度,纬度 eg:[{lat:"28.62225566533824",lng:"118.57976061322"},……]
   * @return {Array} 返回中心点位数组  eg:[118.57976061322,28.62225566533824]
   */
  getPointsCenter: function (points) {
    var point_num = points.length; //坐标点个数
    var X = 0,
      Y = 0,
      Z = 0;
    for (let i = 0; i < points.length; i++) {
      if (points[i].lat == "" || points[i].lng == "") {
        continue;
      }
      let point = points[i];
      var lat, lng, x, y, z;
      lat = (parseFloat(point.lat) * Math.PI) / 180;
      lng = (parseFloat(point.lng) * Math.PI) / 180;
      x = Math.cos(lat) * Math.cos(lng);
      y = Math.cos(lat) * Math.sin(lng);
      z = Math.sin(lat);
      X += x;
      Y += y;
      Z += z;
    }
    X = X / point_num;
    Y = Y / point_num;
    Z = Z / point_num;

    var tmp_lng = Math.atan2(Y, X);
    var tmp_lat = Math.atan2(Z, Math.sqrt(X * X + Y * Y));

    return [(tmp_lng * 180) / Math.PI, (tmp_lat * 180) / Math.PI];
  },
};
var dealEchartsData = {
  provinceName(list) {
    let data = [
      "北京市",
      "天津市",
      "上海市",
      "重庆市",
      "河北省",
      "河南省",
      "云南省",
      "辽宁省",
      "黑龙江省",
      "湖南省",
      "安徽省",
      "山东省",
      "江苏省",
      "浙江省",
      "江西省",
      "湖北省",
      "甘肃省",
      "山西省",
      "陕西省",
      "吉林省",
      "福建省",
      "贵州省",
      "广东省",
      "青海省",
      "四川省",
      "海南省",
      "台湾省",
      "香港",
      "澳门",
      "南海诸岛",
      "内蒙古自治区",
      "广西壮族自治区",
      "宁夏回族自治区",
      "新疆维吾尔自治区",
      "西藏自治区",
    ];
    list.forEach((ele) => {
      let obj = data.find((ele1) => {
        return ele1.indexOf(ele.name) != -1;
      });
      if (obj) {
        ele.name = obj;
      }
    });
    return list;
  },
};
export default {
  stringUtils,
  objectUtils,
  arrayUtils,
  urlUtils,
  dateUtils,
  timeUtils,
  mapUtils,
  dealEchartsData,
};
