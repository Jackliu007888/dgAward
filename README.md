
# dgAward.js —— 基于js的打赏插件

## 关于dgAward.js打赏插件

目前个人博客，个人网站很多，优秀的文章更多，基于作者一定的打赏是对作者的一种鼓励，激励作者写出更优秀的文章。但是目前并没有发现一个简单易操作的打赏插件，于是打算造轮子。

## 关于用法

### 1.先引入JS，dgAward.js
这个js同步更新在[GitHub](https://github.com/Jackliu007888/dgAward)上，欢迎RP。同时也会上传生产版本到[七牛CDN](http://ovc3ypwtu.bkt.clouddn.com/dgAward.js)，欢迎下载使用。


```
//  将dgAward.js下载到本地
<script type="text/javascript" src="js/dgAward.js"></script>
// 或者引用CDN
<script type="text/javascript" src="http://ovc3ypwtu.bkt.clouddn.com/dgAward.js"></script>
```

### 2.自定义参数

自定义的参数包括：微信及支付宝二维码内容。插件显示文字等。
#### 获取微信及支付宝二维码
打开微信及支付宝，对自己的收款二维码截图并保存。用第三方二维码识别工具（一般手机浏览器或者qq都有）识别其内容，记录其内容，并按照以下格式填入。
```
    <script type="text/javascript">
       window.myConfig = {
            //   首屏展示文字
           showMes:'"如果这篇文章帮助到你，你可能想给我买杯咖啡 :)"',
            //   点击打赏按钮显示文字    
           hideMes:'"您的赞赏，是我创作的最大鼓励。"',
             // 二维码参数
           listConfig: [
                {
                // 这里的content就是二维码识别的内容
                   content: "HTTPS://QR.ALIPAY.COM/FKX04775JJLPLHW03GV321",
                   name: "支付宝",
                   desc: "支付宝打赏",
                   className: "alipay",
               },
                {
                // 微信同理
                   content: "wxp://f2f0FQyMGuEt3K-YvCtxx0Vu8A-XS3X92uE7",
                   name: "微信",
                   desc: "微信打赏",
                   className: "wechat",
               }]
       }
   </script>
```

## 结语
目前这款插件只是写了个大概，还会再更新，有任何疑问或者建议可联系<a href="#0" onclick="location.assign(decodeURIComponent('moc.kooltuo04%tlevoluilkcajA3%otliam'.split('').reverse().join('')))">我</a>。

最后：If it helps you, you may want to buy me a coffee :).