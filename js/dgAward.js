var dgAward = {
    myConfig: {
        // imagePrefix : "",
        // cssPrefix : "",
        // cssUrl:"",
        appendName: window.myConfig.appendName || ".containner",
        logoBaseUrl: "http://ovc3ypwtu.bkt.clouddn.com",
        logoImage: window.myConfig.logoImage || "http://ovc3ypwtu.bkt.clouddn.com/android-chrome-96x96.png",
        showMes: window.myConfig.showMes || '"如果这篇文章帮助到你，你可能想给我买杯咖啡 :)"',
        awardMes: window.myConfig.awardMes || '（扫描或长按二维码识别打赏）',
        hideMes: window.myConfig.hideMes || '"您的赞赏，是我创作的最大鼓励。"',
        baseUrl: window.myConfig.baseUrl || "http://qr.liantu.com/api.php",
        listConfig: window.myConfig.listConfig || [{
                configName: 'alipay',
                content: "HTTPS://QR.ALIPAY.COM/FKX04775JJLPLHW03GV321",
                name: "支付宝",
                desc: "支付宝打赏",
                className: "alipay",
                logo: ""
            },
            {
                configName: 'wechat',
                content: "wxp://f2f0FQyMGuEt3K-YvCtxx0Vu8A-XS3X92uE7",
                name: "微信",
                desc: "微信打赏",
                className: "wechat",
                logo: ""
            }
        ]
    },
    wrapper: null,
    myRewards: null,
    awardPeopleLogo: null,
    iconLi: null,
    awardShow: null,
    awardHide: null,
    qrcodeWrapper: null,
    eventListen: function () {
        dgAwardUtil.onClick("#awardLogo", function () {
            dgAwardUtil.getElement("#awardHide").style.display = "block"
        });
        dgAwardUtil.onClick("#closeSwitch", function () {
            dgAwardUtil.getElement("#awardHide").style.display = "none"
        })
    },
    generateCss: function () {
        dgAwardUtil.createElement({
            href: dgAward.myConfig.logoBaseUrl + "/style.css",
            type: "text/css",
            rel: "stylesheet"
        }, "link", dgAwardUtil.getElement("head"))
    },
    generateMyRewards: function () {
        this.myRewards = dgAwardUtil.createElement({
            className: "award-show"
        }, "div", this.wrapper)

    },
    generateWrapper: function () {
        this.wrapper = dgAwardUtil.createElement({
            className: "award-wrapper",
            id: "awardWrapper"
        }, "", dgAwardUtil.getElement(dgAward.myConfig.appendName));
        this.generateAwardShow();
        this.generateAwardHide();
        // this();

    },
    generateAwardHide: function () {
        var awardHide = dgAwardUtil.createElement({
            className: "award-hide",
            id: "awardHide"
        }, "div", this.wrapper);
        var closeSwitch = (function () {
            var closeSwitch = dgAwardUtil.createElement({
                className: "close-switch",
                id: "closeSwitch"
            }, "", awardHide)
            var svgIcon = dgAwardUtil.createElement({
                className: "svg-icon svg-icon-del",
                style: "background-image:url('" + dgAward.myConfig.logoBaseUrl + "/icon-del.svg')"
            }, "i", closeSwitch)
        })();
        var authorLogo = (function () {
            var authorLogo = dgAwardUtil.createElement({
                className: "author-logo"
            }, "", awardHide);
            // console.log(dgAward.myConfig.logoImage)
            dgAwardUtil.createElement({
                className: "author-logo-img",
                style: "background: url('" + dgAward.myConfig.logoImage + "');background-size:cover;"
            }, "", authorLogo)
        })()
        var awardSays = dgAwardUtil.createElement({
            className: "award-says",
            innerText: dgAward.myConfig.hideMes
        }, "", awardHide)
        dgAwardUtil.createElement({
            className: "award-says",
            innerText: dgAward.myConfig.awardMes
        }, "", awardHide)
        var qrcodeWrapper = (function () {
            var qrcodeWrapper = dgAwardUtil.createElement({
                className: "qrcode-wrapper"
            }, "", awardHide);
            var qrCanvas = (function () {
                for (var i = 0, len = dgAward.myConfig.listConfig.length; i < len; i++) {
                    var qrcode = dgAwardUtil.createElement({
                        className: "qrcode qrcode-" + dgAward.myConfig.listConfig[i].className
                    }, "", qrcodeWrapper);
                    dgAwardUtil.genQrcode(qrcode,dgAward.myConfig.listConfig[i].content)
                    dgAwardUtil.createElement({
                        innerText: dgAward.myConfig.listConfig[i].name
                    }, "h3", qrcode)
                }
            })();
        })();


    },
    generateAwardShow: function () {
        var num = dgAwardUtil.genRanNum(3, 17)

        this.awardShow = dgAwardUtil.createElement({
            className: "award-show"
        }, "div", this.wrapper);
        dgAwardUtil.createElement({
            className: "award-title",
            innerText: dgAward.myConfig.showMes
        }, "h3", this.awardShow);
        dgAwardUtil.createElement({
            className: "award-logo",
            id: "awardLogo",
            innerText: "赏"
        }, "div", this.awardShow);
        dgAwardUtil.createElement({
            className: "award-people",
            id: "awardPeople",
            innerText: num + "人打赏"
        }, "div", this.awardShow);
        this.generateAwardPeopleLogo();
    },
    generateAwardPeopleLogo: function () {
        var imgNum = dgAwardUtil.genRanNum(1, 10, 3);

        this.awardPeopleLogo = dgAwardUtil.createElement({
            className: "award-people-logo"
        }, "", this.awardShow)
        this.ul = dgAwardUtil.createElement({
            className: "award-ul"
        }, "ul", this.awardPeopleLogo);
        for (var i = 1; i <= 3; i++) {
            this.iconLi = dgAwardUtil.createElement({
                className: "icon-li " + "icon-" + i,
                style: "background:url('" + dgAward.myConfig.logoBaseUrl + "/logo-" + imgNum[i - 1] + ".jpg');background-size:contain;",
                id: "icon-" + i
            }, "li", this.ul)
        }
    },
    init: function () {
        if (!document.body) {
            setTimeout(dgAward.init, 0)
        } else {
            // dgAward.generateCss();
            dgAward.generateWrapper();
            dgAward.eventListen()
        }
    }

};
var dgAwardUtil = {
    generateUrl: function (params, baseUrl) {
        var paramsAll = '';
        for (var k in params) {
            paramsAll += k + "=" + params[k] + '&';
        }
        return (baseUrl + '?' + paramsAll).slice(0, -1)
    },
    // 新建一个二维码
    genQrcode: function (ele, text, width, colorDark, colorLight, correctLevel) {
        var qrcode = new QRCode(ele, {
            text: text,
            width: width || 128,
            height: width || 128,
            colorDark: colorDark || "#000000",
            colorLight: colorLight || "#ffffff",
            correctLevel: correctLevel || QRCode.CorrectLevel.H
        });
    },
    //    生成三个不等随机数
    //count为随机数个数，返回数组
    genRanNum: function (lowLimit, upLimit, count) {
        // noinspection JSAnnotator
        var ranNum, ranArr = [];
        if (count) {
            ranNum = Math.round((upLimit - lowLimit - count + 1) * Math.random() + lowLimit);
            for (var i = 0, len = count; i < len; i++) {
                ranArr.push(ranNum + i)
            }
        } else {
            ranNum = Math.round((upLimit - lowLimit) * Math.random() + lowLimit);
            ranArr.push(ranNum)
        }
        return ranArr;
    },
    /***在目标元素target最后创建新元素。
     * 新元素标签名为tagName,属性由param键值对决定
     */
    createElement: function (param, tagName, target) {
        var element = document.createElement(tagName || "div");
        for (var key in param) {
            key == "style" ? (element[key].cssText = param[key]) : (element[key] = param[key])
        }
        return (target || document.body).appendChild(element);
    },
    /***
     * 根据className获得元素
     */
    getElement: function (param) {
        if (param.charAt(0) === "#") {
            if (document.getElementById(param.slice(1))) {
                return document.getElementById(param.slice(1))
            }
        }
        if (param.indexOf(".") === 0) {
            if (document.getElementsByClassName(param.slice(1))) {
                return document.getElementsByClassName(param.slice(1))[0];
            }

        }

        if (document.getElementsByTagName(param)[0]) {
            return document.getElementsByTagName(param)[0];
        }
        return false;
    },
    onClick: function (element, func) {
        if (dgAwardUtil.getElement(element)) {
            dgAwardUtil.getElement(element).addEventListener("click", function () {
                func();
            })
        }
    }


};
dgAward.init();