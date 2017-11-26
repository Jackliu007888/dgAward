# dgAward.js —— 基于js的打赏插件V1.1

## 关于dgAward.js打赏插件

目前个人博客，个人网站很多，优秀的文章更多，基于作者一定的打赏是对作者的一种鼓励，激励作者写出更优秀的文章。但是目前并没有发现一个简单易操作的打赏插件，于是打算造轮子。

关于效果展示，请到文章末尾查看,屏幕自适应，点击“赏”弹出二维。默认显示"如果这篇文章帮助到你，你可能想给我买杯咖啡 :)"等文字，当然这些文字你可以修改，只需要自定义参数。
默认显示“XX人打赏”，这是~~假的~~尚未完成，随机值3-17,对，连显示的那三个头像也是~~假的~~尚未完成:)。

## 关于用法

### 1.先引入JS，qrcode.js与dgAward.js
qrcode可以在本地生成二维码。[下载](http://ozz9y0r3b.bkt.clouddn.com/qrcode.js) 或者 [Gayhub](https://github.com/davidshimjs/qrcodejs)
dgAward.js这个js由本人创造并维护，同步更新在[GitHub](https://github.com/Jackliu007888/dgAward)上，欢迎RP。同时也会上传生产版本到[七牛CDN](http://ozz9y0r3b.bkt.clouddn.com/dgAward.js)，欢迎下载使用。


```
//  将qrcode.js 和 dgAward.js下载到本地
<script type="text/javascript" src="js/qrcode.js"></script>
<script type="text/javascript" src="js/dgAward.js"></script>
// 或者引用CDN
<script type="text/javascript" src="http://ozz9y0r3b.bkt.clouddn.com/dgAward.js"></script>
<script type="text/javascript" src="http://ozz9y0r3b.bkt.clouddn.com/qrcode.js"></script>
```

### 2.自定义参数

自定义的参数包括：用户头像，微信及支付宝二维码内容。插件显示文字等。
#### 获取微信及支付宝二维码
打开微信及支付宝，对自己的收款二维码截图并保存。用第三方二维码识别工具（一般手机浏览器或者qq都有）识别其内容，记录其内容，并按照以下格式填入。

## 完整代码展示使用方法

```js
   // 敲黑板！注意下面各个<script>的位置!!
   
<script type="text/javascript" src="http://ozz9y0r3b.bkt.clouddn.com/dgAward.js"></script>
<script type="text/javascript" src="http://ozz9y0r3b.bkt.clouddn.com/qrcode.js"></script>
<script type="text/javascript">
    // 如果没有自定义参数，转账的信息可是我的哦！
    // 如果没有自定义参数，转账的信息可是我的哦！
window.onload = function () {
    var config = {
        // DOM插入的位置，即父节点位置，支持id名及class名
        // 注意：id名为"#XXX",class名为".XXX"，多个class名插入位置为第一个class名的节点。
        // 不设置的或默认.container || body
        appendName: ".container",
        //   首屏展示文字，字符串
        showMes: '"如果这篇文章帮助到你，你可能想给我买杯咖啡 :)"',
        //   点击打赏按钮显示文字，字符串    
        hideMes: '"您的赞赏，是我创作的最大鼓励。"',
        // 用户头像，默认logoImage:"http://ovc3ypwtu.bkt.clouddn.com/android-chrome-96x96.png"
        logoImage: "",
        // 二维码参数,数组里面是对象
        listConfig: [{
                // 这里的content就是二维码识别的内容，替换字符串
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
            }
        ]
    }
    // 设置好config后，将config作为参数，传入初始化函数
    dgAward.init(config)
}
</script>
```

## 结语
目前这款插件8月中旬写了大概，当时是生成url调用第三方api生成二维码，经常因为网络原因加载不出二维码。这个版本采用qrcode.js本地生成二维码，速度更快更方便，之后还会再更新，有任何疑问或者建议可联系<a href="#0" onclick="location.assign(decodeURIComponent('moc.kooltuo04%tlevoluilkcajA3%otliam'.split('').reverse().join('')))">我</a>。

最后：If it helps you, you may want to buy me a coffee :).