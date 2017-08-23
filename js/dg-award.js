var dgAward = window.dgAward  || {
    myConfig: {
        imagePrefix : "",
        cssPrefix : "",
        logoImageId: "",
        cssUrl:"",
        baseUrl:"http://qr.liantu.com/api.php",
        listConfig:{
            'alipay':{content:"HTTPS://QR.ALIPAY.COM/FKX04775JJLPLHW03GV321",name:"支付宝",desc:"支付宝打赏",className:"alipay",logo:""},
            'wechat':{content:"wxp://f2f0FQyMGuEt3K-YvCtxx0Vu8A-XS3X92uE7",name:"微信",desc:"微信打赏",className:"wechat",logo:""}
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
    }
};