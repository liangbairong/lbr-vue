
//生成Peerid   每个设备只生成一次，清除缓存重新生成
export var createPeerid = () => {
  let ts = (new Date()).getTime()
  let rn = Math.floor(Math.random() * 9) + 1;
  let mn = ts % rn
  let ua = navigator.userAgent.toLowerCase();
  let isWeixin = ua.indexOf('micromessenger') != -1;
  let isAplipay = ua.indexOf('alipayclient') != -1;
  let first = '1'
  if (isWeixin) {
    first = '3'
  } else if (isAplipay) {
    first = '2'
  }
  return first + getRandomString(3, false, true) + rn + ts.toString(36) + mn + getRandomString(6, false, true);
};

export function getRandomString(len, onlyNumber, isLowercase) {
  len = len || 32;
  var $chars = "0123456789abcdefghigklmnopqrstuvtxyzABCDEFGHIGKLMNOPQRSTUVWXYZ";
  var size = onlyNumber ? 10 : 62;
  var str = '';
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * size));
  }
  if (isLowercase) {
    str = str.toLowerCase();
  }
  return str;
}



//金钱格式
export var fmoney = num => {
  var wnux = "";
  num = parseFloat(num);
  if (!num.toString().split(".")[1]) {
    wnux = ".00";
  }
  num = num.toLocaleString();
  return num + wnux; //返回的是字符串23,245.12保留2位小数
};

//保留两位小数格式
export var twoFixed = num => {
  num = parseFloat(num).toFixed(2);
  return num;
};
// 随机数
export var RandomNumBoth = (Min, Max) => {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range);
  return num;
};



export var isIOS = () => {
  var u = navigator.userAgent;
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  return isiOS;
}

//url
export var getQueryString = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

// 判断com_from 是否存在 path上
export var getComeFrom = (toPath) => {
  var name = "come_from";
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var routerNameCS = toPath.split("?")[1];
  if (routerNameCS) {
    var r = routerNameCS.match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
  }
  return null;
}


export var mySessionstorage = {
  set(key, val) {
    try {
      sessionStorage.setItem(key, JSON.stringify(val)); //存入缓存值  
    } catch (e) {}
  },
  get(key) {
    try {
      if (!sessionStorage) {
        return false;
      }
      var cacheVal = sessionStorage.getItem(key);
      var result = JSON.parse(cacheVal);
      if (!result) {
        return null;
      } //缓存不存在  
      return result;
    } catch (e) {
      return null;
    }
  },
  /**移除缓存*/
  remove: function (key) {
    if (!sessionStorage) {
      return false;
    }
    sessionStorage.removeItem(key);
  },

}

//数据存储
export var myLocalStorage = {
  set: function (key, stringVal, time) {
    try {
      if (!localStorage) {
        return false;
      }
      if (!time || isNaN(time)) {
        time = 60000000000000;
      }
      var cacheExpireDate = (new Date() - 1) + time * 1000;
      var cacheVal = {
        val: stringVal,
        exp: cacheExpireDate
      };
      localStorage.setItem(key, JSON.stringify(cacheVal)); //存入缓存值  
    } catch (e) {}
  },
  /**获取缓存*/
  get: function (key) {
    try {
      if (!localStorage) {
        return false;
      }
      var cacheVal = localStorage.getItem(key);
      var result = JSON.parse(cacheVal);
      var now = new Date() - 1;
      if (!result) {
        return null;
      } //缓存不存在  
      if (now > result.exp) { //缓存过期  
        this.remove(key);
        return "";
      }
      return result.val;
    } catch (e) {
      this.remove(key);
      return null;
    }
  },
  /**移除缓存，一般情况不手动调用，缓存过期自动调用*/
  remove: function (key) {
    if (!localStorage) {
      return false;
    }
    localStorage.removeItem(key);
  },
  /**清空所有缓存*/
  clear: function () {
    if (!localStorage) {
      return false;
    }
    localStorage.clear();
  }
}





