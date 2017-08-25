var dgAward = window.dgAward  || {
    myConfig: {
        imagePrefix : "",
        cssPrefix : "",
        logoImageId: "",
        cssUrl:"",
        baseUrl:"http://qr.liantu.com/api.php",
        listConfig:[
    {configName:'alipay',content:"HTTPS://QR.ALIPAY.COM/FKX04775JJLPLHW03GV321",name:"支付宝",desc:"支付宝打赏",className:"alipay",logo:""},
    {configName:'wechat',content:"wxp://f2f0FQyMGuEt3K-YvCtxx0Vu8A-XS3X92uE7",name:"微信",desc:"微信打赏",className:"wechat",logo:""}
        ]
    },
    qrUrl: function(){
      var config = dgAward.myConfig.listConfig;
        for(var i=0,len=config.length; i<len; i++){
          confiig = config[i]
          baseUrl = myConfig.baseUrl;
          params = {
              name : config.name,
              w:150
            }
            dgAwardUtil.generateUrl(params,baseUrl)

        }
    },
    init:function () {
        if(!document.body){
            setTimeout(dgAward.init,0)
        }else{
            dgAward.generateMyConfig();
            dgAward.loadCss();
            dgAward.generateMyRewards();
            dgAward.stat();
        }
    }

};
var dgAwardUtil = {
    //http://qr.liantu.com/api.php?w=150&text=HTTPS://QR.ALIPAY.COM/FKX04775JJLPLHW03GV321
    // params ={}
    generateUrl:function (params,baseUrl) {
        var paramsAll = '';
        for (var k in params){
            paramsAll += k + "=" + params[k];
        }
        return (baseUrl+'?'+paramsAll).slice(0,-1)
    },
//    生成三个不等随机数
//count为随机数个数，返回数组
    genRanNum : function (lowLimit,upLimit,count) {
        // noinspection JSAnnotator
        var ranNum,ranArr = [];
        if(count){
            ranNum  = Math.round((upLimit - lowLimit - count -1) * Math.random());
            for(var i=0,len=count; i<len; i++){
                ranArr.push(ranNum+i)
            }
        }else{
            ranNum =  Math.round((upLimit - lowLimit) * Math.random());
            ranArr.push(ranNum)
        }
        return ranArr;
    },
    /***在目标元素target最后创建新元素。
     * 新元素标签名为tagName,属性由param键值对决定
     */
    createElement	: function(param, tagName, target) {
        var element = document.createElement(tagName || "div");
        for (var key in param) {
            key == "style" ? (element[key].cssText = param[key]) : (element[key] = param[key])
        }
        return (target || document.body).appendChild(element);
    },/***
     * 根据className获得元素
     */
    getElement:	function(param) {
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
    onClick : function (element,func) {
        if(getElement(element)){
            getElement(element).addEventListener("click",function () {
                func();
            })
        }
    }


};
