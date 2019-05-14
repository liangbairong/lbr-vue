import axios from 'axios'
import qs from 'qs';
import {
  myLocalStorage,
  createPeerid,
} from '@/uilts/uilts'

import errHint from './errHint'
import {
  Indicator,
  Toast
} from 'mint-ui';

axios.defaults.timeout = 10000;
axios.interceptors.request.use(
  config => {
    var peerid = myLocalStorage.get('peerid');
    if (!peerid) {
      peerid = createPeerid();
      myLocalStorage.set('peerid', peerid);
    }
    var sessionid = myLocalStorage.get('sessionid');
    var come_from = myLocalStorage.get('come_from');
    if (config.method === 'get') {
      peerid && (config.params.peerid = peerid)
      come_from && (config.params.come_from = come_from)
      sessionid && (config.params.sessionid = sessionid)
    } else if (config.method === 'post') {
      peerid && (config.data.peerid = peerid)
      come_from && (config.data.come_from = come_from)
      sessionid && (config.data.sessionid = sessionid)
      config.data = qs.stringify(config.data);
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });


function ajaxContent(param, res) {
  // 登录状态已失效
  if (res.data.errinfo == 'SESSIONID_INVALID') {
    myLocalStorage.remove("peerid");
    myLocalStorage.remove("sessionid");
    myLocalStorage.remove("staff.sessionid");
    // window.location.href="/staff/login"
    Indicator.close();
    return;
  }
  var hintErr = param.hintErr || false; //禁止弹出警告提示 true: 不弹出    默认弹出
  if (!hintErr) {
    try {
      if (res.data.errcode !== 0) {
        let val = errHint[res.data.errinfo];
        if (val == undefined) {
          val = res.data.errinfo;
        }
        Toast({
          message: val,
          duration: 1000
        });
      }
    } catch (err) {}
  }
  if (!param.noLoading) {
    Indicator.close();
  }
}
//封装Promise
export default param => {
  var noLoading = param.noLoading || false; //禁止显示loading
  if (!noLoading) {
    Indicator.open('加载中');
  }
  if (param.method == "post") {
    return new Promise((resolve, reject) => {
      axios.post(param.url, {
        ...param.data,
      }).then(res => {
        resolve(res);
        ajaxContent(param, res);
      }).catch((error) => {
        reject(error)
        if (!noLoading) {
          Indicator.close();
        }
        console.log(error.message);
      });
    })

  } else {
    return new Promise((resolve, reject) => {
      axios.get(param.url, {
        params: {
          ...param.data,
        },
      }).then(res => {
        resolve(res);
        ajaxContent(param, res);
      }).catch((error) => {
        reject(error)
        if (!noLoading) {
          Indicator.close();
        }
        console.log(error.message);
      });
    })
  }
};