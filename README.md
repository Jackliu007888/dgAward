# dgAward.js —— 一款基于js的打赏插件

## 关于打赏插件

目前个人博客，个人网站很多，优秀的文章更多，基于作者一定的打赏是对作者的一种鼓励，激励作者写出更优秀的文章。但是目前并没有发现一个简单易操作的打赏插件，于是打算造轮子。

##关于用法

### 1.先引入JS，dgAward.js
这个js同步更新在GitHub上，同时也会上传生产版本到cdn，欢迎下载使用。
```
<script type="text/javascript" src="js/dgAward.js"></script>
```

### 2.自定义参数

```
    <script type="text/javascript">
       window.myConfig = {
           baseUrl: "http://qr.liantu.com/api.php",
           showMes:'"如果这篇文章帮助到你，你可能想给我买杯咖啡 :)"',
           hideMes:'"您的赞赏，是我创作的最大鼓励。"',
           listConfig: [
                {
                   content: "HTTPS://QR.ALIPAY.COM/FKX04775JJLPLHW03GV321",
                   name: "支付宝",
                   desc: "支付宝打赏",
                   className: "alipay",
                   logo: ""
               },
                {
                   content: "wxp://f2f0FQyMGuEt3K-YvCtxx0Vu8A-XS3X92uE7",
                   name: "微信",
                   desc: "微信打赏",
                   className: "wechat",
                   logo: ""
               }]
       }
   </script>
```

