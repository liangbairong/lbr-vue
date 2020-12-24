发布npm 最重要的是我们需要先修改package.json文件
```json
{
  private:false, // 默认是true 私人的 需要改为false 不然发不上去 你可以试试..
  "license": "MIT", // 许可证
  "main": "dist/vue-pay-keyboard.js", // 这个超级重要 决定了你 import xxx from “vue-pay-keyboard” 它默认就会去找 dist下的vue-pay-keyboard 文件
  "repository": {
    "type": "git",
    "url": "https://github.com/yucccc/vue-pay-keyboard"
  }, // 配置这个地址存放你项目在github上的位置 也尤为重要
}


```

OK 一切搞定 发布npm吧 哦 记得写一下readme
注册好npm后 添加用户
npm adduser 
Username: your name
Password: your password
Email: yourmail[@gmail](/user/gmail).com
因为我这边已经添加过了 没办法演示 接着
npm whoami // 看一看你是谁.. 
没问题
npm login // 登陆 
npm publish // 发布


删除发布的库
npm unpublish lbr-vue-alert@1.0.0 --force